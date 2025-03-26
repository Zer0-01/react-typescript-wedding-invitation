import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap"

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

    return (
        <Container fluid>
            <Row className="justify-content-center py-5">
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
        </Container>
    )
}

export default CountdownAtulSection;