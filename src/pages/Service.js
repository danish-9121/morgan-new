import React from "react";
import ServiceDescription from "./PageImage/ServiceDescription.jpg"
import ServiceDescriptionII from "./PageImage/ServiceDescriptionII.jpg"
import ServiceDescriptionIII from "./PageImage/ServiceDescriptionIII.jpg"
import ServiceDescriptionIV from "./PageImage/ServiceDescriptionIV.jpg"
import ServiceDescriptionV from "./PageImage/ServiceDescriptionV.jpg"
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pages.css';



function Service(){
    return(
        <>
        <section className="Service py-5">
            <h1 className="text-center text-white py-5 mt-5" style={{fontSize:'450%'}}>SERVICES</h1>
        </section>

        <section className="Service-Description py-5">
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <Image src={ServiceDescription} alt="ServiceDescription-Img" className="img-fluid" />
                    </Col>
                    <Col lg={6}>
                        <h1>Service Description</h1>
                        <p className="text-secondary fs-5">There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character.</p>
                        <Button href="/" variant="outline-warning rounded-pill hell border-3" size="lg">Learn More</Button>
                    </Col> 
                </Row>
            </Container>
        </section>

        <section className="Oil-On-canvas py-5">
            <Container fluid>
                <Row>
                    <Col lg={4}>
                        <Image src={ServiceDescriptionII} className="img-fluid" alt="ServiceDescriptionImgII"/>
                    </Col>
                    <Col lg={8}>
                        <Image src={ServiceDescriptionIII} className="img-fluid image-s" alt="ServiceDescriptionImgIII"/>
                        <h4 className="text-lg-end fw-normal mt-3 text-warning">Oil on Canvas of a Little Girl</h4>
                        <p className="text-lg-end fw-normal text-secondary">This portrait was created in 2015 for my brother's daughter, Emily Morgan.</p>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="WaterColor-portrait py-5">
            <Container fluid>
                <Row>
                    <Col lg={8}>
                        <Image src={ServiceDescriptionIV} className="img-fluid" alt="ServiceDescriptionImgII"/>
                        <h4 className="fw-normal mt-3 text-warning">Watercolor Portrait</h4>
                        <p className="fw-normal text-secondary">Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.</p>
                    </Col>
                    <Col lg={4}>
                        <Image src={ServiceDescriptionV} className="img-fluid" alt="ServiceDescriptionImgII"/>
                    </Col>
                </Row>
            </Container>
        </section>  
        </>
    )
}
export default Service