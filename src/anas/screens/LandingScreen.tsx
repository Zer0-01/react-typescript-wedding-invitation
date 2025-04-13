import { motion } from "framer-motion";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router";
import background from "../../assets/cover.jpg"


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
                <Row 
                
                className="g-0 justify-content-center"
                style={{
                    height: "80%",
                }}
                >
                    <Col sm={12} md={8} lg={6} xl={4} className="h-100" >
                        <Image
                            src={background}
                            className="h-100 w-100 object-fit-fill"
                            fluid
                        />
                    </Col>
                </Row>
                <div className="text-center position-relative "
                style={{
                    height: "20%",
                }}
                >
                    <Button
                        className="position-absolute top-50 start-50 translate-middle rounded-circle"
                        style={{
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
