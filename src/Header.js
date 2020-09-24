import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from './images/logo_invert.png'
export default function Headers() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="./"><img
                src={logo}
                width="150"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="./">Home</Nav.Link>
            </Nav>
        </Navbar>
    );
}