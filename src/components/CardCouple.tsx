import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import '../styles/HomeScreenStyle.css';
import Container from "react-bootstrap/esm/Container";

const CardCouple = () => {
    return (
        <Container fluid>
            <Row className="mb-5 p-3 bg-maroon">
                <Col>
                    <Card className='p-4 card-couple bg-maroon-light text-white'>
                        <Row>
                            <Col>
                                <div className='fs-3 fw-bold text-center'>Meet the happy couple</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-3">
                                <div className='fs-5 text-center'>Glory be to Allah SWT who has created creatures in pairs. Ya Allah, please accept and bless us</div>
                            </Col>
                        </Row>
                        <Row className="align-items-center">

                            <Col md={6} className="my-3">
                                <Row>
                                    <Col className='text-center'>
                                        <Image src="https://placehold.co/200" roundedCircle fluid />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className='text-center fs-2 fw-bold'>Anas Zulkifli</div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className='text-center'>Son of</div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className='text-center'>Mohd Jeffry and Jamilah</div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={6} className="my-3">
                                <Row>
                                    <Col className='text-center'>
                                        <Image src="https://placehold.co/200" roundedCircle fluid />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className='text-center fs-2 fw-bold'>Nur Izzatul Khairiah</div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className='text-center'>Daughter of</div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className='text-center'>Mubin and Zoliana</div>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>

                    </Card>
                </Col>
            </Row>
        </Container>



    );
}

export default CardCouple;
