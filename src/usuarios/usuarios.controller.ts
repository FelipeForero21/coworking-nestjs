import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuariosController {
 constructor(private readonly usuariosService: UsuariosService) {}

 @ApiOperation({ summary: 'Obtener todos los usuarios' })
 @ApiResponse({ status: 200, description: 'Lista de todos los usuarios', type: [Usuario] })
 @Get()
 findAll(): Promise<Usuario[]> {
   return this.usuariosService.findAll();
 }
}
