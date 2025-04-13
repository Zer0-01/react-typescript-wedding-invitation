import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { db } from "../../FirebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { toast } from "react-toastify";
import RsvpModal from "./RsvpModal";
import { colorBackground, colorBrown } from "../../constants/ColorsConstant";
import { motion } from "framer-motion";

export enum RsvpStatus {
    INITIAL,
    LOADING,
    SUCCESS,
    FAILURE
}

const RsvpFormSection = () => {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [attendance, setAttendance] = useState<boolean | null>(null);
    const [guest, setGuest] = useState<number>(1);
    const [status, setStatus] = useState<RsvpStatus>(RsvpStatus.INITIAL);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    useEffect(() => {
        setIsDisabled(!(name && phone && attendance !== null));
    }, [name, phone, attendance]);

    const handleSend = async () => {
        setStatus(RsvpStatus.LOADING);
        try {
            await addDoc(collection(db, "rsvp"), {
                name,
                phone,
                attendance,
                guest,
                timestamp: serverTimestamp(),
            });

            setStatus(RsvpStatus.SUCCESS);
            setShowModal(false);
            toast.success("RSVP data sent successfully!");
        } catch (error) {
            setStatus(RsvpStatus.FAILURE);
            toast.error("Error sending RSVP data");
            console.error("Error sending RSVP data:", error);
        }
    };

    return (
        <>
            <Container fluid style={{ backgroundColor: colorBackground }}>
                <Row className="g-0 py-5 justify-content-center">
                    <Col sm={12} md={8} lg={6} xl={4}>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Card >
                                <Card.Body>
                                    <Card.Title className="fs-3 fw-bold text-center">RSVP</Card.Title>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formName">
                                            <Form.Label>Nama</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Nama anda"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formPhoneNumber">
                                            <Form.Label>Nombor Telefon</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Nombor telefon anda"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formAttendance">
                                            <Form.Label>Adakah anda akan hadir?</Form.Label>
                                            <Form.Check
                                                type="radio"
                                                id="attending-yes"
                                                label="Ya"
                                                name="attendance"
                                                checked={attendance === true}
                                                onChange={() => {
                                                    setAttendance(true);
                                                    setGuest(1);
                                                }}
                                            />
                                            <Form.Check
                                                type="radio"
                                                id="attending-no"
                                                label="Tidak"
                                                name="attendance"
                                                checked={attendance === false}
                                                onChange={() => {
                                                    setAttendance(false);
                                                    setGuest(0);
                                                }}
                                            />
                                        </Form.Group>

                                        {/* {attendance && (
                                            <Form.Group className="mb-3" controlId="formGuest">
                                                <Form.Label>Bilangan tetamu</Form.Label>
                                                <Form.Select
                                                    value={guest}
                                                    onChange={(e) => setGuest(parseInt(e.target.value))}
                                                >
                                                    {[1, 2, 3, 4, 5].map((num) => (
                                                        <option key={num} value={num}>
                                                            {num}
                                                        </option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                        )} */}

                                        <Button
                                            disabled={isDisabled}
                                            onClick={() => setShowModal(true)}
                                            className="w-100"
                                            style={{ backgroundColor: colorBrown[500], borderColor: colorBrown[500] }}
                                        >
                                            Hantar
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
                <div style={{ height: "5px", backgroundColor: colorBrown[500], width: "100%" }} />
            </Container>

            <RsvpModal
                show={showModal}
                onHide={() => setShowModal(false)}
                name={name}
                phone={phone}
                attendance={attendance}
                onClick={handleSend}
                status={status}
            />
        </>
    );
};

export default RsvpFormSection;
