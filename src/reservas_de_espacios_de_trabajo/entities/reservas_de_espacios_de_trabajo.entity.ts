import { Espacio } from "src/espacios_de_trabajo/entities/espacios_de_trabajo.entity";
import { Sesion } from "src/sesiones/entities/sesione.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({ schema: 'coworking', name: "reservas_de_espacios_de_trabajo" })
export class ReservaDeEspacio {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Espacio, espacio => espacio.reservas)
    @JoinColumn({ name: 'espacio_trabajo_id' })
    espacio: Espacio;

    @ManyToOne(() => Usuario, usuario => usuario.reservas)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;

    @Column({ type: 'date' })
    fecha_reserva: Date;

    @Column({ type: 'time' })
    hora_inicio: string;

    @Column({ type: 'time' })
    hora_fin: string;

    @OneToMany(() => Sesion, sesion => sesion.reserva)
    sesiones: Sesion[];
}