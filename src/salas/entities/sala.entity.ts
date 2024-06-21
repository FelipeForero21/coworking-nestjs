import { Espacio } from "src/espacios_de_trabajo/entities/espacios_de_trabajo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "salas" })
export class Sala {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    num_filas: number;

    @Column()
    num_columnas: number;

    @OneToMany(() => Espacio, espacio => espacio.sala)
    espacios: Espacio[];
}
