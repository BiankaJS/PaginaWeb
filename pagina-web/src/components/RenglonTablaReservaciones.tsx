import Reservacion from '../models/Reservacion';
import './scss/RenglonTablaReservaciones.scss';
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import LugaresService from '../services/LugaresService';

interface RenglonTablaReservacionProps {
    reservacion: Reservacion
}

export default function RenglonTablaReservaciones({ reservacion }: RenglonTablaReservacionProps) {
    const navigate = useNavigate();
    const tokenSesion = localStorage.getItem('tokenSession');
    async function eliminarReservacion() {
        const id = reservacion.id;
        try {
            const servicioLugares = new LugaresService();
            await servicioLugares.eliminarLugar(id);
            navigate('/reservacion/listaReservaciones');
        } catch (e) {
            console.log(e);
        }
    }
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
                <td><Button className='btnStyle' onClick={eliminarReservacion}><FontAwesomeIcon icon={faTrashAlt}/></Button></td>
            </tr>
        </>
    );
}
