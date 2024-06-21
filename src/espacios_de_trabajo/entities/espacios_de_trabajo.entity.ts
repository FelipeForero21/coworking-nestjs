import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sala } from "src/salas/entities/sala.entity";
import { Sesion } from "src/sesiones/entities/sesione.entity";
import { ReservaDeEspacio } from "src/reservas_de_espacios_de_trabajo/entities/reservas_de_espacios_de_trabajo.entity";

@Entity({ schema: 'public', name: "espacios_de_trabajo" })
export class Espacio {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Sala, sala => sala.espacios)
    @JoinColumn({ name: 'sala_id' })
    sala: Sala;

    @Column()
    fila: number;

    @Column()
    columna: number;

    @Column()
    disponible: boolean;

    @OneToMany(() => ReservaDeEspacio, reserva => reserva.espacio)
    reservas: ReservaDeEspacio[];

    @OneToMany(() => Sesion, sesion => sesion.espacio)
    sesiones: Sesion[];
}
