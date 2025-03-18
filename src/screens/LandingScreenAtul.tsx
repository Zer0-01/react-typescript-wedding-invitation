import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { colorAtul } from "../constants/ColorsConstant";

const LandingScreenAtul = () => {
    const navigate = useNavigate();


    return (
        <Container
            fluid
            className="vh-100 p-0"
            style={{ backgroundImage: "url('../src/assets/background-landing-page-atul-blur.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <Row className="g-0 h-100">
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
                <Col sm={12} md={8} lg={6} xl={4} >
                    <Image
                        src="../src/assets/background-landing-page-atul.png"
                        className="h-100 object-fit-cover"
                        fluid
                    />
                </Col>
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
            </Row>
            <Button
                className="position-absolute start-50  translate-middle-x rounded-pill"
                style={{
                    bottom: "10%",
                    backgroundColor: colorAtul.button,
                    border: "none",

                }}
                onClick={() => navigate("/home")}
            >
                Open

            </Button>
        </Container>
    )
}

export default LandingScreenAtul;