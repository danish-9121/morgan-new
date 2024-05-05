import React from "react";
import AddressI from "./PageImage/office.png"
import AddressII from "./PageImage/telephone-symbol-button.png"
import AddressIII from "./PageImage/email.png"
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pages.css';


function ContactUs(){
    return (
        <>
        <section className="Service py-5">
            <h1 className="text-center text-white py-5 mt-5" style={{fontSize:'450%'}}>CONTACT</h1>
        </section>

        <section className="Get-In-Touch py-5">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h1 style={{fontSize:'290%'}}>Get in Touch</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="text" placeholder="Your Name" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Your Email Address" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicMobileNumber">
                                <Form.Control type="Number" placeholder="Your Mobile Number" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCity">
                                <Form.Control type="text" placeholder="Your City" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicMessage">
                                <Form.Control as="textarea" rows={3} placeholder="Your Message" required />
                            </Form.Group>
                            <Form.Text className="text-muted text-secondary fs-5">
                                Verify you're a human - Please enter the following code in the box below- 7102
                            </Form.Text>
                            <Form.Group className="mb-3 mt-3 " controlId="formBasicName">
                                <Form.Control type="Number"  required/>
                            </Form.Group>
                            <Button href="#" variant="outline-warning rounded-pill hel border-3" size="lg">Send Message</Button>
                        </Form>
                    </Col>
                    <Col lg={6}>
                        <h1 style={{fontSize:'290%'}}>Our Address</h1>
                        <div className="m-2 mt-3">
                            <div className="mb-4">
                                <Image src={AddressI} className="img-fluid" alt="Address-img"/>&nbsp;2130 Fulton Street, San Diego, CA 94117-1080 USA
                            </div>
                            <div className="mb-4">
                                <Image src={AddressII} className="img-fluid" alt="Address-img"/>&nbsp;1-800-1234-567
                            </div>
                            <div className="mb-4">
                                <Image src={AddressIII} className="img-fluid" alt="Address-img"/>&nbsp;info@demolink.org
                            </div>
                        </div>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.8417206322221!2d72.83428941320945!3d18.95494873738223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3cbdaaaabb%3A0x3689dac215eeb0e7!2sNasim%20Art%20Services!5e0!3m2!1sen!2sin!4v1703458526235!5m2!1sen!2sin" title="Unique Title for Iframe 1" width="90%" height="400"  style={{border:0}} ></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}
export default ContactUs