import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import Container from "react-bootstrap/esm/Container";
import { motion } from "framer-motion";
import { colorBackground, colorBrown } from "../../constants/ColorsConstant";

const CardCoupleSection = () => {

    const fadeFromLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 2 } }
    };

    const fadeFromRight = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1, x: 0, transition: { duration: 2 }

        }
    };

    return (
        <Container
            style={{
                backgroundColor: colorBackground
            }}
            fluid >
            <div style={{ height: "5px", backgroundColor: colorBrown[500], width: "100%" }} />
            <Row className="g-0 h-100">
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
                <Col sm={12} md={8} lg={6} xl={4} >
                    <Row className="py-5">
                        <Col className="text-center">
                            <div className="fs-1" >Assalammualaikum</div>
                        </Col>
                    </Row>
                    <Row className="pb-3">
                        <Col className="text-center">
                            <div className="fs-5" >Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, Kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri Resepsi Pernikahan kami.</div>
                        </Col>
                    </Row>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeFromLeft}
                        viewport={{ once: true }}
                    >
                        <Row>
                            <Col className="text-center">
                                <Image
                                    style={{
                                        backgroundColor: "#e6e6e6"
                                    }}
                                    className="w-50"
                                    src="../src/assets/atul-cartoon.png"
                                    roundedCircle
                                    fluid />
                            </Col>
                        </Row>
                        <Row className="pt-2">
                            <Col className="text-center">
                                <div>Nur Izzatul Khairiah</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <div>Puteri kepada Encik Mubin dan Puan Zoliana</div>
                            </Col>
                        </Row>

                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeFromRight}
                        viewport={{ once: true }}
                    >
                        <Row className="pt-3">
                            <Col className="text-center">
                                <Image
                                    style={{
                                        backgroundColor: "#e6e6e6"
                                    }}
                                    className="w-50"
                                    src="../src/assets/anas-cartoon.png"
                                    roundedCircle
                                    fluid />
                            </Col>
                        </Row>
                        <Row className="pt-2">
                            <Col className="text-center">
                                <div>Anas Zulkifli</div>
                            </Col>
                        </Row>
                        <Row className="pb-5">
                            <Col className="text-center">
                                <div>Putera kepada Encik Mohd Jeffry dan Puan Jamilah</div>
                            </Col>
                        </Row>
                    </motion.div>
                </Col>
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
            </Row>
            <div style={{ height: "5px", backgroundColor: colorBrown[500], width: "100%" }} />
        </Container>
    );
}

export default CardCoupleSection;
