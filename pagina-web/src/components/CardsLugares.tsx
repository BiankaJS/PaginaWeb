import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import Lugar from "../models/Lugar";
import LugaresService from "../services/LugaresService";
import CardLugar from "./CardLugar";

export default function CardsLugares() {
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ lugares, setLugares ] = useState<Lugar[]>([]);

    async function LoadLugar() {
        try {
            const servicioLugar = new LugaresService();
            const listaLugares = await servicioLugar.obtenerLugares();
            setLugares(listaLugares);
            setIsLoaded(true);
        } catch(e) {
            if(e instanceof Error && e.message === 'NoSeEncontraronLugares')
            {
                window.alert('No hay lugares')
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
            <Row xs={1} md={2} className="g-2">
                <Col>
                    {
                        lugares.map((lugar) => (
                            <CardLugar lugar={lugar}/>
                        ))
                    }
                </Col>
            </Row>
        </>
    )
}