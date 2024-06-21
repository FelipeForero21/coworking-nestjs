import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class SalaDTO {
    @ApiProperty({ description: 'ID de la sala' })
    @IsNotEmpty()
    id: number;

    @ApiProperty({ description: 'Nombre de la sala' })
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Número de filas en la sala' })
    @IsNotEmpty()
    @IsNumber()
    num_filas: number;

    @ApiProperty({ description: 'Número de columnas en la sala' })
    @IsNotEmpty()
    @IsNumber()
    num_columnas: number;
}
