import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";

function Footer(){
    return(
        <>
        <section className="py-4" style={{backgroundColor: "#343A40"}}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h6 className="text-secondary fw-normal ">©Copyright ©All rights reserved</h6>
                    </Col> 
                    <Col lg={6}>
                        <h6 className="text-lg-end text-secondary fw-normal">This site by Er.fauzan</h6>
                    </Col>
                </Row>
            </Container>
        </section></>
    )

}
export default Footer