import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Modal from "react-bootstrap/esm/Modal";

const FormRsvp = () => {
   
    const [showAttendanceModal, setShowAttendanceModal] = useState(false);

    const handleShowAttendanceModal = () => {
        setShowAttendanceModal(true);
    };

    const handleCloseAttendanceModal = () => {
        setShowAttendanceModal(false);
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
    );
};

export default FormRsvp;
