import { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore/lite";
import { toast } from "react-toastify";
import { db } from "../FirebaseConfig";
import { AiOutlineSync } from "react-icons/ai";
import { colorPrimary } from "../constants/ColorsConstant";
import { motion } from "framer-motion";


enum MessageStatus {
    INITIAL, LOADING, SUCCESS, FAILURE
}

enum MessagesStatus {
    INITIAL, LOADING, SUCCESS, FAILURE
}

interface Message {
    name: string;
    message: string;
    timestamp: Date;
}

const MessageSection = () => {
    const [disabled, setDisabled] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [status, setStatus] = useState<MessageStatus>(MessageStatus.INITIAL);
    const [messages, setMessages] = useState<Message[]>([]);
    const [messagesStatus, setMessagesStatus] = useState<MessagesStatus>(MessagesStatus.INITIAL);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        if (name && message && name !== "" && message !== "") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [name, message]);

    useEffect(() => {
        fetchMessages();
    }, []);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        setStatus(MessageStatus.LOADING);
        try {
            await addDoc(collection(db, "message"), {
                name: name,
                message: message,
                timestamp: serverTimestamp()
            });
            setStatus(MessageStatus.SUCCESS);
            setName("");
            setMessage("");
            fetchMessages();
            showToast("Message data sent successfully!");
            console.log("RSVP data sent successfully!");
        } catch (error) {
            setStatus(MessageStatus.FAILURE);
            showToast("Error sending message data");
            console.error("Error sending RSVP data:", error);
        }

    }

    const showToast = (message: string) => toast(message);

    const fetchMessages = async () => {
        setMessagesStatus(MessagesStatus.LOADING);
        const messagesQuery = query(collection(db, "message"), orderBy("timestamp", "asc"));
        const querySnapshot = await getDocs(messagesQuery);
        const messagesList: Message[] = [];

        querySnapshot.forEach((doc) => {
            messagesList.push(doc.data() as Message);
        });

        setMessages(messagesList);
        setMessagesStatus(MessagesStatus.SUCCESS);
    };

    return (
        <>
            <Container
                fluid
                style={{
                    backgroundColor: "#FFFAEC",
                }}>
                <Row className="pt-5 pb-2">
                    <Col>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
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
                                                value={name}
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
                                                value={message}
                                                as="textarea"
                                                type="text"
                                                placeholder="Enter your message"
                                                rows={5}
                                                onChange={(e) => setMessage(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Button
                                            style={{
                                                backgroundColor: colorPrimary[500],
                                                borderColor: colorPrimary[500],
                                            }}
                                            disabled={disabled || status === MessageStatus.LOADING}
                                            onClick={handleSend}
                                        >
                                            {status === MessageStatus.LOADING ? <Spinner as="span" animation="border" size="sm" /> : "Send"}
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </motion.div>

                    </Col>
                </Row>
                <Row className="pt-2 pb-5">
                    <Col>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <Row className="justify-content-between">
                                            <Col xs="auto" >
                                                List of Messages
                                            </Col>
                                            <Col xs="auto" >
                                                <AiOutlineSync onClick={fetchMessages} />
                                            </Col>
                                        </Row>
                                    </Card.Title>
                                    {messagesStatus === MessagesStatus.LOADING
                                        ?
                                        <Container style={{
                                            minHeight: "20vh",
                                            maxHeight: "50vh"
                                        }}>
                                            <Spinner
                                                className="align-middle"
                                                as="span" animation="border" size="sm" />

                                        </Container>
                                        : <Container
                                            className="overflow-auto p-0"
                                            style={{
                                                minHeight: "20vh",
                                                maxHeight: "50vh"
                                            }}
                                            ref={messagesEndRef}
                                        >

                                            {messages.map((message, index) => (
                                                <Container
                                                    key={index}
                                                    style={{
                                                        backgroundColor: "#A5BFCC",
                                                        borderRadius: "10px",
                                                        width: "fit-content",
                                                        maxWidth: "75%",
                                                    }}
                                                    className="mb-2 mx-0 p-2"
                                                >
                                                    <Row>
                                                        <Col className="fw-bold">
                                                            {message.name}
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            {message.message}
                                                        </Col>
                                                    </Row>
                                                </Container>

                                            ))}
                                        </Container>
                                    }
                                </Card.Body>
                            </Card>

                        </motion.div>

                    </Col>
                </Row>
            </Container>
        </>

    );
};

export default MessageSection;