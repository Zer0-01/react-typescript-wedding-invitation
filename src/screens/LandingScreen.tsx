import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const LandingScreen = () => {
    let navigate = useNavigate();


    return (
        <>

            <Container className="d-flex flex-column align-items-center justify-content-center text-white dancing-script-500 min-vh-100" >

                <Row>
                    <Col>
                        <div className="text-center fs-1 fw-bold dancing-script-400" >Raikan Cinta</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="text-center fs-1 fw-bold">Izzatul</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="text-center fs-1 fw-bold">&</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="text-center fs-1 fw-bold">Anas</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="text-center fs-1 fw-bold">18 May 2025</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => { navigate("/home") }} ></Button>
                    </Col>
                </Row>


            </Container>

        </>
    );
};

export default LandingScreen;
