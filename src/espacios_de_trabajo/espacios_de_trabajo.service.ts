import { Injectable } from '@nestjs/common';
import { CreateEspaciosDeTrabajoDto } from './dto/create-espacios_de_trabajo.dto';
import { UpdateEspaciosDeTrabajoDto } from './dto/update-espacios_de_trabajo.dto';

@Injectable()
export class EspaciosDeTrabajoService {
  create(createEspaciosDeTrabajoDto: CreateEspaciosDeTrabajoDto) {
    return 'This action adds a new espaciosDeTrabajo';
  }

  findAll() {
    return `This action returns all espaciosDeTrabajo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} espaciosDeTrabajo`;
  }

  update(id: number, updateEspaciosDeTrabajoDto: UpdateEspaciosDeTrabajoDto) {
    return `This action updates a #${id} espaciosDeTrabajo`;
  }

  remove(id: number) {
    return `This action removes a #${id} espaciosDeTrabajo`;
  }
}
