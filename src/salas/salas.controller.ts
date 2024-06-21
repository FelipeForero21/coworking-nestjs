import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SalasService } from './salas.service';
import { Sala } from './entities/sala.entity';

@ApiTags('Salas')
@Controller('salas')
export class SalasController {
  constructor(private readonly salasService: SalasService) { }

  @ApiOperation({ summary: 'Obtener todas las salas' })
  @ApiResponse({ status: 200, description: 'Lista de todas las salas', type: [Sala] })
  @Get()
  findAll(): Promise<Sala[]> {
    return this.salasService.findAll();
  }
}
