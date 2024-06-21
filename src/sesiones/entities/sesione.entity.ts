import { Espacio } from "src/espacios_de_trabajo/entities/espacios_de_trabajo.entity";
import { ReservaDeEspacio } from "src/reservas_de_espacios_de_trabajo/entities/reservas_de_espacios_de_trabajo.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity({ schema: 'public', name: "sesiones" })
export class Sesion {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ReservaDeEspacio, reserva => reserva.sesiones)
    @JoinColumn({ name: 'reservas_de_espacios_de_trabajo_id' })
    reserva: ReservaDeEspacio;

    @ManyToOne(() => Espacio, espacio => espacio.sesiones)
    @JoinColumn({ name: 'espacio_trabajo_id' })
    espacio: Espacio;

    @ManyToOne(() => Usuario, usuario => usuario.sesiones)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;

    @Column({ type: 'time' })
    hora_inicio: string;

    @Column({ type: 'time' })
    hora_fin: string;
}