import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { toast, ToastContainer } from "react-toastify";
import { db } from "../FirebaseConfig";

enum MessageStatus {
    INITIAL, LOADING, SUCCESS, FAILURE
}

const MessageComponent = () => {
    const [disabled, setDisabled] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [status, setStatus] = useState<MessageStatus>(MessageStatus.INITIAL);

    useEffect(() => {
        if (name && message && name !== "" && message !== "") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [name, message]);

    const handleSend = async () => {
        setStatus(MessageStatus.LOADING);
        try {
            await addDoc(collection(db, "message"), {
                name: name,
                message: message,
                timestamp: serverTimestamp()
            });
            setStatus(MessageStatus.SUCCESS);
            showToast("Message data sent successfully!");
            console.log("RSVP data sent successfully!");
        } catch (error) {
            setStatus(MessageStatus.FAILURE);
            showToast("Error sending message data");
            console.error("Error sending RSVP data:", error);
        }

    }

    const showToast = (message: string) => toast(message);

    return (
        <>
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
                                        disabled={disabled || status === MessageStatus.LOADING}
                                        onClick={handleSend}
                                    >
                                        {status === MessageStatus.LOADING ? <Spinner as="span" animation="border" size="sm" /> : "Send"}
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </>

    );
};

export default MessageComponent;