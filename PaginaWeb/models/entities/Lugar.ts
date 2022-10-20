import { Entity, PrimaryGeneratedColumn, Column, Repository, QueryFailedError } from 'typeorm';
import DatabaseConnection from '../../database/DatabaseConnetion';

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

    @Column({ type: 'datetime', nullable: false })
    public fechaCreacion: Date;

    @Column({ type: 'datetime', nullable: false })
    public fechaActualizacion: Date;
    
    @Column({ type: 'datetime', nullable: false })
    public codigoEstado: boolean;
    
    private constructor(
        nombre: string,
        descripcion: string,
        direccion: string,
        telefono: string,
        fechaCreacion: Date
    ) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.telefono = telefono;
        this.fechaCreacion = fechaCreacion;
    }

    public async actualizar(
        nombre: string,
        descripcion: string,
        direccion: string,
        telefono: string
    ): Promise<void> {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.telefono = telefono;
        this.fechaActualizacion = new Date();

        const repositorioUsuarios = await Lugares.obtenerRepositorioLugares();

        try {
            await repositorioUsuarios.save(this);
        } catch (e) {
            if (e instanceof QueryFailedError && e.message.includes('ER_DUP_ENTRY')) {
                throw new Error('ErrorModeloDuplicado');
            }

            throw e;
        }
    }

    public static async eliminar(id: number): Promise<void> {
        const repositorioUsuarios = await Lugares.obtenerRepositorioLugares();
        await repositorioUsuarios.delete(id);
    }

    public static async consultaLugares(): Promise<Lugares[]> {
        const repositorioUsuarios = await Lugares.obtenerRepositorioLugares();
        return repositorioUsuarios.find();
    }

    public static async consultaLugarId(Id: number): Promise<Lugares> {
        const repositorioUsuarios = await Lugares.obtenerRepositorioLugares();

        const lugar = await repositorioUsuarios.findOneBy({ Id });

        if (!lugar) {
            throw new Error('ErrorAutoNoEncontrado');
        }

        return lugar;
    }



    public static async nuevoLugar(
        nombre: string,
        descripcion: string,
        direccion: string,
        telefono: string 

    ): Promise<Lugares> {
        const repositorioUsuarios = await Lugares.obtenerRepositorioLugares();

        const fechaCreacion = new Date();
        const lugar = new Lugares(
            nombre,
            descripcion,
            direccion,
            telefono,
            fechaCreacion

        );

        try {
            await repositorioUsuarios.save(lugar);
        } catch (e) {
            if (e instanceof QueryFailedError && e.message.includes('ER_DUP_ENTRY')) {
                throw new Error('ErrorModeloDuplicado');
            }

            throw e;
        }

        return lugar;
    }

    private static async obtenerRepositorioLugares(): Promise<Repository<Lugares>> {
        const databaseConnection = await DatabaseConnection.getConnectedInstance();
        return databaseConnection.getRepository(Lugares);
    }
}