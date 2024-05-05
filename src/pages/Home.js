import React from "react";
import MorganTextImage from "./PageImage/Morgan-text.png";
import WordsAbout from "./PageImage/WordsAboutME.jpg";
import PaintingI from "./PageImage/MyPaintingI.jpg";
import PaintingII from "./PageImage/MyPaintingII.jpg";
import PaintingIII from "./PageImage/MyPaintingIII.jpg";
import PaintingIV from "./PageImage/MyPaintingIV.jpg";
import PaintingV from "./PageImage/MyPaintingV.jpg";
import PaintingVI from "./PageImage/MyPaintingVI.jpg";
import Portrait from "./PageImage/Portrait-img.png";
import Landscape from "./PageImage/Landscape-img.png";
import StillLife from "./PageImage/StillLife-img.png";
import urban from "./PageImage/urban-img.png";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pages.css';

function Home() {
    return (
        <>
        <section className="HomeBackground py-5 mt-lg-5">
            <div className="text-center py-5 mt-lg-5">
                <Image src={MorganTextImage} className="img-fluid mt-lg-5 py-5"/>
            </div>
        </section>

        <section className="A-Few-Words-About-Me py-lg-5">
            <Container className="mt-4">
                <Row>
                    <Col lg={6}>
                        <h1 className="fw-bold">A Few Words About Me</h1>
                        <p className="mt-lg-4 fs-5 text-secondary">My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you.</p>
                        <Button href="/" variant="outline-warning rounded-pill hell border-3" size="lg">Learn More</Button>
                    </Col>
                    <Col lg={{span:5,offset: 1 }}>
                        <Image src={WordsAbout} className="img-fluid mt-2" alt="Words-About-img" />
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="MyPaintings py-5" style={{backgroundColor:"#F8F9FA"}}>
            <h1 className="text-center pt-lg-5 fw-bold ">My Paintings</h1>
            <Container className="mt-5">
                <Row>
                    <Col lg={4}>
                        <Card className="shadow-lg img-fluid mt-2" style={{ width: '22rem',height:'98%'}}>
                            <Card.Img variant="top img-fluid" src={PaintingI} alt="paintingI" />
                            <Card.Body>
                                <Card.Title className="ph fs-4 fw-normal">Sea Storm</Card.Title>
                                <Card.Text className="text-secondary">
                                This painting is one of my latest works on sea and ocean topics.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="shadow-lg img-fluid mt-2" style={{ width: '22rem',height:'98%' }}>
                            <Card.Img variant="top" src={PaintingII} alt="paintingII" />
                            <Card.Body>
                                <Card.Title className="ph fs-4 fw-normal">Ruins of Ancient Fortress</Card.Title>
                                <Card.Text className="text-secondary">
                                    When I've been to Scotland, I made this painting just in a day.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="shadow-lg img-fluid mt-2" style={{ width: '22rem' ,height:'98%' }}>
                            <Card.Img variant="top" src={PaintingIII} alt="paintingIII" />
                            <Card.Body>
                                <Card.Title className="ph fs-4 fw-normal">Two Lovers</Card.Title>
                                <Card.Text className="text-secondary">
                                    This work was finished in two days for my customers from San Diego, CA, who needed something special.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col lg={4}>
                        <Card className="shadow-lg img-fluid mt-2" style={{ width: '22rem', height:'98%'}}>
                            <Card.Img variant="top img-fluid" src={PaintingIV} alt="paintingIV" />
                            <Card.Body>
                                <Card.Title className="ph fs-4 fw-normal">Watercolor Portrait</Card.Title>
                                <Card.Text className="text-secondary">
                                    Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="shadow-lg img-fluid mt-2" style={{ width: '22rem',  height:'98%' }}>
                            <Card.Img variant="top" src={PaintingV} alt="paintingV" />
                            <Card.Body>
                                <Card.Title className="ph fs-4 fw-normal">Birches in Autumn</Card.Title>
                                <Card.Text className="text-secondary">
                                    I love painting autumn trees and this work is a perfect example.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="shadow-lg img-fluid mt-2" style={{ width: '22rem', height:'98%' }}>
                            <Card.Img variant="top" src={PaintingVI} alt="paintingVI" />
                            <Card.Body>
                                <Card.Title className="ph fs-4 fw-normal">Green Landscape</Card.Title>
                                <Card.Text className="text-secondary">
                                    Another abstract work, which appeared at my last year's exhibition, Morgan Paintings 2016.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="Services">
            <h1 className="text-center mt-4">Services</h1>
            <Container>
                <Col lg={{span:10, offset:1}}>
                    <p className="text-center text-secondary fs-6">If you are looking for custom paintings, which will decorate your home or office, consider booking one or several of my services listed below. They will add more colors and emotions to your daily life.</p>
                </Col>
                <Row className="mt-5">
                    <Col lg={3}>
                        <div className="border m-4 border-3 border-warning">
                            <div className="text-center m-5">
                                <Image src={Portrait} className="img-fluid"/>
                                <h4 className="fw-normal">Portrait</h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="border m-4 border-3 border-warning ">
                            <div className="text-center m-5">
                                <Image src={Landscape} className="img-fluid"/>
                                <h4 className="fw-normal">Landscape</h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="border m-4 border-3 border-warning ">
                            <div className="text-center m-5">
                                <Image src={StillLife} className="img-fluid"/>
                                <h4 className="fw-normal">StillLife</h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="border m-4 border-3 border-warning ">
                            <div className="text-center m-5">
                                <Image src={urban} className="img-fluid"/>
                                <h4 className="fw-normal">Urban</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="text-center py-5">
                    <Link to="/Service">
                        <Button variant="outline-warning rounded-pill hell border-3" size="lg">View All services</Button>
                    </Link>
                </div>
            </Container>
        </section>

        </>
    )
}

export default Home 