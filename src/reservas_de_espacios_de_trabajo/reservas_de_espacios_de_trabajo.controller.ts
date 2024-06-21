import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservasDeEspaciosDeTrabajoService } from './reservas_de_espacios_de_trabajo.service';
import { CreateReservasDeEspaciosDeTrabajoDto } from './dto/create-reservas_de_espacios_de_trabajo.dto';
import { UpdateReservasDeEspaciosDeTrabajoDto } from './dto/update-reservas_de_espacios_de_trabajo.dto';

@Controller('reservas-de-espacios-de-trabajo')
export class ReservasDeEspaciosDeTrabajoController {
  constructor(private readonly reservasDeEspaciosDeTrabajoService: ReservasDeEspaciosDeTrabajoService) {}

  @Post()
  create(@Body() createReservasDeEspaciosDeTrabajoDto: CreateReservasDeEspaciosDeTrabajoDto) {
    return this.reservasDeEspaciosDeTrabajoService.create(createReservasDeEspaciosDeTrabajoDto);
  }

  @Get()
  findAll() {
    return this.reservasDeEspaciosDeTrabajoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservasDeEspaciosDeTrabajoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservasDeEspaciosDeTrabajoDto: UpdateReservasDeEspaciosDeTrabajoDto) {
    return this.reservasDeEspaciosDeTrabajoService.update(+id, updateReservasDeEspaciosDeTrabajoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservasDeEspaciosDeTrabajoService.remove(+id);
  }
}
