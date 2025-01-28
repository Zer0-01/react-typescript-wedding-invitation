import { Button, Col, Container, Row } from "react-bootstrap";
import { ArrowThroughHeartFill } from "react-bootstrap-icons";
import "../styles/LandingScreenStyle.css";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const LandingScreen = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    };

    return (
        <>
            <motion.div initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}>
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
                    <Row className="mt-5">
                        <Col>
                            <Button variant="light" className="glow-button" onClick={handleClick} ><ArrowThroughHeartFill /> </Button>
                        </Col>

                    </Row>

                </Container>

            </motion.div>


        </>
    );
}

export default LandingScreen;