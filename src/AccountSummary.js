import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function AccountSummary() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md="auto"> <b>Starting Account Balance:</b> 12345</Col>
                    <Col md="auto"> <b>Closed Position P/L: </b>testdata</Col>
                    <Col md="auto"> <b>Account Balance: </b> 987654</Col>
                </Row>
            </Container>
        </div >
    );
}