import { Form, Button, Col, Row} from 'react-bootstrap';
import './scss/RegistroUsuario.scss';
import facebook from '../img/facebook.svg';
import apple from '../img/apple.svg';
import google from '../img/google-icon.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function FormularioRegistro() {

    const [ nombre, setNombre] = useState('');
    const [ apellidos, setApellido] = useState('');
    const [ fechaNacimiento, setFechaNacimiento] = useState('');
    const [ correo, setCorreo] = useState('');
    const [ telefono, setTelefono] = useState('');
    const [ password, setPassword] = useState('');
    const [ verifyPass, setVerifyPass] = useState('');

    function handleFormControlChange(event: ChangeEvent<HTMLInputElement>)
    {
        const valor = event.target.value;

        switch(event.target.name)
        {
            case 'txtName':
                setNombre(valor);
                break;
            case 'txtApellido':
                setApellido(valor);
                break;
            case 'txtFechaNacimiento':
                setFechaNacimiento(valor);
                break;
            case 'txtCorreo':
                setCorreo(valor);
                break;
            case 'txtPassword':
                setPassword(valor);
                break;
            case 'txtVeriifyPassword':
                setVerifyPass(valor);
                break;
            case 'txtPhone':
                setTelefono(valor);
                break;
        }
    }

    async function handleFormSubmit(event: FormEvent) {
        event.preventDefault();
        
        try {
            
        } catch (e) {
            
        }
    }

    return(
        <>
            <section className="main1">
                <div className="formulario">
                    <h2 className="main__title1">Hola de Nuevo!</h2>
                    <p className="main__paragraph1">Vamos a crear tu cuenta!</p>
                    <Form className='formContent'>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Nombre' name='txtName' className='main__input1' value={nombre}  onChange={handleFormControlChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Apellidos' name='txtApellido' className='main__input1' value={apellidos} onChange={handleFormControlChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='date' placeholder='Fecha de nacimiento' name='txtFechaNacimiento' className='main__input1' value={fechaNacimiento} onChange={handleFormControlChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='email' placeholder='Correo electronica' name='txtCorreo' className='main__input1' value={correo} onChange={handleFormControlChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='password' placeholder='Contraseña' name='txtPassword' className='main__input1' value={password} onChange={handleFormControlChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='password' placeholder='Confirmar contraseña' name='txtVerifyPassword' className='main__input1' value={verifyPass} onChange={handleFormControlChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='phone' placeholder='Telefono' name='txtPhone' className='main__input1' value={telefono} onChange={handleFormControlChange} required/>
                        </Form.Group>
                        <p>
                            <Button type='submit' className='main__input main_input--send'>Registrarme</Button>
                        </p>
                    </Form>
                    <p className='main__paragraph1'>O continuar con</p>
                    <Row>
                      <Col><Button className='linkRedes' href='https://accounts.google.com/v3/signin/identifier?dsh=S184773115%3A1670218008883177&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAu3ZaiicuSx5KlmQbKb7B_tSK43VylwaYGGckGsTAQ7Pye4B8me1cMxvcH5XSWDUhAcS8rt5w'><img src={google} className="sizeImage"></img></Button></Col>
                      <Col><Button className='linkRedes' href='https://es-la.facebook.com/'><img src={facebook} className="sizeImage"></img></Button></Col>
                      <Col><Button className='linkRedes' href='https://www.icloud.com/'><img src={apple} className="sizeImage"></img></Button></Col>
                    </Row>
                </div>
            </section>
        </>
    )
}