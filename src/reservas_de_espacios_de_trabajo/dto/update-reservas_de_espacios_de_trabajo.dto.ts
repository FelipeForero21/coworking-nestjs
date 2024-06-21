import { PartialType } from '@nestjs/mapped-types';
import { CreateReservasDeEspaciosDeTrabajoDto } from './create-reservas_de_espacios_de_trabajo.dto';

export class UpdateReservasDeEspaciosDeTrabajoDto extends PartialType(CreateReservasDeEspaciosDeTrabajoDto) {}
