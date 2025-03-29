import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { RsvpStatus } from "./RsvpFormSection";
import { colorBrown } from "../../constants/ColorsConstant";

interface RsvpModalProps {
    show: boolean;
    onHide: () => void;
    name: string;
    phone: string;
    attendance: boolean | null;
    guest: number;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    status: RsvpStatus;
}

const RsvpModal = ({ show, onHide, name, phone, attendance, guest, onClick, status }: RsvpModalProps) => (
    <Modal show={show} onHide={onHide} centered backdrop="static">
        <Modal.Header closeButton>
            <Modal.Title>Sila sahkan RSVP anda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <InfoRow title="Nama" value={name} />
                <InfoRow title="Nombor Telefon" value={phone} />
                <InfoRow title="Adakah Anda Akan Hadir" value={attendance ? "Ya" : "Tidak"} />
                <InfoRow title="Bilangan Tetamu" value={guest.toString()} />
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button
                className="w-100"
                style={{ backgroundColor: colorBrown[500], borderColor: colorBrown[500] }}
                onClick={onClick}
                disabled={status === RsvpStatus.LOADING}
            >
                Simpan
            </Button>
        </Modal.Footer>
    </Modal>
);

interface InfoRowProps {
    title: string;
    value: string;
}

const InfoRow = ({ title, value }: InfoRowProps) => (
    <Row className="mb-2">
        <Col xs="auto" className="fw-semibold">
            {title}:
        </Col>
        <Col className="fw-bold">{value}</Col>
    </Row>
);

export default RsvpModal;
