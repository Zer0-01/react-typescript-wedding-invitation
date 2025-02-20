import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const RsvpForm = () => {
    const [disabled, setDisabled] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [attendance, setAttendance] = useState<boolean | null>(null);
    const [guest, setGuest] = useState<number>(0);

    useEffect(() => {
        if (name && phone && attendance !== null && name && phone !== "") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }


    }, [name, phone, attendance, guest]);

    const handleSend = () => {
        // TODO: Send RSVP data to backend
        console.log("Sending RSVP data to backend...");
        console.log(`Name: ${name}`);
        console.log(`Phone: ${phone}`);
        console.log(`Attendance: ${attendance ? "Yes" : "No"}`);
        console.log(`Guest: ${guest}`);
    }

    return (
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
                                        id="default-radio"
                                        label="I will"
                                        name="default-radio"
                                        onChange={() => {
                                            setAttendance(true);
                                            setGuest(1);
                                        }}
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="default-radio"
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
                                    disabled={disabled}
                                    onClick={handleSend}
                                >Send</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default RsvpForm;