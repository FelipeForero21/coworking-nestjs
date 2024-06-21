import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findAssignedEspacios(usuarioId: number): Promise<Usuario> {
    return this.usuarioRepository.findOne({
      where: { id: usuarioId },
      relations: ['reservas', 'reservas.espacio'],
    });
  }
}
