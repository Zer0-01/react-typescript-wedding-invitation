import { Col, Container, Row, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { colorBackground } from "../../constants/ColorsConstant";

const fadeInFromTop = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const TitleSection = () => {
    return (
        <Container fluid className="vh-100 p-0" style={{ backgroundColor: colorBackground }}>
            <motion.div {...fadeInFromTop} className="h-100">
                <Row className="g-0 h-100 justify-content-center">
                    <Col sm={12} md={8} lg={6} xl={4}>
                        <Image
                            src="../src/assets/cover.jpg"
                            className="h-100 object-fit-contain"
                            fluid
                        />
                    </Col>
                </Row>
            </motion.div>
        </Container>
    );
};

export default TitleSection;
