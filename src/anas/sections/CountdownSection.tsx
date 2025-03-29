import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, Col, Container, Row } from "react-bootstrap";
import { colorBrown } from "../../constants/ColorsConstant";

// Helper function to calculate the time left
const calculateTimeLeft = (): Record<string, number> => {
    const targetDate = new Date("2025-05-18T11:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    return difference > 0
        ? {
            D: Math.floor(difference / (1000 * 60 * 60 * 24)),
            H: Math.floor((difference / (1000 * 60 * 60)) % 24),
            M: Math.floor((difference / 1000 / 60) % 60),
            S: Math.floor((difference / 1000) % 60),
        }
        : { D: 0, H: 0, M: 0, S: 0 };
};

const CountdownSection = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Container fluid style={{ backgroundColor: "#f3efe4" }}>
            <Row className="g-0 pt-5 pb-2 h-100 justify-content-center">
                <Col sm={12} md={8} lg={6} xl={4}>
                    <Card className="border-0 bg-white">
                        <Card.Body>
                            <Card.Text className="text-center fs-2">Countdown</Card.Text>
                            <Row>
                                {Object.entries(timeLeft).map(([unit, value], index) => (
                                    <Col xs={3} key={unit}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 100 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 2, delay: index * 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            <Card className="border-0" style={{ backgroundColor: colorBrown[100] }}>
                                                <Card.Body>
                                                    <div className="text-center fs-2">{unit}</div>
                                                    <div className="text-center fs-2">{value}</div>
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
        </Container>
    );
};

export default CountdownSection;
