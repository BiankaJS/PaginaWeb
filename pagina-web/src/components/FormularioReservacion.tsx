import { Button, Form } from "react-bootstrap";
import './scss/style.scss';
import './scss/reservacion.scss';

export default function FormularioReservacion() {
    return(
        <>
            <div>
                <h1 className="titulo"><span>Haz tu Reservacion!</span></h1>
                <div className="contact-wrapper animated bounceInUp">
                    <div className="contact-form">
                        <h3>Reservaciones</h3>
                        <Form>
                            <Form.Group className="orilla">
                                <Form.Label htmlFor="txtName">Nombre Completo: </Form.Label>
                                <Form.Control size="sm" type="text" name="nombreCompleto" id="txtName" />
                            </Form.Group>
                            <Form.Group className="orilla">
                                <Form.Label htmlFor="txtEmail">Correo Electronico: </Form.Label>
                                <Form.Control size="sm" type="email" name="correo" id="txtEmail"/>
                            </Form.Group>
                            <Form.Group className="orilla">
                                <Form.Label htmlFor="txtTelefono">Telefono: </Form.Label>
                                <Form.Control size="sm" type="phone" name="telefono" id="txtTelefono"/>
                            </Form.Group>
                            <Form.Group className="orilla">
                                <Form.Label htmlFor="txtEvento">Evento: </Form.Label>
                                <Form.Control size="sm" type="text" name="evento" id="txtEvento"/>
                            </Form.Group>
                            <Form.Group className="orilla">
                                <Form.Label htmlFor="txtNumPersonas">Numero de Personas Aprox. </Form.Label>
                                <Form.Control size="sm" type="text" name="numPersonas" id="txtNumPersonas"/>
                            </Form.Group>
                            <Form.Group className="orilla">
                                <Form.Label htmlFor="txtFechaEvento">Fecha del evento: </Form.Label>
                                <Form.Control size="sm" type="date" name="fechaEvento" id="txtFechaEvento"/>
                            </Form.Group>
                            <Form.Group className="orilla">
                                <Form.Label htmlFor="txtHoraEvento">Hora de Inicio: </Form.Label>
                                <Form.Control size="sm" type="time" name="fechaEvento" id="txtHoraEvento"/>
                            </Form.Group>
                            <Form.Group className="orilla">
                                <Form.Label htmlFor="txtLugar">Lugar</Form.Label>
                                <Form.Select id="txtLugar">
                                    <option selected disabled>Sel. una opción</option>
                                    <option value='America'>Americas</option>
                                    <option value='Bosse'>Bosse</option>
                                    <option value='MACA'>MACA</option>
                                    <option value='Margot'>Margot</option>
                                    <option value='Rakata'>Rakata</option>
                                    <option value='Strana'>Strana</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="orilla">
                                <Form.Label htmlFor="txtMensaje">Mensaje</Form.Label>
                                <Form.Control size="sm" as="textarea" rows={3} id="txtMensaje"/>
                            </Form.Group>
                            <p>
                                <Button type="submit">Reservar</Button>
                            </p>
                        </Form>
                    </div>
                    <div className="contact-info">
                        <h4>Informacion de Contacto</h4>
                        <ul>
                            <li><i className="fas fa-phone"></i> (462)2179231<br/>Alberto Jaramillo<br/>(Gerente General)<br/></li>
                            <br/>
                            <li><i className="fas fa-envelope-open-text"></i>reservaciones@xtas1s.com</li>
                        </ul>
                        <p>XT4S1S podrás encontrar algún lugar de tu agrado para celebrar cualquier tipo de evento o hasta pasar un buen rato entre amigos.</p>
                    </div>
                </div>
            </div>
        </>
    )
}