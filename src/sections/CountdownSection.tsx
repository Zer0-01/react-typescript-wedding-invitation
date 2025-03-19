import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { colorBrown } from "../constants/ColorsConstant";

const CountdownSection = () => {
    const calculateTimeLeft = (): Record<string, number> => {
        const targetDate = new Date("2025-05-18T11:00:00");
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        let timeLeft: Record<string, number> = { D: 0, H: 0, M: 0, S: 0 };
        if (difference > 0) {
            timeLeft = {
                D: Math.floor(difference / (1000 * 60 * 60 * 24)),
                H: Math.floor((difference / (1000 * 60 * 60)) % 24),
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

    return (
        <Container fluid
            className=" p-0"
            style={{ backgroundColor: "#f3efe4" }}
        >
            <Row className="g-0 h-100">
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
                <Col sm={12} md={8} lg={6} xl={4} >
                    <Row className="py-5 px-2 g-0">
                        <Col>
                            <Card
                                style={{
                                  backgroundColor: "white",
                                }}
                            >
                                <Card.Body>
                                    <Row className="pb-3">
                                        <Col>
                                            <Card.Text className="text-center fs-2">Countdown</Card.Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        {Object.entries(timeLeft).map(([unit, value], index) => (
                                            <Col xs={3} key={index}>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 100 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 2, delay: index * 0.5 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <Card style={{
                                                        backgroundColor: colorBrown[100]
                                                    }}>
                                                        <Card.Body>
                                                            <Row>
                                                                <Col>
                                                                    <div className="text-center fs-2">{unit}</div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <div className="text-center fs-2">{value}</div>
                                                                </Col>
                                                            </Row>
                                                        </Card.Body>
                                                    </Card>
                                                </motion.div>

                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
            </Row>
        </Container>
    );
}

export default CountdownSection;
