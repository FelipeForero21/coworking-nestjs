import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { EspaciosDeTrabajoService } from './espacios_de_trabajo.service';
import { Espacio } from './entities/espacios_de_trabajo.entity';

@ApiTags('Espacios')
@Controller('espacios')
export class EspaciosDeTrabajoController {
  constructor(private readonly espaciosDeTrabajoService: EspaciosDeTrabajoService) { }

  @ApiOperation({ summary: 'Obtener todos los espacios' })
  @ApiResponse({ status: 200, description: 'Lista de todos los espacios', type: [Espacio] })
  @Get()
  findAll(): Promise<Espacio[]> {
    return this.espaciosDeTrabajoService.findAll();
  }

  @ApiOperation({ summary: 'Obtener espacios disponibles por sala y sesión' })
  @ApiParam({ name: 'salaId', description: 'ID de la sala' })
  @ApiParam({ name: 'sesionId', description: 'ID de la sesión' })
  @ApiResponse({ status: 200, description: 'Lista de espacios disponibles', type: [Espacio] })
  @Get('disponibles/:salaId/:sesionId')
  findAvailable(@Param('salaId') salaId: number, @Param('sesionId') sesionId: number): Promise<Espacio[]> {
    return this.espaciosDeTrabajoService.findAvailableBySalaAndSesion(salaId, sesionId);
  }

  @ApiOperation({ summary: 'Obtener espacios ocupados por sala y sesión' })
  @ApiParam({ name: 'salaId', description: 'ID de la sala' })
  @ApiParam({ name: 'sesionId', description: 'ID de la sesión' })
  @ApiResponse({ status: 200, description: 'Lista de espacios ocupados', type: [Espacio] })
  @Get('ocupados/:salaId/:sesionId')
  findOccupied(@Param('salaId') salaId: number, @Param('sesionId') sesionId: number): Promise<Espacio[]> {
    return this.espaciosDeTrabajoService.findOccupiedBySalaAndSesion(salaId, sesionId);
  }
}
