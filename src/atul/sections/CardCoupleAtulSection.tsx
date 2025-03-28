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
                <Col sm={12} md={8} lg={6} xl={4} className="d-flex flex-column">
                    <div className="fs-2 pt-5 text-center">Assalamualaikum wbt</div>
                    <div className="fs-2 pb-3 text-center">& Salam Sejahtera</div>
                    <div className="fs-6 text-center">Dengan penuh kesyukuran, kami menjemput</div>
                    <div className="fw-bold text-center fs-6">Dato' | Datin | Tuan | Puan | Encik | Cik</div>
                    <div className="fs-6 text-center pb-5">Ke majlis perkahwinan anakanda kami</div>

                    <div className="text-center">
                        <Image
                            style={{
                                backgroundColor: "#e6e6e6",
                                width: "40%"
                            }}

                            src="../src/assets/atul-cartoon.png"
                            roundedCircle
                            fluid /></div>
                    <div className="pt-2 text-center">Nur Izzatul Khairiah</div>
                    <div className="text-center">Puteri kepada Encik Mubin dan Puan Zoliana</div>
                    <div className="text-center py-5 fst-italic">dengan pasangannya</div>
                    <div className="text-center">
                        <Image
                            style={{
                                backgroundColor: "#e6e6e6",
                                width: "40%"
                            }}

                            src="../src/assets/anas-cartoon.png"
                            roundedCircle
                            fluid />
                    </div>
                    <div className="pt-2 text-center">Anas Zulkifli</div>
                    <div className="pb-5 text-center">Putera kepada Encik Mohd Jeffry dan Puan Jamilah</div>


                </Col>
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
            </Row>
            <div style={{ height: "5px", backgroundColor: colorBrown[500], width: "100%" }} />
        </Container>

    </motion.div>

)

export default CardCoupleAtulSection;