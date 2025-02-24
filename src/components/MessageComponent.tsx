import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const MessageComponent = () => {
    const [disabled, setDisabled] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        if (name && message && name !== "" && message !== "") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [name, message]);


    return (
        <Container
            fluid
            style={{
                backgroundColor: "#FFFAEC",
            }}>
            <Row className="py-5">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Send a Message
                            </Card.Title>
                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formNameMessage">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        type="text"
                                        placeholder="Enter your message"
                                        rows={5}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </Form.Group>

                                <Button
                                    disabled={disabled}
                                    
                                >Send</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MessageComponent;