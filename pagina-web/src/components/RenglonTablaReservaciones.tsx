import Reservacion from '../models/Reservacion';
import './scss/RenglonTablaReservaciones.scss'

interface RenglonTablaReservacionProps {
    reservacion: Reservacion
}

export default function RenglonTablaReservaciones(
    { reservacion }: RenglonTablaReservacionProps
) {
    return (
        <>
            <tr>
                <td>{reservacion.nombreCompleto}</td>
                <td>{reservacion.telefono}</td>
                <td>{reservacion.numPersonas}</td>
                <td>{reservacion.horaEvento}</td>
                <td>{reservacion.mensaje}</td>
                <td>{reservacion.correo}</td>
                <td>{reservacion.evento}</td>
                <td>{reservacion.fechaEvento.toDateString()}</td>
                <td>{reservacion.lugarNombre}</td>
                <td>{reservacion.fechaCreacion.toDateString()}</td>
            </tr>
        </>
    );
}
