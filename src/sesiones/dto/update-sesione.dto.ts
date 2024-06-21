import { PartialType } from '@nestjs/mapped-types';
import { SesionDTO } from './create-sesione.dto';

export class UpdateSesioneDto extends PartialType(SesionDTO) {}
