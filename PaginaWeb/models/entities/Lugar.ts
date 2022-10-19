import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({ name: 'lugar' })
export default class Lugares
{
    @PrimaryGeneratedColumn({ type: 'mediumint', unsigned: true})
    public Id: number;

    @Column({ type: "varchar", length: 30, nullable: false})
    public nombre: string;

    @Column({ type: "varchar", length: 150, nullable: false})
    public descripcion: string;

    @Column({ type: "varchar", length: 30, nullable: false})
    public direccion: string;

    @Column({ type: "varchar", length: 12})
    public telefono: string;

}