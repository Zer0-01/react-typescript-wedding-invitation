import { motion } from "framer-motion";
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
            <motion.div
                className="h-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Row className="g-0 justify-content-center">
                    <Col sm={12} md={8} lg={6} xl={4} >
                        <Image
                            src="../src/assets/cover.jpg"
                            className="h-100 object-fit-contain"
                            fluid
                        />
                    </Col>
                </Row>
                <div className="text-center">
                    <Button
                        className="rounded-circle"
                        style={{
                            bottom: "10%",
                            backgroundColor: "#d38f5c",
                            border: "none",

                        }}
                        onClick={() => navigate("/home")}
                    >
                        <FaChevronDown />

                    </Button>
                </div>

            </motion.div>
        </Container>
    );
}

export default LandingScreen;
