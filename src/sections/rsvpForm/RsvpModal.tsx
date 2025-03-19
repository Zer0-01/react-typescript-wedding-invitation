import { Button, Col, Container, Modal, Row } from "react-bootstrap"
import { RsvpStatus } from "./RsvpFormSection";
import { colorBrown } from "../../constants/ColorsConstant";

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
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>Sila sahkan RSVP anda</Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <Container>
                    <ValueComponent title="Nama" value={name} />
                    <ValueComponent title="Nombor telefon" value={phone} />
                    <ValueComponent title="Adakah anda akan hadir" value={attendance ? "Ya" : "Tidak"} />
                    <ValueComponent title="Bilangan tetamu" value={guest.toString()} />
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    style={{
                        backgroundColor: colorBrown[500],
                        borderColor: colorBrown[500],
                    }}
                    onClick={onClick}
                    disabled={status === RsvpStatus.LOADING}
                >
                    Simpan</Button>
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