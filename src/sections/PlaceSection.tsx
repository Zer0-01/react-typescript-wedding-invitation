import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { colorPrimary } from "../constants/ColorsConstant";

const PlaceSection = () => {
    const handleClick = () => {
        window.open("https://maps.app.goo.gl/6rBA7thVaVejn79x6")
    }

    return (
        <Container style={{
            backgroundColor: colorPrimary[500],
        }}>
            <Row className="pt-5 pb-3">
                <Col>
                    <Card
                        border="dark"
                        style={{
                            backgroundImage: "url('../src/assets/background-vow-1.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderTopLeftRadius: "8rem",
                            borderTopRightRadius: "8rem",
                        }}>
                        <Card.Body className="text-center p-5">
                            <Card.Title className="text-center fs-1">Akad Nikah</Card.Title>
                            <Card.Text className="text-center fs-2">Saturday, 26th April 2025</Card.Text>
                            <Card.Text className="text-center fs-2">1705</Card.Text>
                            <Card.Text className="text-center fs-2">The Vow Event Venue</Card.Text>
                            <Card.Text className="text-center">Lot 1751, Jln Salleh, Kampung Parit Setongkat, 84000 Muar, Johor Darul Ta'zim</Card.Text>
                            <Button
                                style={
                                    {
                                        backgroundColor: colorPrimary[500],
                                        borderColor: colorPrimary[500],
                                    }
                                }
                                className="w-100"
                                onClick={handleClick}
                            >
                                Location
                            </Button>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>

            <Row className="pb-5 pt-3">
                <Col>
                    <Card
                        border="dark"
                        style={{
                            backgroundImage: "url('../src/assets/background-vow-2.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderBottomLeftRadius: "8rem",
                            borderBottomRightRadius: "8rem",
                        }}>
                        <Card.Body className="text-center p-5">
                            <Card.Title className="text-center fs-1">Resepsi</Card.Title>
                            <Card.Text className="text-center fs-2">Saturday, 26th April 2025</Card.Text>
                            <Card.Text className="text-center fs-2">2000</Card.Text>
                            <Card.Text className="text-center fs-2">The Vow Event Venue</Card.Text>
                            <Card.Text className="text-center">Lot 1751, Jln Salleh, Kampung Parit Setongkat, 84000 Muar, Johor Darul Ta'zim</Card.Text>
                            <Button
                                className="w-100"
                                onClick={handleClick}
                                style={
                                    {
                                        backgroundColor: colorPrimary[500],
                                        borderColor: colorPrimary[500],
                                    }
                                }
                            >Location</Button>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export default PlaceSection;