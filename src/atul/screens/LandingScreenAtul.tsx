import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { colorAtulLandingContainer, colorAtulLandingText } from "../../constants/ColorsConstant";

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
                style={{
                    backgroundColor: colorAtulLandingContainer,
                    backgroundImage: `url(../src/assets/zatul/zatul-landing-page-bg.png)`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }}
            >
                <Row className="g-0 h-100 justify-content-center align-items-center">
                    <Col xs={8} sm={8} md={8} lg={8} xl={8} >
                        <Container
                            className="text-center rounded-pill py-5"
                            style={
                                {
                                    backgroundColor: colorAtulLandingContainer
                                }
                            }
                        >
                            <div className="py-5">THE AKAD OF</div>
                            <div
                                className="fw-bold"
                                style={{
                                    color: colorAtulLandingText,
                                    fontSize: "calc(3.0rem + 1.5vw)",
                                }}
                            >ZATUL</div>
                            <div>AND</div>
                            <div
                                className="fw-bold"
                                style={{
                                    color: colorAtulLandingText,
                                    fontSize: "calc(3.0rem + 1.5vw)",
                                }}
                            >ANAS</div>
                            <div className="py-5">26 APRIL 2025 | Saturday</div>
                            <div>The Vow, Muar</div>
                        </Container>

                    </Col>
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
