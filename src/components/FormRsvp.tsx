import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Modal from "react-bootstrap/esm/Modal";

const FormRsvp = () => {

    const [showAttendanceModal, setShowAttendanceModal] = useState(false);
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [attendance, setAttendance] = useState<boolean | null>(null);
    const [jumlahKehadiran, setJumlahKehadiran] = useState<number | null>(null);

    const handleShowAttendanceModal = () => {
        setShowAttendanceModal(true);
    };

    const handleCloseAttendanceModal = () => {
        setShowAttendanceModal(false);
        resetValue();
    };

    const resetValue = () => {
        setName("");
        setPhone("");
        setAttendance(null);
        setJumlahKehadiran(null);
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

            <Modal show={showAttendanceModal} onHide={handleCloseAttendanceModal} centered backdrop="static">
                <Modal.Header closeButton
                >
                    <Modal.Title>Attendance</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                onChange={(value) => { setName(value.target.value) }}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={phone}
                                onChange={(value) => { setPhone(value.target.value) }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Attendance</Form.Label>
                            <div>
                                <Form.Check
                                    type="radio"
                                    label="Attend"
                                    name="attendance"
                                    checked={attendance === true}
                                    onChange={() => { setAttendance(true) }}

                                />
                                <Form.Check
                                    type="radio"
                                    label="Not Attend"
                                    name="attendance"
                                    checked={attendance === false}
                                    onChange={() => {
                                        setAttendance(false)
                                        setJumlahKehadiran(null)
                                    }}
                                />
                            </div>
                        </Form.Group>

                        {attendance === true && (
                            <Form.Group className="mb-3" controlId="jumlahKehadiran">
                                <Form.Label>Jumlah Kehadiran</Form.Label>
                                <Form.Select
                                    className="w-auto"
                                    value={jumlahKehadiran ?? ""}
                                    onChange={(event) => setJumlahKehadiran(Number(event.target.value))}
                                >
                                    <option value="">Select</option>
                                    {[...Array(10)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        )}

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        disabled={!name || !phone || !attendance || (attendance === true && !jumlahKehadiran)}
                        onClick={handleCloseAttendanceModal}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};
export default FormRsvp;
