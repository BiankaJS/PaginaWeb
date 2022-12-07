import { Button, Card, Col, Row } from "react-bootstrap";
import Lugar from "../models/Lugar";
import America from "../img/Americas.jpg";

interface CardLugarProps{
    lugar: Lugar
}

export default function CardLugar( {lugar} : CardLugarProps) {
    return(
        <>
            <Col>
                <Card bg="dark" text="light" style={{ height: '15rem' }}>
                    <Card.Img variant="top" src={lugar.imagen}/>
                    <Card.Body>
                        <Card.Title>{lugar.nombre}</Card.Title>
                        <Card.Text>{lugar.descripcion}</Card.Text>
                        <Button className="btnLugar" variant="primary" href="/reservacion">Reservar</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}