import { Button, Card, Col, Row } from "react-bootstrap";
import Lugar from "../models/Lugar";

interface CardLugarProps{
    lugares: Lugar[]
}

export default function CardLugar( {lugares} : CardLugarProps) {
    return(
        <>
        <p>Hola</p>
        </>
    )
}