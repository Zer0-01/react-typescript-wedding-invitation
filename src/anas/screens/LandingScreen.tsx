import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router";

const LandingScreen = () => {
    const navigate = useNavigate();

    return (
        <Container
            fluid
            className="vh-100 p-0"
            style={{ backgroundColor: "#f3efe4" }}
        >
            <Row className="g-0 h-100">
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block"  />
                <Col sm={12} md={8} lg={6} xl={4} >
                    <Image
                        src="../src/assets/cover.jpg"
                        className="h-100 object-fit-contain"
                        fluid
                    />
                </Col>
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block"  />
            </Row>
            <Button
                className="position-absolute start-50  translate-middle-x rounded-circle"
                style={{
                    bottom: "10%",
                    backgroundColor: "#d38f5c",
                    border: "none",

                }}
                onClick={() => navigate("/home")}
            >
                <FaChevronDown />

            </Button>
        </Container>
    );
}

export default LandingScreen;
