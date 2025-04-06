import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { colorAtulLandingContainer, colorAtulLandingText } from "../../constants/ColorsConstant";
import zatulLandingPageBg from "../../assets/zatul/zatul-landing-page-bg.png";

const LandingScreenAtul = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            exit={{ opacity: 0, y: 100 }}
        >
            <Container
                fluid
                className="vh-100"
                style={{
                    backgroundColor: colorAtulLandingContainer,
                    backgroundImage: `url("${zatulLandingPageBg}")`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }}
            >
                <Row className="h-100 justify-content-center align-items-center">
                    <Col xs={8} sm={8} md={8} lg={8} xl={8} >
                        <Container
                            className="py-5 px-3  text-center rounded-pill"
                            style={
                                {
                                    backgroundColor: colorAtulLandingContainer
                                }
                            }
                        >
                            <div className="fs-6 pb-3">THE AKAD OF</div>
                            <div
                                className="fw-bold fs-1 pb-2"
                                style={{
                                    color: colorAtulLandingText,
                                }}
                            >ZATUL</div>
                            <div className="fs-6 pb-2">AND</div>
                            <div
                                className="fw-bold fs-1 pb-3"
                                style={{
                                    color: colorAtulLandingText,
                                }}
                            >ANAS</div>
                            <div className="pb-2">26 APRIL 2025 | Saturday</div>
                            <div className="pb-3">The Vow, Muar</div>
                            <Button
                                className="rounded-circle"
                                style={{
                                    boxShadow: "0 0 25px rgba(83, 248, 18, 0.5)",

                                    backgroundColor: "#d38f5c",
                                    border: "none",
                                }}
                                onClick={() => navigate("/home")}
                            >
                                <FaChevronDown />
                            </Button>
                        </Container>

                    </Col>
                </Row>

            </Container>

        </motion.div>
    );
};

export default LandingScreenAtul;
