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
    return this.sesionRepository.createQueryBuilder('sesion')
      .leftJoinAndSelect('sesion.espacio', 'espacio')
      .leftJoinAndSelect('sesion.usuario', 'usuario')
      .orderBy('COUNT(usuario.id)', 'DESC')
      .groupBy('sesion.id')
      .getMany();
  }

  async findMostAvailable(): Promise<Sesion[]> {
    return this.sesionRepository.createQueryBuilder('sesion')
      .leftJoinAndSelect('sesion.espacio', 'espacio')
      .leftJoinAndSelect('sesion.usuario', 'usuario')
      .orderBy('COUNT(usuario.id)', 'ASC')
      .groupBy('sesion.id')
      .getMany();
  }

  async findAssignedEspacios(sesionId: number): Promise<Sesion> {
    return this.sesionRepository.findOne({
      where: { id: sesionId },
      relations: ['espacio', 'usuario'],
    });
  }
}
