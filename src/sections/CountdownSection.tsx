import { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CountdownSection = () => {
    const calculateTimeLeft = (): Record<string, number> => {
        const targetDate = new Date("2025-04-26T17:00:00");
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
        <Container>
            <Row className="py-5">
                <Col>
                    <Card
                        style={{
                            backgroundImage: "url('../src/assets/background-2.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
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
                                        <Card>
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
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CountdownSection;
