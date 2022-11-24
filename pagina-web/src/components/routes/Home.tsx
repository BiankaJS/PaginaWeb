import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import AppNavBar from "../AppNavBar";

export default function Home() {
    return(
        <>
            <Container fluid>
                <AppNavBar/>
                <Outlet/>
            </Container>
        </>
    )
}