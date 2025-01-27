import { Button, Col, Container, Row } from "react-bootstrap";

const LandingScreen = () => {
    return (
        <>
            <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh", backgroundColor: "#000000" }}>
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
                        <Button variant="light">Light</Button>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <svg
                            className="w-10 h-10 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="src/assets/floral_decoration_corner.svg"
                           
                            viewBox="0 0 24 24">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth="2"
                                d="M5 7h14M5 12h14M5 17h14"
                            />
                        </svg>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LandingScreen;