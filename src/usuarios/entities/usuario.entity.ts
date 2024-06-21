import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReservaDeEspacio } from "src/reservas_de_espacios_de_trabajo/entities/reservas_de_espacios_de_trabajo.entity";
import { Sesion } from "src/sesiones/entities/sesione.entity";

@Entity({ schema: 'public', name: "usuarios" })
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    email: string;

    @Column()
    telefono: string;

    @OneToMany(() => ReservaDeEspacio, reserva => reserva.usuario)
    reservas: ReservaDeEspacio[];

    @OneToMany(() => Sesion, sesion => sesion.usuario)
    sesiones: Sesion[];
}
