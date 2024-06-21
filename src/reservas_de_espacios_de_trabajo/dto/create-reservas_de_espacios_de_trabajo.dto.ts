import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, IsString } from 'class-validator';
import { EspacioDTO } from 'src/espacios_de_trabajo/dto/create-espacios_de_trabajo.dto';
import { UsuarioDTO } from 'src/usuarios/dto/create-usuario.dto';

export class ReservaDeEspacioDTO {
    @ApiProperty({ description: 'ID de la reserva' })
    @IsNotEmpty()
    id: number;

    @ApiProperty({ description: 'Fecha de la reserva', type: 'string', format: 'date' })
    @IsNotEmpty()
    @IsDate()
    fecha_reserva: Date;

    @ApiProperty({ description: 'Hora de inicio de la reserva' })
    @IsNotEmpty()
    @IsString()
    hora_inicio: string;

    @ApiProperty({ description: 'Hora de fin de la reserva' })
    @IsNotEmpty()
    @IsString()
    hora_fin: string;

    @ApiProperty({ type: EspacioDTO, description: 'Espacio asociado a la reserva' })
    @IsNotEmpty()
    espacio: EspacioDTO;

    @ApiProperty({ type: UsuarioDTO, description: 'Usuario que hizo la reserva' })
    @IsNotEmpty()
    usuario: UsuarioDTO;
}
