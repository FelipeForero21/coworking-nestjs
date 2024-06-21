import { PartialType } from '@nestjs/mapped-types';
import { CreateEspaciosDeTrabajoDto } from './create-espacios_de_trabajo.dto';

export class UpdateEspaciosDeTrabajoDto extends PartialType(CreateEspaciosDeTrabajoDto) {}
