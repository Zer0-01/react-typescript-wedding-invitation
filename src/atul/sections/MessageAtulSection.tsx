import { addDoc, collection, serverTimestamp, query, orderBy, getDocs } from "firebase/firestore/lite";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner, Form } from "react-bootstrap";
import { AiOutlineSync } from "react-icons/ai";
import { toast } from "react-toastify";
import { colorBrown } from "../../constants/ColorsConstant";
import { db } from "../../FirebaseConfig";
import background from "../../assets/zatul/zatul-bg-1.png";

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

const MessageAtulSection = () => {
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
            toast.dismiss()
            toast.success("Message data sent successfully!");
            console.log("RSVP data sent successfully!");
        } catch (error) {
            setStatus(MessageStatus.FAILURE);
            toast.dismiss()
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
                    backgroundImage: `url("${background}")`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                fluid
            >
                <Row className="g-0 py-5 justify-content-center">
                    <Col sm={12} md={8} lg={6} xl={4} >
                        <Row>
                            <Col>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="mb-2">
                                        <Card.Body>
                                            <Card.Title className="fs-3 fw-bold">
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
                            </Col>
                        </Row>
                        <Row>
                            <Col>
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
                                                    <Col
                                                        className="fs-3 fw-bold"
                                                        xs="auto" >
                                                        Senarai Pesanan
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
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MessageAtulSection;