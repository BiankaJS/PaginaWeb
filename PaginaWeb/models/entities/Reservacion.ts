import { Entity, PrimaryGeneratedColumn, Column, Repository, QueryFailedError, Timestamp, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import Lugares from './Lugar';

@Entity({ name: 'Reservacion' })
export default class Reservacion
{
    @PrimaryGeneratedColumn({ type: 'mediumint', unsigned: true})
    public Id: number;

    @Column({ type: "varchar", length: 30, nullable: false})
    public nombreCompleto: string;

    @Column({ type: "varchar", length: 30, nullable: false})
    public correo: string;

    @Column({ type: "varchar", length: 12, nullable: false})
    public telefono: string;

    @Column({ type: "varchar", length: 30})
    public evento: string;

    @Column({ type: "int", length: 30})
    public numPersonas: number;

    @Column({ type: 'datetime', nullable: false })
    public fechaEvento: Date;

    @Column({ type: 'time', nullable: false })
    public horaEvento: Timestamp;

    @OneToOne(() => Lugares)
    @JoinColumn()
    lugarId: Lugares

    @Column({ type: "varchar", nullable: true})
    public mensaje: string;
    
    @Column({ type: 'int', nullable: false })
    public codigoEstado: boolean;

}