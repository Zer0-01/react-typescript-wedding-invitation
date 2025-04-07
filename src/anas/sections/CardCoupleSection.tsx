import { Col, Row, Image, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { colorBackground, colorBrown } from "../../constants/ColorsConstant";

const fadeFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } }
};

const fadeFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } }
};

const CoupleCard = ({ image, name, description, variants }: {
    image: string;
    name: string;
    description: string;
    variants: any;
}) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true }}
        className="text-center my-3"
    >
        <Image
            src={image}
            roundedCircle
            fluid
            className="bg-light"
            style={{ width: "40%" }}
        />
        <div className="fs-4 fw-bold mt-2">{name}</div>
        <div className="fs-6">{description}</div>
    </motion.div>
);

const CardCoupleSection = () => {
    return (
        <Container fluid style={{ backgroundColor: colorBackground }}>
            <div style={{ height: "5px", backgroundColor: colorBrown[500], width: "100%" }} />

            <Row className="g-0 h-100 justify-content-center py-5">
                <Col sm={12} md={8} lg={6} xl={4} className="text-center">
                    <h2 className="fs-1 fw-bold">‏اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ‎</h2>
                    <p className="fs-5">
                        Dengan penuh kesyukuran ke hadrat Allah SWT, serta limpah dan rahmat-Nya, kami ingin memaklumkan dan menjemput Dato’/Datin/Tuan/Puan/Encik/Cik ke Majlis Resepsi Perkahwinan anakanda kami
                    </p>



                    <CoupleCard
                        image="../src/assets/anas-cartoon.png"
                        name="Anas Zulkifli"
                        description="Putera kepada Encik Mohd Jeffry dan Puan Jamilah"
                        variants={fadeFromRight}
                    />

                    <div className="fs-1 fst-italic">&</div>

                    <CoupleCard
                        image="../src/assets/atul-cartoon.png"
                        name="Nur Izzatul Khairiah"
                        description="Puteri kepada Encik Mubin dan Puan Zoliana"
                        variants={fadeFromLeft}
                    />
                </Col>
            </Row>

            <div style={{ height: "5px", backgroundColor: colorBrown[500], width: "100%" }} />
        </Container>
    );
};

export default CardCoupleSection;
