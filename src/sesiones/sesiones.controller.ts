import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { SesionesService } from './sesiones.service';
import { Sesion } from './entities/sesione.entity';

@ApiTags('Sesiones')
@Controller('sesiones')
export class SesionesController {
  constructor(private readonly sesionesService: SesionesService) { }

  @ApiOperation({ summary: 'Obtener todas las sesiones' })
  @ApiResponse({ status: 200, description: 'Lista de todas las sesiones', type: [Sesion] })
  @Get()
  findAll(): Promise<Sesion[]> {
    return this.sesionesService.findAll();
  }

  @ApiOperation({ summary: 'Obtener las sesiones más ocupadas' })
  @ApiResponse({ status: 200, description: 'Lista de sesiones más ocupadas', type: [Sesion] })
  @Get('mas-ocupadas')
  findMostOccupied(): Promise<Sesion[]> {
    return this.sesionesService.findMostOccupied();
  }

  @ApiOperation({ summary: 'Obtener las sesiones más disponibles' })
  @ApiResponse({ status: 200, description: 'Lista de sesiones más disponibles', type: [Sesion] })
  @Get('mas-disponibles')
  findMostAvailable(): Promise<Sesion[]> {
    return this.sesionesService.findMostAvailable();
  }

  @ApiOperation({ summary: 'Obtener los espacios asignados a una sesión específica' })
  @ApiParam({ name: 'id', description: 'ID de la sesión' })
  @ApiResponse({ status: 200, description: 'Espacios asignados a la sesión', type: Sesion })
  @Get(':id/espacios')
  findAssignedEspacios(@Param('id') id: number): Promise<Sesion> {
    return this.sesionesService.findAssignedEspacios(id);
  }
}
