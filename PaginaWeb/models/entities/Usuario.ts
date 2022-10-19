import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({ name: 'usuario' })
export default class Usuario
{
    @PrimaryGeneratedColumn({ type: 'mediumint', unsigned: true})
    public Id: number;

    @Column({ type: "varchar", length: 50, nullable: false})
    public nombre: string;

    @Column({ type: "varchar", length: 32, nullable: false})
    public apellido: string;

    @Column({ type: "datetime", nullable: false})
    public fechaNacimiento: Date;

    @Column({ type: "varchar", length: 32})
    public correo: string;

    @Column({ type: 'varchar', nullable: false})
    public usuario: string;

    @Column({ type: "varchar", length: 32, nullable: false})
    public password: string;

    @Column({ type: "varchar", nullable: false})
    public telefono: string;

    @Column({ type: "datetime", nullable: false})
    public fechaCreacion: Date;
}