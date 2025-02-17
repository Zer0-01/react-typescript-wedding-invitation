import { Col, Container, Row } from "react-bootstrap";


const TitleComponent = () => {
    return (
        <Container
            className="min-vh-100  d-flex flex-column"
            style={{
                backgroundImage: "url('../src/assets/background-title.PNG",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            fluid>
            <Row className="pt-5">
                <Col className="text-center">
                    <div className="fs-6">The Wedding Of</div>
                </Col>
            </Row>
            <Row className="py-3">
                <Col className="text-center">
                    <div className="fs-1">Zatul & Anas</div>
                </Col>
            </Row>
            <Row className="flex-fill">
            </Row>
            <Row>
                <Col className="text-center">
                    <div className="fs-2">Saturday, 26th April 2025</div>
                </Col>
            </Row>
            <Row className="py-5">
                <Col className="text-center">
                    <div className="fs-1">Z | A</div>
                </Col>
            </Row>
        </Container>
    );
}

export default TitleComponent;