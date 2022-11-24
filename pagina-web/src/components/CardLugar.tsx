import { Button, Card, Col, Row } from "react-bootstrap";
import Lugar from "../models/Lugar";

interface CardLugarProps{
    lugar: Lugar
}

export default function CardLugar( {lugar} : CardLugarProps) {
    return(
        <>
            <Card bg="dark" text="light">
                <Card.Img variant="top" src={lugar.imagen}/>
                <Card.Body>
                    <Card.Title>{lugar.nombre}</Card.Title>
                    <Card.Text>{lugar.descripcion}</Card.Text>
                    <Button variant="primary">Reservar</Button>
                </Card.Body>
            </Card>
        </>
    )
}