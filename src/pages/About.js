import React  from "react";
import AboutUs from "./PageImage/WordsAboutUs.jpg"
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import './Pages.css'

function About(){
    return(
        <>
        <section className="About py-5">
            <h1 className="text-center text-white py-5 mt-5" style={{fontSize:'500%'}}>ABOUT</h1>
        </section>

        <section className="Few-Word-About py-5">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h1>Few Words About us</h1>
                        <p className="fs-5 text-secondary">There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character. I am always ready to meet all your wishes and preferences in your portrait, whether it’s created as a personal painting or a piece of art for an official person. Contact me today to discuss your future portrait.</p>
                        <Button href="/" variant="outline-warning rounded-pill hell border-3" size="lg">Learn More</Button>
                    </Col>
                    <Col lg={{span : 5 , offset:1}}>
                        <Image src={AboutUs} alt="WordsAboutImg" className="img-fluid mt-2" style={{height:'90%'}}/>
                    </Col>
                </Row>
            </Container>
        </section>        
        </>
    )
}
export default About