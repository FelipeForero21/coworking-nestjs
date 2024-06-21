import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';

export class UsuarioDTO {
    @ApiProperty({ description: 'ID del usuario' })
    @IsNotEmpty()
    id: number;

    @ApiProperty({ description: 'Nombre del usuario' })
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Correo electrónico del usuario' })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'Teléfono del usuario' })
    @IsNotEmpty()
    @IsPhoneNumber()
    telefono: string;
}
