import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import Reservacion from '../models/Reservacion';
import RenglonTablaReservaciones from './RenglonTablaReservaciones';
import ReservacionesService from '../services/ReservacionesService';
import Loader from './Loader';

export default function TablaReservaciones() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [reservaciones, setReservaciones] = useState<Reservacion[]>([]);
    const navigate = useNavigate();

    async function cargarReservaciones() {
        try {
            const tokenSesion = localStorage.getItem('tokenSession');

            if(tokenSesion)
            {
                const servicioReservaciones = new ReservacionesService(tokenSesion);
                const listaRservaciones = await servicioReservaciones.obtenerLista();
                setReservaciones(listaRservaciones);
                setIsLoaded(true);
            } else {
                navigate('')
            }
            
        } catch (e) {
            if (
                e instanceof Error
                && e.message === 'ErrorSesionExpiradaOInvalida'
            ) {
                navigate('/auth/login');
                return;
            }
        }
    }

    useEffect(() => {
        if (!isLoaded) {
            cargarReservaciones();
        }
    });

    if (!isLoaded) {
        return <Loader />;
    }

    return (
        <>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Submarca</th>
                        <th>Fecha Actualizacion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reservaciones.map(reservacion => (
                            <RenglonTablaReservaciones
                                key={reservacion.id}
                                reservacion={reservacion}
                            />
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}
