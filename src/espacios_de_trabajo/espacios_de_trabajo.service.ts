import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { Espacio } from './entities/espacios_de_trabajo.entity';

@Injectable()
export class EspaciosDeTrabajoService {
  constructor(
    @InjectRepository(Espacio)
    private readonly espacioRepository: Repository<Espacio>,
  ) {}

  async findAll(): Promise<Espacio[]> {
    return this.espacioRepository.find();
  }

  async findAvailableBySalaAndSesion(salaId: number, sesionId: number): Promise<Espacio[]> {
    return this.espacioRepository.createQueryBuilder('espacio')
      .leftJoinAndSelect('espacio.sesiones', 'sesion')
      .where('espacio.sala = :salaId', { salaId })
      .andWhere('espacio.disponible = true')
      .andWhere('sesion.id = :sesionId', { sesionId })
      .andWhere('sesion.usuario IS NULL')
      .getMany();
  }

  async findOccupiedBySalaAndSesion(salaId: number, sesionId: number): Promise<Espacio[]> {
    return this.espacioRepository.createQueryBuilder('espacio')
      .leftJoinAndSelect('espacio.sesiones', 'sesion')
      .where('espacio.sala = :salaId', { salaId })
      .andWhere('espacio.disponible = false')
      .andWhere('sesion.id = :sesionId', { sesionId })
      .andWhere('sesion.usuario IS NOT NULL')
      .getMany();
  }
}
