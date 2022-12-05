export default class Reservacion{
    public id: number;
    public nombreReservacion: string;
    public telefono: string;
    public numeroPersonas: number;
    public horaInicio: string;
    public mensaje: string;
    public correoElectronico: string;
    public evento: string;
    public fechaEvento: string;
    public lugar: number;
    public fechaCreacion: Date;
    public fechaActualizacion: Date;

    public constructor(
        id: number | undefined,
        nombreReservacion: string,
        telefono: string,
        numeroPersonas: number,
        horaInicio: string,
        mensaje: string,
        correoElectronico: string,
        evento: string,
        fechaEvento: string,
        lugar: number,
        fechaCreacion?: Date,
        fechaActualizacion?: Date
    ){
        this.id = id as number;
        this.nombreReservacion = nombreReservacion;
        this.telefono = telefono;
        this.numeroPersonas = numeroPersonas;
        this.horaInicio=horaInicio;
        this.mensaje= mensaje;
        this.correoElectronico = correoElectronico;
        this.evento = evento;
        this.fechaEvento = fechaEvento;
        this.lugar = lugar;
        this.fechaCreacion = fechaCreacion as Date;
        this.fechaActualizacion = fechaActualizacion as Date;
    }
}