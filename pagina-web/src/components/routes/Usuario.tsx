import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import AppNavBar from "../AppNavBar";

export default function Usuario() {
    return(
        <>
            <Container fluid>
                <AppNavBar/>
                <Outlet/>
            </Container>
        </>
    )
}