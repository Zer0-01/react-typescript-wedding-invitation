import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { colorBrown } from "../../constants/ColorsConstant";
import { motion } from "framer-motion";

const CountdownAtulSection = () => {
    const calculateTimeLeft = (): Record<string, number> => {
        const targetDate = new Date("2025-05-18T11:00:00");
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        let timeLeft: Record<string, number> = { D: 0, H: 0, M: 0, S: 0 };
        if (difference > 0) {
            timeLeft = {
                H: Math.floor(difference / (1000 * 60 * 60 * 24)),
                J: Math.floor((difference / (1000 * 60 * 60)) % 24),
                M: Math.floor((difference / 1000 / 60) % 60),
                S: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<Record<string, number>>(calculateTimeLeft());


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleClick = () => {
        window.open("https://maps.app.goo.gl/6rBA7thVaVejn79x6")
    }

    return (
        <Container fluid
            style={
                {
                    backgroundImage: "url('../src/assets/zatul/zatul-bg-2.png')",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }
            }
        >
            <Row
                className="justify-content-center py-5"

            >
                <Col xs={12} md={8} lg={6}>
                    <Row >
                        <Col>
                            <Card>
                                <Card.Title className="text-center">Detik</Card.Title>
                                <Card.Body>
                                    <Row>
                                        {Object.entries(timeLeft).map(([unit, value], index) => (
                                            <Col key={index}>
                                                <Card>
                                                    <Card.Body className="text-center">
                                                        <Card.Text >{unit}</Card.Text>
                                                        <Card.Text>{value}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}

                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Col>
            </Row>

            <Row className="g-0 pb-5 justify-content-center">
                <Col sm={12} md={8} lg={6} xl={4} >
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}

                    >
                        <Card
                            style={{
                                backgroundImage: "url('../src/assets/background-vow-1.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderTopLeftRadius: "8rem",
                                borderTopRightRadius: "8rem",
                            }}>
                            <Card.Body className="text-center p-5">
                                <Card.Title className="text-center fs-1">Nikah</Card.Title>
                                <Card.Text className="text-center fs-5">Sabtu, 26 April 2025</Card.Text>
                                <Card.Text className="text-center fs-5">05.00 - 07.00 PM: Nikah</Card.Text>
                                <Card.Text className="text-center fs-2">The Vow Event Evenue</Card.Text>
                                <Card.Text className="text-center">Lot 1751, Jln Salleh, Kampung Parit Setongkat, 84000 Muar, Johor Darul Ta'zim</Card.Text>
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
            </Row>

            <Row className="g-0 pb-5 justify-content-center">
                <Col sm={12} md={8} lg={6} xl={4} >
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}

                    >
                        <Card
                            style={{
                                backgroundImage: "url('../src/assets/background-vow-2.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderBottomLeftRadius: "8rem",
                                borderBottomRightRadius: "8rem",
                            }}>
                            <Card.Body className="text-center p-5">
                                <Card.Title className="text-center fs-1">Resepti</Card.Title>
                                <Card.Text className="text-center fs-5">Ahad, 26 April 2025</Card.Text>
                                <Card.Text className="text-center fs-5">08.00 - 10.00 PM: Sanding</Card.Text>
                                <Card.Text className="text-center fs-2">The Vow Event Evenue</Card.Text>
                                <Card.Text className="text-center">Lot 1751, Jln Salleh, Kampung Parit Setongkat, 84000 Muar, Johor Darul Ta'zim</Card.Text>
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
            </Row>
        </Container>
    )
}

export default CountdownAtulSection;