import { Controller, Get, Param } from '@nestjs/common';
import { EspaciosDeTrabajoService } from './espacios_de_trabajo.service';
import { Espacio } from './entities/espacios_de_trabajo.entity';

@Controller('espacios')
export class EspaciosDeTrabajoController {
  constructor(private readonly espaciosDeTrabajoService: EspaciosDeTrabajoService) {}

  @Get()
  findAll(): Promise<Espacio[]> {
    return this.espaciosDeTrabajoService.findAll();
  }

  @Get('disponibles/:salaId/:sesionId')
  findAvailable(@Param('salaId') salaId: number, @Param('sesionId') sesionId: number): Promise<Espacio[]> {
    return this.espaciosDeTrabajoService.findAvailableBySalaAndSesion(salaId, sesionId);
  }

  @Get('ocupados/:salaId/:sesionId')
  findOccupied(@Param('salaId') salaId: number, @Param('sesionId') sesionId: number): Promise<Espacio[]> {
    return this.espaciosDeTrabajoService.findOccupiedBySalaAndSesion(salaId, sesionId);
  }
}

