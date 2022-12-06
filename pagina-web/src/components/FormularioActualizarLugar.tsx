import { Button, Form } from "react-bootstrap";
import './scss/style.scss';
import './scss/reservacion.scss';
import { ChangeEvent, FormEvent, useState } from 'react';
import Lugar from "../models/Lugar";
import LugaresService from "../services/LugaresService";
import { useNavigate } from 'react-router-dom';

interface FormularioActualizarLugarProps {
    lugar: Lugar;
}

export default function FormularioActualizarLugar(
    { lugar }: FormularioActualizarLugarProps
) {
    const [nombre, setNombre] = useState(lugar.nombre);
    const [descripcion, setDescripcion] = useState(lugar.descripcion);
    const [direccion, setDireccion] = useState(lugar.direccion);
    const [telefono, setTelefono] = useState(lugar.telefono);
    const [imagen, setImagen] = useState(lugar.imagen);
    const idLugar = lugar.id;
    const navigate = useNavigate();
    /*Funcion eliminar
    async function handleFormEliminar(
        event: FormEvent
    ){
        event.preventDefault();

        if (window.confirm('¿Deseas eliminar este lugar?')){

            try {
                const lugarService= new LugaresService();
                await lugarService.actualizarLugar(idLugar);
                navigate('/CardsLugares');
            } catch (e) {
                switch((e as Error).message) {
                    case 'ErrorFormularioIncompleto':
                        window.alert('Faltan campos por llenar');
                        break;
                    default:
                        window.alert('Ha ocurrido un error desconocido');
                }
            }
        }  
    }

Funcion actualizar*/
    // async function handleFormActualizar(event: FormEvent) {
    //     event.preventDefault();
    //     try {
    //         // const actualizarLugarTask = new LugaresService(
    //         //     new Lugar(idLugar, nombre, descripcion, direccion, telefono, imagen)
    //         // );
    //         // await actualizarLugarTask.execute();
    //         // navigate('/CardsLugares');
    //     } catch (e) {
    //         switch ((e as Error).message) {
    //             case 'ErrorFormularioIncompleto':
    //                 window.alert('Faltan campos por llenar');
    //                 break;
    //             case 'ErrorLugarExistente':
    //                 window.alert('Ya existe un lugar existente');
    //                 break;
    //             default:
    //                 window.alert('Ha ocurrido un error desconocido');
    //         }
    //     }
    // }
    function handleFormControlChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const valor = event.target.value;

        switch (event.target.name) {
            case 'nombre':
                setNombre(valor);
                break;
            case 'descripcion':
                setDescripcion(valor);
                break;
            case 'direccion':
                setDireccion(valor);
                break;
            case 'telefono':
                setTelefono(valor);
                break;
            default:
                return;
        }
    }

    return (
        <>
            <div>
                <h1 className="titulo"><span>Haz tu Reservacion!</span></h1>
                <div className="contact-wrapper animated bounceInUp">
                    <div className="contact-form">
                        <h3>Reservaciones</h3>
                        <Form >
                            <Form.Group className="orilla">
                                <Form.Label htmlFor="txtName">Nombre Completo: </Form.Label>
                                <Form.Control size="sm" type="text" name="nombre" id="txtName" value={nombre} onChange={handleFormControlChange} required />
                            </Form.Group>
                            <Form.Group className="orilla">
                                <Form.Label htmlFor="txtEmail">Correo Electronico: </Form.Label>
                                <Form.Control size="sm" type="email" name="descripcion" id="txtEmail" value={descripcion} onChange={handleFormControlChange} required />
                            </Form.Group>
                            <Form.Group className="orilla">
                                <Form.Label htmlFor="txtEvento">Evento: </Form.Label>
                                <Form.Control size="sm" type="text" name="direccion" id="txtEvento" value={direccion} onChange={handleFormControlChange} required />
                            </Form.Group>
                            <Form.Group className="orilla">
                                <Form.Label htmlFor="txtTelefono">Telefono: </Form.Label>
                                <Form.Control size="sm" type="phone" name="telefono" id="txtTelefono" value={telefono} onChange={handleFormControlChange} placeholder="000 000 00 00" required />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Actualizar
                            </Button>
                        </Form>
                    </div>
                    <div className="contact-info">
                        <h4>Informacion de Contacto</h4>
                        <ul>
                            <li><i className="fas fa-phone"></i> (462)2179231<br />Alberto Jaramillo<br />(Gerente General)<br /></li>
                            <br />
                            <li><i className="fas fa-envelope-open-text"></i>reservaciones@xtas1s.com</li>
                        </ul>
                        <p>XT4S1S podrás encontrar algún lugar de tu agrado para celebrar cualquier tipo de evento o hasta pasar un buen rato entre amigos.</p>
                    </div>
                </div>
            </div>
        </>
    )
}