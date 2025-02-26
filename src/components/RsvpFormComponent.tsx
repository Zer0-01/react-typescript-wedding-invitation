import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { db } from "../FirebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { toast } from "react-toastify";
enum RsvpStatus {
    INITIAL, LOADING, SUCCESS, FAILURE
}


const RsvpFormComponent = () => {
    const [disabled, setDisabled] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [attendance, setAttendance] = useState<boolean | null>(null);
    const [guest, setGuest] = useState<number>(0);
    const [status, setStatus] = useState<RsvpStatus>(RsvpStatus.INITIAL);

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
                fluid
                style={
                    {
                        backgroundColor: "#F5ECD5",
                    }
                }>
                <Row className="py-5">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>RSVP Form</Card.Title>
                                <Form>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your name"
                                            onChange={(e) => setName(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group
                                        className="mb-3"
                                        controlId="formPhoneNumber">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your phone number"
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formAttendance">
                                        <Form.Label>Will you be attending?</Form.Label>
                                        <Form.Check
                                            type="radio"
                                            id="attending-yes"
                                            label="I will"
                                            name="default-radio"
                                            onChange={() => {
                                                setAttendance(true);
                                                setGuest(1);
                                            }}
                                        />
                                        <Form.Check
                                            type="radio"
                                            id="attending-no"
                                            label="I will not"
                                            name="default-radio"
                                            onChange={() => {
                                                setAttendance(false);
                                                setGuest(0);
                                            }}
                                        />
                                    </Form.Group>
                                    {attendance &&
                                        <Form.Group className="mb-3" controlId="formGuest">
                                            <Form.Label>Number of guest(s)</Form.Label>
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
                                        disabled={disabled || status === RsvpStatus.LOADING}
                                        onClick={handleSend}
                                    >
                                        {status === RsvpStatus.LOADING ? <Spinner as="span" animation="border" size="sm" /> : "Send"}
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default RsvpFormComponent;