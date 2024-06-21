import { PartialType } from '@nestjs/mapped-types';
import { SalaDTO } from './create-sala.dto';

export class UpdateSalaDto extends PartialType(SalaDTO) {}
