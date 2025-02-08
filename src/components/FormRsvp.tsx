import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../FIrebaseConfig";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/esm/Container";
import Modal from "react-bootstrap/esm/Modal";

const FormRsvp = () => {
    const db = getFirestore(app);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isAttending, setIsAttending] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [showAttendanceModal, setShowAttendanceModal] = useState(false);

    const handleShowAttendanceModal = () => {
        setShowAttendanceModal(true);
    };

    const handleCloseAttendanceModal = () => {
        setShowAttendanceModal(false);
    };

    const onClickSubmit = async (name: string, isAttending: boolean, message: string) => {
        setIsLoading(true); // Show the loading spinner
        setSuccessMessage(''); // Reset success message
        try {
            // Simulate a delay
            await new Promise(resolve => setTimeout(resolve, 3000));

            // Save to Firebase
            const docRef = await addDoc(collection(db, "Guests"), {
                name: name,
                isAttending: isAttending,
                message: message,
            });
            console.log("Document written with ID: ", docRef.id);
            setSuccessMessage('RSVP saved successfully!'); // Show success message
        } catch (e) {
            console.error("Error adding document: ", e);
            setSuccessMessage('Error saving RSVP. Please try again.'); // Show error message
        } finally {
            setIsLoading(false); // Hide the loading spinner

            // Hide the message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
    };

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        attendance: "",
        jumlahKehadiran: "",
    });

    const isFormComplete = Object.values(formData).every((field) => field !== "");

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Container>
            <Row>
                <Col className='text-center'>
                    <Button variant="primary" onClick={handleShowAttendanceModal}>Attendance</Button>
                </Col>
                <Col>
                    <Button variant="primary">Say Something</Button>
                </Col>
            </Row>

            <Modal show={showAttendanceModal} onHide={handleCloseAttendanceModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Attendance</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Attendance</Form.Label>
                            <div>
                                <Form.Check
                                    type="radio"
                                    label="Attend"
                                    name="attendance"
                                    value="Attend"
                                    checked={formData.attendance === "Attend"}
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Not Attend"
                                    name="attendance"
                                    value="Not Attend"
                                    checked={formData.attendance === "Not Attend"}
                                    onChange={handleChange}
                                />
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="jumlahKehadiran">
                            <Form.Label>Jumlah Kehadiran</Form.Label>
                            <Form.Control
                                type="number"
                                name="jumlahKehadiran"
                                value={formData.jumlahKehadiran}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAttendanceModal}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleCloseAttendanceModal}
                        disabled={!isFormComplete}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
        // <Container>
        //     <Row>
        //         <Col>
        //             <Card className='p-3'>
        //                 <Row>
        //                     <Col className='text-center'>
        //                         <div className='fs-3'>Say something!</div>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col>
        //                         <Form>
        //                             <Form.Group className='mb-3' controlId='formName'>
        //                                 <Form.Label>Name</Form.Label>
        //                                 <Form.Control type='text' value={name} onChange={(newValue) => setName(newValue.target.value)} />
        //                             </Form.Group>
        //                         </Form>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col>
        //                         <Form>
        //                             <Form.Group className='mb-3' controlId='formMessage'>
        //                                 <Form.Label>Message</Form.Label>
        //                                 <Form.Control as="textarea" rows={6} value={message} onChange={(newValue) => setMessage(newValue.target.value)} />
        //                             </Form.Group>
        //                         </Form>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col>
        //                         <div>Attendance</div>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col>
        //                         <Form>
        //                             <Form.Check
        //                                 label="Attend"
        //                                 name="group1"
        //                                 type='radio'
        //                                 checked={isAttending === true}
        //                                 onChange={() => setIsAttending(true)}
        //                             />
        //                             <Form.Check
        //                                 label="Not Attend"
        //                                 name="group1"
        //                                 type='radio'
        //                                 checked={isAttending === false}
        //                                 onChange={() => setIsAttending(false)}
        //                             />
        //                         </Form>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col className='text-center'>
        //                         <Button variant='primary' onClick={() => onClickSubmit(name, isAttending, message)} disabled={isLoading}>
        //                             {isLoading ? (
        //                                 <>
        //                                     <Spinner animation="border" size="sm" /> Saving...
        //                                 </>
        //                             ) : (
        //                                 'Submit'
        //                             )}
        //                         </Button>
        //                     </Col>
        //                 </Row>
        //                 <Row className='mt-3'>
        //                     <Col>
        //                         {successMessage && (
        //                             <Alert variant={successMessage.startsWith('Error') ? 'danger' : 'success'} className='text-center'>
        //                                 {successMessage}
        //                             </Alert>
        //                         )}
        //                     </Col>
        //                 </Row>
        //             </Card>
        //         </Col>
        //     </Row>

        // </Container>

    );
};

export default FormRsvp;
