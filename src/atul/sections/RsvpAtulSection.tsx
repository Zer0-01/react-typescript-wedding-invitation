import { motion } from "framer-motion";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { colorBrown } from "../../constants/ColorsConstant";
import { useEffect, useState } from "react";
import { RsvpStatus } from "../../anas/sections/RsvpFormSection";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { db } from "../../FirebaseConfig";
import { toast } from "react-toastify";
import RsvpModalAtul from "./RsvpModalAtul";

const RsvpAtulSection = () => {
    const [disabled, setDisabled] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [attendance, setAttendance] = useState<boolean | null>(null);
    const [guest, setGuest] = useState<number>(0);
    const [status, setStatus] = useState<RsvpStatus>(RsvpStatus.INITIAL);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        if (name && phone && attendance !== null && name && phone !== "") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }


    }, [name, phone, attendance, guest]);

    const handleSend = async () => {
        setStatus(RsvpStatus.LOADING);
        try {
            await addDoc(collection(db, "rsvp"), {
                name: name,
                phone: phone,
                attendance: attendance,
                guest: guest,
                timestamp: serverTimestamp()
            });
            setStatus(RsvpStatus.SUCCESS);
            setShowModal(false);
            showToast("RSVP data sent successfully!");
            console.log("RSVP data sent successfully!");
        } catch (error) {
            setStatus(RsvpStatus.FAILURE);
            showToast("Error sending RSVP data");
            console.error("Error sending RSVP data:", error);
        }

    }

    const showToast = (message: string) => {
        toast.dismiss()
        toast(message)
    };

    return (
        <>
            <Container
                style={{
                    backgroundImage: "url('../src/assets/zatul/zatul-bg-4.jpg')",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                fluid
            >
                <Row className="g-0 py-5 justify-content-center">
                    <Col sm={12} md={8} lg={6} xl={4} >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Card>
                                <Card.Body>
                                    <Card.Title>RSVP</Card.Title>
                                    <Form>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formName">
                                            <Form.Label>Nama</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Nama anda"
                                                onChange={(e) => setName(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="formPhoneNumber">
                                            <Form.Label>Nombor Telefon</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Nombor telefon anda"
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formAttendance">
                                            <Form.Label>Adakah anda akan hadir?</Form.Label>
                                            <Form.Check
                                                type="radio"
                                                id="attending-yes"
                                                label="Ya"
                                                name="default-radio"
                                                onChange={() => {
                                                    setAttendance(true);
                                                    setGuest(1);
                                                }}
                                            />
                                            <Form.Check
                                                type="radio"
                                                id="attending-no"
                                                label="Tidak"
                                                name="default-radio"
                                                onChange={() => {
                                                    setAttendance(false);
                                                    setGuest(0);
                                                }}
                                            />
                                        </Form.Group>
                                        {attendance &&
                                            <Form.Group className="mb-3" controlId="formGuest">
                                                <Form.Label>Bilangan tetamu</Form.Label>
                                                <Form.Select onChange={(e) => setGuest(parseInt(e.target.value))}>
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                </Form.Select>
                                            </Form.Group>
                                        }


                                        <Button
                                            disabled={disabled}
                                            onClick={() => setShowModal(true)}
                                            style={{
                                                backgroundColor: colorBrown[500],
                                                borderColor: colorBrown[500],
                                            }}
                                        >
                                            Hantar
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>

                        </motion.div>
                    </Col>
                </Row>
            </Container>
            <RsvpModalAtul
                show={showModal}
                onHide={() => setShowModal(false)}
                name={name}
                phone={phone}
                attendance={attendance}
                guest={guest || 0}
                onClick={handleSend}
                status={status}
            />
        </>
    );
}

export default RsvpAtulSection;