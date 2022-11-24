import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from '../img/descarga.jpg';
import Corazon from '../img/corazon.png';
import Perfil from '../img/perfil.png';
import './scss/style.scss';
import { Link } from "react-router-dom";

export default function AppNavBar(){
    return(
        <>
            <Navbar variant="dark">
                <Container fluid>
                    <Navbar.Brand>
                        <a className="logo">
                            <img className="logo" src={Logo}></img>
                            <Nav.Link as={Link} to='/'>X T 4 S 1 S</Nav.Link>
                        </a>
                    </Navbar.Brand>
                    <Nav className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link as={Link} to='/lugares'>
                                <a className="logoItem">Lugares</a>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/reservacion'>
                                <a className="logoItem">Reservaciones</a>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="iconos">
                        <Nav.Item>
                                <Nav.Link className="nav-link">
                                    <a>
                                        <img src={Corazon}></img>
                                    </a>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav-link" as={Link} to='/auth'>
                                    <a>
                                        <img src={Perfil}></img>
                                    </a>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                </Container>
            </Navbar>
        </>
    )
}