import { Button, Col, Container, Modal, Row } from "react-bootstrap"
import { RsvpStatus } from "./RsvpFormSection";

interface RsvpModalProps {
    show: boolean,
    onHide: (() => void)
    name: string,
    phone: string,
    attendance: boolean | null,
    guest: number,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    status: RsvpStatus
}

const RsvpModal = ({ show, onHide, name, phone, attendance, guest, onClick, status }: RsvpModalProps) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Please confirm your RSVP</Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <Container>
                    <ValueComponent title="Name" value={name} />
                    <ValueComponent title="Phone" value={phone} />
                    <ValueComponent title="Attendance" value={attendance ? "Yes" : "No"} />
                    <ValueComponent title="Guest" value={guest.toString()} />
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="primary"
                    onClick={onClick}
                    disabled={status === RsvpStatus.LOADING}
                >
                    Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}

interface ValueComponentProps {
    title: String,
    value: String
}

const ValueComponent = ({ title, value }: ValueComponentProps) => {
    return (
        <Row>
            <Col xs="auto">
                {title}:
            </Col>
            <Col xs="auto" className="fw-bold p-0">
                {value}
            </Col>
        </Row>
    )
}

export default RsvpModal;