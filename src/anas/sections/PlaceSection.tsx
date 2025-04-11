import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { colorBrown } from "../../constants/ColorsConstant";
import marissa from "../../assets/background-card-place.jpg"

const PlaceSection = () => {
    const handleClick = () => {
        window.open("https://maps.app.goo.gl/CEb6mU1PkN5ggHfs8", "_blank");
    };

    return (
        <Container fluid style={{ backgroundColor: "#f3efe4" }}>
            <Row className="g-0 pb-5 pt-2  justify-content-center">
                <Col sm={12} md={8} lg={6} xl={4}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                    >
                        <Card
                            className="text-center px-2 py-5 border-0"
                            style={{
                                backgroundImage: `url('${marissa}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderTopLeftRadius: "8rem",
                                borderTopRightRadius: "8rem",
                            }}
                        >
                            <Card.Body>
                                <Card.Title className="fs-1">Resepsi</Card.Title>
                                <Card.Text className="fs-5">Ahad, 18 Mei 2025</Card.Text>
                                <Card.Text className="fs-5">11.00 AM - 04.00 PM: Jamuan Makan</Card.Text>
                                <Card.Text className="fs-5">12.00 PM - 12.30 PM: Sanding</Card.Text>
                                <Card.Text className="fs-2 fw-bold">Marissa Grand Event Space</Card.Text>
                                <Card.Text>
                                    107-1, Jalan Khalidi, Taman Khalidi Bharu, 84000 Muar, Johor Darul Ta'zim
                                </Card.Text>
                                <Button
                                    className="w-100"
                                    style={{ backgroundColor: colorBrown[500], borderColor: colorBrown[500] }}
                                    onClick={handleClick}
                                >
                                    Lokasi
                                </Button>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
            </Row>
            <div style={{ height: "5px", backgroundColor: colorBrown[500], width: "100%" }} />
        </Container>
    );
};

export default PlaceSection;
