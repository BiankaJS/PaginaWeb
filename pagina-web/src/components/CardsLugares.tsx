import { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import Lugar from "../models/Lugar";
import LugaresService from "../services/LugaresService";

export default function CardsLugares() {
    const [ isLoaded, setIsLoaded ] = useState(true);
    const [ lugares, setLugares ] = useState<Lugar[]>([]);

    async function LoadLugar() {
        try {
            const servicioLugar = new LugaresService();
            const listaLugares = await servicioLugar.obtenerLugares();
            console.log(listaLugares);
            setLugares(listaLugares);
            setIsLoaded(true);
        } catch(e) {
            if(e instanceof Error && e.message === 'NoSeEncontraronLugares')
            {
                return(
                    <>
                        <p>No hay lugares disponible por el momento</p>
                    </>
                )
            }
        }
    }

    useEffect(() => {
        if(!isLoaded)
        {
            LoadLugar();
        }
    });

    if(!isLoaded) return <><Spinner animation="grow" variant="info" /></>

    return(
        <>
            <Row>
                {
                    lugares.map(lugar => (
                        <Col>
                            <Card>
                                <Card.Text>{lugar.descripcion}</Card.Text>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}