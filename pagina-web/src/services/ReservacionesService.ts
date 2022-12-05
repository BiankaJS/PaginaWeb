import axios, { AxiosError } from "axios";
import Lugar from "../models/Lugar";
import Reservacion from "../models/Reservacion";

interface ReservacionBackend {
    id: number;
    nombreReservacion: string;
    telefono: string;
    numeroPersonas: number;
    horaInicio: string;
    mensaje: string;
    correoElectronico: string;
    evento: string;
    fechaEvento: string;
    lugar: number;
    fechaCreacion: string;
    fechaActualizacion: string;

}

export default class ReservacionesService {
    private baseUrl: string;

    private tokenSesion: string;

    public constructor(tokenSesion: string) {
        this.tokenSesion = tokenSesion;
        this.baseUrl = 'http://localhost:3001/lugares'
    }

    private get headers() {
        return {
            'Token-Sesion': this.tokenSesion
        };
    }

    //Registrar Reservaciones
    public async registrar(reservacion: Reservacion): Promise<Reservacion> {
        try {
            const respuesta = await axios.post(
                this.baseUrl,
                reservacion,
                { headers: this.headers }
            );
            const {
                id,
                nombreReservacion,
                telefono,
                numeroPersonas,
                horaInicio,
                mensaje,
                correoElectronico,
                evento,
                fechaEvento,
                lugar,
                fechaCreacion,
                fechaActualizacion
            } = respuesta.data as ReservacionBackend;

            return new Reservacion(
                id,
                nombreReservacion,
                telefono,
                numeroPersonas,
                horaInicio,
                mensaje,
                correoElectronico,
                evento, 
                //Aqui no se si poner new Date porque cargaria la que esta de cuando se creo 
                fechaEvento,
                lugar,
                new Date(fechaCreacion),
                new Date(fechaActualizacion)
            )
        } catch (e) {
            if (e instanceof AxiosError && e.response) {
                switch (e.response.status) {
                    case 400: // Bad Request
                        throw new Error('ErrorFormularioIncompleto');
                    case 401: // Unauthorized
                        throw new Error('ErrorSesionExpiradaOInvalida');
                    case 404: // Servidor no encuentra el lugar
                        throw new Error('ErrorLugarNoEncontrado');
                    default:
                        throw e;
                }
            }
            throw e;
        }
    }

    //Actualizar Reservaciones
    public async actualizar(reservacion: Reservacion): Promise<void> {
        try {
            await axios.put(
                `${this.baseUrl}/${reservacion.id}`,
                reservacion,
                { headers: this.headers }
            );
        } catch (e) {
            if (e instanceof AxiosError && e.response) {
                switch (e.response.status) {
                    case 401:
                        throw new Error('ErrorSesionExpiradaOInvalida');
                    case 409: 
                        throw new Error('ErrorReservacionExistente')
                    default:
                        throw e;
                }
            }
            throw e;
        }
    }

    //Eliminar Reservaciones
    public async eliminarReservacion(id: number): Promise<void>{
        try {
            const respuesta = await axios.delete(
                `${this.baseUrl}/${id}`,
                { headers: this.headers }
            );

        } catch (e){
            throw e;
        }
    }
}