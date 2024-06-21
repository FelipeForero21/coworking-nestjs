import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sesion } from './entities/sesione.entity';

@Injectable()
export class SesionesService {
  constructor(
    @InjectRepository(Sesion)
    private readonly sesionRepository: Repository<Sesion>,
  ) {}

  async findAll(): Promise<Sesion[]> {
    return this.sesionRepository.find();
  }
  async findMostOccupied(): Promise<Sesion[]> {
    return this.sesionRepository
      .createQueryBuilder('sesion')
      .select([
        'sesion.id',
        'sesion.hora_inicio',
        'sesion.hora_fin',
        'reserva.fecha_reserva',
        'espacio.id as espacio_id',
        'usuario.id as usuario_id',
        'COUNT(usuario.id) as count'
      ])
      .leftJoin('sesion.reserva', 'reserva')
      .leftJoin('sesion.espacio', 'espacio')
      .leftJoin('sesion.usuario', 'usuario')
      .groupBy('sesion.id, reserva.id, espacio.id, usuario.id')
      .orderBy('count', 'DESC')
      .getMany();
  }
  
  async findMostAvailable(): Promise<Sesion[]> {
    return this.sesionRepository
      .createQueryBuilder('sesion')
      .select([
        'sesion.id',
        'sesion.hora_inicio',
        'sesion.hora_fin',
        'espacio.id as espacio_id',
        'usuario.id as usuario_id',
        'COUNT(usuario.id) as count'
      ])
      .leftJoin('sesion.espacio', 'espacio')
      .leftJoin('sesion.usuario', 'usuario')
      .groupBy('sesion.id, espacio.id, usuario.id')
      .orderBy('count', 'ASC')
      .getMany();
  }
  
  async findAssignedEspacios(sesionId: number): Promise<Sesion> {
    return this.sesionRepository.findOne({
      where: { id: sesionId },
      relations: ['espacio', 'usuario'],
    });
  }

  
}
