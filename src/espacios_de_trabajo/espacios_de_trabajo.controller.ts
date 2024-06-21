import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EspaciosDeTrabajoService } from './espacios_de_trabajo.service';
import { CreateEspaciosDeTrabajoDto } from './dto/create-espacios_de_trabajo.dto';
import { UpdateEspaciosDeTrabajoDto } from './dto/update-espacios_de_trabajo.dto';

@Controller('espacios-de-trabajo')
export class EspaciosDeTrabajoController {
  constructor(private readonly espaciosDeTrabajoService: EspaciosDeTrabajoService) {}

  @Post()
  create(@Body() createEspaciosDeTrabajoDto: CreateEspaciosDeTrabajoDto) {
    return this.espaciosDeTrabajoService.create(createEspaciosDeTrabajoDto);
  }

  @Get()
  findAll() {
    return this.espaciosDeTrabajoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.espaciosDeTrabajoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEspaciosDeTrabajoDto: UpdateEspaciosDeTrabajoDto) {
    return this.espaciosDeTrabajoService.update(+id, updateEspaciosDeTrabajoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.espaciosDeTrabajoService.remove(+id);
  }
}
