import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { EspacioDTO } from 'src/espacios_de_trabajo/dto/create-espacios_de_trabajo.dto';
import { ReservaDeEspacioDTO } from 'src/reservas_de_espacios_de_trabajo/dto/create-reservas_de_espacios_de_trabajo.dto';
import { UsuarioDTO } from 'src/usuarios/dto/create-usuario.dto';

export class SesionDTO {
    @ApiProperty({ description: 'ID de la sesión' })
    @IsNotEmpty()
    id: number;

    @ApiProperty({ description: 'Hora de inicio de la sesión' })
    @IsNotEmpty()
    @IsString()
    hora_inicio: string;

    @ApiProperty({ description: 'Hora de fin de la sesión' })
    @IsNotEmpty()
    @IsString()
    hora_fin: string;

    @ApiProperty({ type: ReservaDeEspacioDTO, description: 'Reserva asociada a la sesión' })
    @IsNotEmpty()
    reserva: ReservaDeEspacioDTO;

    @ApiProperty({ type: EspacioDTO, description: 'Espacio asociado a la sesión' })
    @IsNotEmpty()
    espacio: EspacioDTO;

    @ApiProperty({ type: UsuarioDTO, description: 'Usuario asociado a la sesión' })
    @IsNotEmpty()
    usuario: UsuarioDTO;
}
