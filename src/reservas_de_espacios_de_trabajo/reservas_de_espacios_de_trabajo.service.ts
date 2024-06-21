import { Injectable } from '@nestjs/common';
import { CreateReservasDeEspaciosDeTrabajoDto } from './dto/create-reservas_de_espacios_de_trabajo.dto';
import { UpdateReservasDeEspaciosDeTrabajoDto } from './dto/update-reservas_de_espacios_de_trabajo.dto';

@Injectable()
export class ReservasDeEspaciosDeTrabajoService {
  create(createReservasDeEspaciosDeTrabajoDto: CreateReservasDeEspaciosDeTrabajoDto) {
    return 'This action adds a new reservasDeEspaciosDeTrabajo';
  }

  findAll() {
    return `This action returns all reservasDeEspaciosDeTrabajo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservasDeEspaciosDeTrabajo`;
  }

  update(id: number, updateReservasDeEspaciosDeTrabajoDto: UpdateReservasDeEspaciosDeTrabajoDto) {
    return `This action updates a #${id} reservasDeEspaciosDeTrabajo`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservasDeEspaciosDeTrabajo`;
  }
}
