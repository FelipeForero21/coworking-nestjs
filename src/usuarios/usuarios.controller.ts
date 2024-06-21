import { Controller, Get, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id/espacios')
  findAssignedEspacios(@Param('id') id: number): Promise<Usuario> {
    return this.usuariosService.findAssignedEspacios(id);
  }
}

