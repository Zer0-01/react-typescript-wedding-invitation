import { motion } from "framer-motion"
import { Col, Container, Row, Image } from "react-bootstrap"
import { colorBrown } from "../../constants/ColorsConstant"

const CardCoupleAtulSection = () => (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
    >
        <Container
            style={{
                backgroundImage: "url('../src/assets/background-atul.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh", // Ensure full viewport height
            }}
            fluid>
            <Row className="g-0 h-100">
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
                <Col sm={12} md={8} lg={6} xl={4}>
                    <Row className="py-5">
                        <Col className="text-center">
                            <div className="fs-1">Assalammualaikum</div>
                        </Col>
                    </Row>
                    <Row className="pb-3">
                        <Col className="text-center">
                            <div className="fs-5">Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, Kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri Resepsi Pernikahan kami.</div>
                        </Col>
                    </Row>

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

                </Col>
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
            </Row>
            <div style={{ height: "5px", backgroundColor: colorBrown[500], width: "100%" }} />
        </Container>

    </motion.div>

)

export default CardCoupleAtulSection;