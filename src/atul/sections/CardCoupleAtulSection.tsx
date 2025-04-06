import { motion } from "framer-motion"
import { Col, Container, Row, Image } from "react-bootstrap"
import background from "../../assets/background-atul.png"
import atul from "../../assets/atul-cartoon.png"
import anas from "../../assets/anas-cartoon.png"

const CardCoupleAtulSection = () => (
    <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
    >
        <Container
            style={{
                backgroundImage: `url("${background}")`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
            }}
            fluid>
            <Row className="h-100 justify-content-center">
                <Col sm={12} md={8} lg={6} xl={4} >
                    <div className="fs-2 pt-5 text-center">Assalamualaikum wbt</div>
                    <div className="fs-2 pb-3 text-center">& Salam Sejahtera</div>
                    <div className="fs-6 text-center">Dengan penuh kesyukuran, kami menjemput</div>
                    <div className="fw-bold text-center fs-6">Dato' | Datin | Tuan | Puan | Encik | Cik</div>
                    <div className="fs-6 text-center pb-5">Ke majlis perkahwinan anakanda kami</div>

                    <div className="text-center">
                        <Image
                        className="pb-2"
                            style={{
                                backgroundColor: "#e6e6e6",
                                width: "40%"
                            }}

                            src={atul}
                            roundedCircle
                            fluid /></div>
                    <div className="fs-3 fw-bold text-center">Nur Izzatul Khairiah</div>
                    <div className="text-center">Puteri kepada Encik Mubin dan Puan Zoliana</div>
                    <div className="text-center py-5 fst-italic">dengan pasangannya</div>
                    <div className="text-center">
                        <Image
                        className="pb-2"
                            style={{
                                backgroundColor: "#e6e6e6",
                                width: "40%"
                            }}

                            src={anas}
                            roundedCircle
                            fluid />
                    </div>
                    <div className="fs-3 fw-bold text-center">Anas Zulkifli</div>
                    <div className="pb-5 text-center">Putera kepada Encik Mohd Jeffry dan Puan Jamilah</div>


                </Col>
            </Row>
        </Container>

    </motion.div>

)

export default CardCoupleAtulSection;