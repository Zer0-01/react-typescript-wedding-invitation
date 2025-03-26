import { motion } from "framer-motion";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { colorBrown } from "../../constants/ColorsConstant";

const PlaceAtulSection = () => {
    const handleClick = () => {
        window.open("https://maps.app.goo.gl/6rBA7thVaVejn79x6")
    }

    return (
        <Container
            style={{ backgroundColor: "#f3efe4" }}
            fluid
        >
            <Row className="g-0 pb-5">
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
                <Col sm={12} md={8} lg={6} xl={4} >
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}

                    >
                        <Card
                            style={{
                                backgroundImage: "url('../src/assets/background-card-place.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderTopLeftRadius: "8rem",
                                borderTopRightRadius: "8rem",
                            }}>
                            <Card.Body className="text-center p-5">
                                <Card.Title className="text-center fs-1">Resepsi</Card.Title>
                                <Card.Text className="text-center fs-5">Ahad, 18 Mei 2025</Card.Text>
                                <Card.Text className="text-center fs-5">11.00 - 04.00 PM: Jamuan Makan</Card.Text>
                                <Card.Text className="text-center fs-5">12.00 - 12.30 PM: Sanding</Card.Text>
                                <Card.Text className="text-center fs-2">Marissa Grand Event Space</Card.Text>
                                <Card.Text className="text-center">107-1, Jalan Khalidi, Taman Khalidi Bharu, 84000 Muar, Johor Darul Ta'zim</Card.Text>
                                <Button
                                    style={
                                        {
                                            backgroundColor: colorBrown[500],
                                            borderColor: colorBrown[500],
                                        }
                                    }
                                    className="w-100"
                                    onClick={handleClick}
                                >
                                    Lokasi
                                </Button>
                            </Card.Body>

                        </Card>
                    </motion.div>
                </Col>
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
            </Row>
            <div style={{ height: "1px", backgroundColor: "black", width: "100%" }} />

        </Container>

    );
}

export default PlaceAtulSection;

