import { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore/lite";
import { toast } from "react-toastify";
import { db } from "../../FirebaseConfig";
import { AiOutlineSync } from "react-icons/ai";
import { colorBackground, colorBrown } from "../../constants/ColorsConstant";
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
            toast.dismiss();
            toast.success("Message data sent successfully!");
            console.log("RSVP data sent successfully!");
        } catch (error) {
            setStatus(MessageStatus.FAILURE);
            toast.dismiss();
            toast.error("Error sending message data");
            console.error("Error sending RSVP data:", error);
        }

    }

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
                style={{
                    backgroundColor: colorBackground
                }}
                fluid
            >
                <Row className="g-0 py-5 justify-content-center">
                    <Col sm={12} md={8} lg={6} xl={4} >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Card className="mb-2">
                                <Card.Body>
                                    <Card.Title className="fs-3 fw-bold text-center">
                                        Hantar Pesanan
                                    </Card.Title>
                                    <Form>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formNameMessage">
                                            <Form.Label>Nama</Form.Label>
                                            <Form.Control
                                                value={name}
                                                type="text"
                                                placeholder="Nama anda"
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="formMessage">
                                            <Form.Label>Pesanan</Form.Label>
                                            <Form.Control
                                                value={message}
                                                as="textarea"
                                                type="text"
                                                placeholder="Pesanan anda"
                                                rows={5}
                                                onChange={(e) => setMessage(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Button
                                            className="w-100"
                                            style={{
                                                backgroundColor: colorBrown[500],
                                                borderColor: colorBrown[500],
                                            }}
                                            disabled={disabled || status === MessageStatus.LOADING}
                                            onClick={handleSend}
                                        >
                                            {status === MessageStatus.LOADING ? <Spinner as="span" animation="border" size="sm" /> : "Hantar"}
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </motion.div>


                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Card className="mt-2">
                                <Card.Body>
                                    <Card.Title>
                                        <Row className="justify-content-between">
                                            <Col xs={2} />
                                            <Col xs={8} className="fs-3 fw-bold text-center"   >
                                                Senarai Pesanan
                                            </Col>
                                            <Col xs={2} className="text-end"  >
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
                                                        backgroundColor: colorBrown[100],
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
                                                        <Col style={{ whiteSpace: "pre-wrap" }}>
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
                <div style={{ height: "5px", backgroundColor: colorBrown[500], width: "100%" }} />
            </Container>
        </>
    );
};

export default MessageSection;