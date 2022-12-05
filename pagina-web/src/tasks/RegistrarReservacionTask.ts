import Reservacion from "../models/Reservacion";
import ReservacionesService from "../services/ReservacionesService";


export default class RegistrarReservacionTask {
    private reservacion: Reservacion;

    public constructor(reservacion: Reservacion) {
        this.reservacion = reservacion;
    }

    public async execute(): Promise<void> {
        this.validar();
        await this.registrarReservacion();
    }

    private validar(): void {
        const { 
            nombreReservacion,
            telefono,
            numeroPersonas,
            horaInicio,
            correoElectronico,
            evento,
            fechaEvento,
            lugar} = this.reservacion;

        if (!nombreReservacion|| !telefono || !numeroPersonas || !horaInicio || !correoElectronico|| !evento || !fechaEvento || !lugar) {
            throw new Error('ErrorFormularioIncompleto');
        }
    }

    public async registrarReservacion(): Promise<void> {
        const tokenSesion = localStorage.getItem('tokenSesion');

        if (!tokenSesion) {
            throw new Error('ErrorSesionExpiradaOInvalida');
        }

        const servicioReservacion = new ReservacionesService(tokenSesion);
        await servicioReservacion.registrar(this.reservacion);
    }
}