import { Form, Button } from 'react-bootstrap';
import './scss/style.scss';

export default function FormularioUsuario() {
    return(
        <>
            <section className="main1">
                <div className="main__formulario1">
                    <h2 className="main__title1">Hola de Nuevo!</h2>
                    <p className="main__paragraph1">Vamos a crear tu cuenta!</p>
                    <Form>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Nombre' className='main__input1' required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Apellidos' className='main__input1' required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Fecha de nacimiento' className='main__input1' required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Correo electronica' className='main__input1' required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Contraseña' className='main__input1' required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Confirmar contraseña' className='main__input1' required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Telefono' className='main__input1' required/>
                        </Form.Group>
                        <p>
                            <Button type='submit'>Registrarme</Button>
                        </p>
                    </Form>
                    <p className='main__paragraph1'>O continuar con</p>
                    <article className='main__social1'>
                        
                    </article>
                </div>
            </section>
        </>
    )
}