import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './scss/ListaAutos.scss';
import TablaReservaciones from '../TablaReservaciones';

export default function ListaAutos() {
    const navigate = useNavigate();

    function navegarARegistroAutos() {
        navigate('/auth/favorite');
    }

    return (
        <>
            <div className="lista-autos">
                <div className="encabezado">
                    <h3>Reservaciones Hechas</h3>
                    <Button
                        variant="primary"
                        onClick={navegarARegistroAutos}
                    >
                        <FontAwesomeIcon icon={faPlusCircle} />&nbsp;
                        Registrar Auto
                    </Button>
                </div>
                <TablaReservaciones/>
            </div>
        </>
    );
}