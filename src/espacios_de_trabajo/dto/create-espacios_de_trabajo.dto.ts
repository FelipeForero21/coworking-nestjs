import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
import { SalaDTO } from 'src/salas/dto/create-sala.dto';

export class EspacioDTO {
    @ApiProperty({ description: 'ID del espacio' })
    @IsNotEmpty()
    id: number;

    @ApiProperty({ description: 'Número de fila del espacio' })
    @IsNotEmpty()
    @IsNumber()
    fila: number;

    @ApiProperty({ description: 'Número de columna del espacio' })
    @IsNotEmpty()
    @IsNumber()
    columna: number;

    @ApiProperty({ description: 'Disponibilidad del espacio' })
    @IsNotEmpty()
    @IsBoolean()
    disponible: boolean;

    @ApiProperty({ type: SalaDTO, description: 'Sala asociada al espacio' })
    @IsNotEmpty()
    sala: SalaDTO;
}
