import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingScreenAtul = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            exit={{ opacity: 0, y: -100 }}
        >
            <Container
                fluid
                className="vh-100 p-0"
                style={{ backgroundColor: "white" }}
            >
                <Row className="g-0 h-100">
                    <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
                    <Col sm={12} md={8} lg={6} xl={4} >
                        <Image
                            src="../src/assets/background-landing-page-atul.png"
                            className="h-100 object-fit-fill"
                            fluid
                        />
                    </Col>
                    <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
                </Row>
                <Button
                    className="position-absolute start-50  translate-middle-x rounded-circle"
                    style={{
                        boxShadow: "0 0 25px rgba(83, 248, 18, 0.5)",
                        bottom: "10%",
                        backgroundColor: "#d38f5c",
                        border: "none",

                    }}
                    onClick={() => navigate("/home")}
                >
                    <FaChevronDown />
                </Button>
            </Container>

        </motion.div>
    );
};

export default LandingScreenAtul;
