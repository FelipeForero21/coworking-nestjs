import { Controller, Get, Param } from '@nestjs/common';
import { SesionesService } from './sesiones.service';
import { Sesion } from './entities/sesione.entity';

@Controller('sesiones')
export class SesionesController {
  constructor(private readonly sesionesService: SesionesService) {}

  @Get()
  findAll(): Promise<Sesion[]> {
    return this.sesionesService.findAll();
  }

  @Get('mas-ocupadas')
  findMostOccupied(): Promise<Sesion[]> {
    return this.sesionesService.findMostOccupied();
  }

  @Get('mas-disponibles')
  findMostAvailable(): Promise<Sesion[]> {
    return this.sesionesService.findMostAvailable();
  }

  @Get(':id/espacios')
  findAssignedEspacios(@Param('id') id: number): Promise<Sesion> {
    return this.sesionesService.findAssignedEspacios(id);
  }
}
