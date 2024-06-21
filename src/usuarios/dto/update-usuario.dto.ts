import { PartialType } from '@nestjs/mapped-types';
import { UsuarioDTO } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(UsuarioDTO) {}
