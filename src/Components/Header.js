import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import MorganImage from './ComponentImg/Morgan-logo.png';
import { Container, Image, Nav, Navbar } from "react-bootstrap";


function Header(){
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
            <Container fluid>
                <Navbar.Brand href="#" className="mt-lg-3 mb-lg-3">
                <Image src={MorganImage} alt="Morgan-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ms-auto me-5 gap-lg-5 gap-3">
                        <NavLink className="text-decoration-none text-secondary fs-6" to="/" >HOME</NavLink>
                        <NavLink className="text-decoration-none text-secondary fs-6" to="/About">ABOUT US</NavLink>
                        <NavLink className="text-decoration-none text-secondary fs-6" to="/Service">SERVICES</NavLink>
                        <NavLink className="text-decoration-none text-secondary fs-6" to="/ContactUs">CONTACT US</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header;