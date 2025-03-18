import { Col, Container, Row, Image } from "react-bootstrap";


const TitleSection = () => {
    return (
        <Container
            className="vh-100 p-0"
            style={{ backgroundColor: "#f3efe4" }}
            fluid>
            <Row className="g-0 h-100">
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" style={{ backgroundColor: "#f3efe4" }} />
                <Col sm={12} md={8} lg={6} xl={4} >
                    <Image
                        src="../src/assets/cover.jpg"
                        className="h-100 object-fit-contain"
                        fluid
                    />
                </Col>
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" style={{ backgroundColor: "#f3efe4" }} />
            </Row>
            {/* <Row className="pt-5">
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
            </Row> */}

        </Container>
    );
}

export default TitleSection;