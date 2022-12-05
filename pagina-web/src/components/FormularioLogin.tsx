import { Button, Container, Form } from 'react-bootstrap';
import './scss/RegistroLogin.scss';

export default function FormularioLogin() {
    return(
        <>
            <Container>
                <div className='bodyContainer'>
                    <section className='login'>
                        <div className='formulario'>
                            <h2 className='title'>BIENVENIDO!</h2>
                            <p className='paragraph'>Inicia sesion para continuar!</p>
                            <Form>
                                <Form.Group>
                                    <Form.Control type='email' placeholder='Correo' className='inputStyle' required/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type='password' placeholder='Contraseña' className='inputStyle'/>
                                </Form.Group>
                                <p>
                                    <Button type='submit' className='btnSubmit'>Iniciar Sesion</Button>
                                </p>
                            </Form>
                        </div>
                    </section>
                    <section className='registro'>
                        <div className='contact'>
                            <h2 className='title'>REGISTRATE</h2>
                            <p className='paragraph'>
                                Registrate y dsifruta de todas las ventajas de tener una cuenta:
                                <ul>
                                    <li>Últimas noticias y ofertas exclusivas</li>
                                    <li>Realizar reservaciones en los diferentes lugares</li>
                                    <li>Guardar lugares en favoritos</li>
                                </ul>
                            </p>
                            <Button className='btnSubmit' href='#FormularioUsuario'>Registrarme</Button>
                            <Button className='btnSubmit' href='/Reservacion'>Reservar lugar</Button>
                        </div>
                    </section>
                </div>
            </Container>
        </>
    )
}