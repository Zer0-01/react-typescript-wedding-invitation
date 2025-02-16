import { useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import RsvpSummary from "../small/RsvpSummary";

const RsvpForm = () => {
    const [form, setForm] = useState<{
        name: string;
        phoneNumber: string;
        attendance: boolean | null;
        guestCount: number;
        message: string;
    }>({
        name: '',
        phoneNumber: '',
        attendance: null,
        guestCount: 0,
        message: '',
    });

    const [showModal, setShowModal] = useState(false);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (
        <>
            <Card className="shadow-sm py-3 ">
                <Container>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="formBasicName">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control required type="text" onChange={(e) => setForm({ ...form, name: e.target.value })} />
                            <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPhoneNumber">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control required type="text" placeholder="+60123456789" onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} />
                            <Form.Control.Feedback type="invalid">Please enter your phone number.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <div className="mb-2">Will you be attending?</div>
                            <div key="inline-radio" className="mb-3">
                                <Form.Check
                                    inline
                                    label="Yes, I'll be there"
                                    name="attendance"
                                    type="radio"
                                    id="attendYes"
                                    onChange={() => setForm({ ...form, attendance: true })}
                                />
                                <Form.Check
                                    inline
                                    label="Sorry, I can't make it"
                                    name="attendance"
                                    type="radio"
                                    id="attendNo"
                                    onChange={() => setForm({ ...form, attendance: false, guestCount: 0 })}
                                />
                            </div>
                        </Form.Group>

                        {!!form.attendance && <Form.Group className="mb-4" controlId="formBasicGuest">
                            <Form.Label>Additional guest (Maximum: 5)</Form.Label>
                            <Form.Select required aria-label="Default select example" onChange={(e) => setForm({ ...form, guestCount: parseInt(e.target.value) })}>
                                <option value="0">No additional guest</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                        </Form.Group>}

                        <Form.Group className="mb-4" controlId="formBasicMessage">
                            <Form.Label>Wishes for the couple</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Share your wishes for the couple" onChange={(e) => setForm({ ...form, message: e.target.value })} />
                        </Form.Group>

                        <Row className="justify-content-center">
                            <Col xs="auto">
                                <Button className="text-center" variant="primary" type="submit" >
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Card >

            <Modal
                show={showModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Confirm RSVP Submission
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Please review your RSVP details. Once submitted, you cannot modify this information.</div>
                    <br />
                    <div className="fw-bold">Your RSVP details:</div>
                    {[
                        { label: "Name", value: form.name },
                        { label: "Phone number", value: form.phoneNumber },
                        { label: "Will you be attending", value: form.attendance ? "Yes, I'll be there" : "Sorry, I can't make it" },
                        { label: "Additional guest", value: form.guestCount.toString() },
                        { label: "Wishes for the couple", value: form.message }
                    ].map((item, index) => (
                        <RsvpSummary key={index} label={item.label} value={item.value} />
                    ))}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={() => setShowModal(false)} >Close and Edit</Button>
                    <Button onClick={() => setShowModal(false)} >Confirm and Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RsvpForm;