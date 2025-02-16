import { motion } from "framer-motion";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const LandingScreen = () => {
    let navigate = useNavigate();

    const routeVariants = {
        initial: {
            opacity: 0,
            y: -50,
        },
        animate: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            y: 50,
        },
        transition: {
            duration: 0.5,
        }
    }


    return (
        <>
            <motion.div
                variants={routeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={routeVariants.transition}
            >
                <Container className="d-flex flex-column align-items-center justify-content-center text-maroon dancing-script-500 min-vh-100" >
                    <Row className="mb-5">
                        <Col>
                            <div className="text-center fs-1 fw-bold dancing-script-400" >Raikan Cinta</div>
                        </Col>
                    </Row>
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
                    <Row className="mb-5">
                        <Col>
                            <div className="text-center fs-1 fw-bold">Anas</div>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <div className="text-center fs-1 fw-bold">18 May 2025</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="btn-maroon" onClick={() => { navigate("/home") }} >Lets go</Button>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </>
    );
};

export default LandingScreen;
