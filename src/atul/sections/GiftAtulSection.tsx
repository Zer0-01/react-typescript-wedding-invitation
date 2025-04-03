import { addDoc, collection, doc, getDoc, getDocs, serverTimestamp, Timestamp, updateDoc } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../../FirebaseConfig";
import { toast } from "react-toastify";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { colorBrown, colorPrimary } from "../../constants/ColorsConstant";
import { AiOutlineCopy } from "react-icons/ai";

interface CardDetail {
    name: string;
    bankName: string;
    accountNumber: string;
}

interface Gift {
    id: string;
    name: string;
    phone: string;
    isSelected: boolean;
    timestamp: Timestamp | null;
}

enum GiftStatus {
    INITIAL, LOADING, SUCCESS, FAILURE
}

enum NewGiftStatus {
    INITIAL, LOADING, SUCCESS, FAILURE
}


const GiftAtulSection = () => {
    const [status, setStatus] = useState<GiftStatus>(GiftStatus.INITIAL);
    const [giftList, setGiftList] = useState<Gift[]>([]);
    const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
    const [unvailableSelectedGift, setUnvailableSelectedGift] = useState<Gift | null>(null);
    const [showAddGiftModal, setShowAddGiftModal] = useState<boolean>(false);
    const [showGiftDetailModal, setShowGiftDetailModal] = useState<boolean>(false);
    const [isButtonDisabled, setIsButtonDIsabled] = useState<boolean>(true);
    const [phone, setPhone] = useState<string>("");
    const [newGiftName, setNewGiftName] = useState<string>("");
    const [newGiftPhone, setNewGiftPhone] = useState<string>("");
    const [newGiftStatus, setNewGiftStatus] = useState<NewGiftStatus>(NewGiftStatus.INITIAL);
    const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);

    const cardDetailList: CardDetail[] = [
        {
            name: "Anas Zulkifli bin Mohd Jeffry",
            bankName: "CIMB",
            accountNumber: "0123456789"
        },
        {
            name: "Nur Izzatul Khairiah binti Mubin",
            bankName: "Maybank",
            accountNumber: "0123456789"
        }
    ]

    useEffect(() => {
        fetchGifts();
    }, []);

    useEffect(() => {
        if (phone && selectedGift) {
            setIsButtonDIsabled(false);
        } else {
            setIsButtonDIsabled(true);
        }

    }, [phone, selectedGift]);

    const handleCopy = (accountNumber: string) => {
        navigator.clipboard.writeText(accountNumber);
        showToast(`Account number copied to clipboard!: ${accountNumber}`);
    }
    const fetchGifts = async () => {
        setStatus(GiftStatus.LOADING);
        try {
            const querySnapshot = await getDocs(collection(db, "gift"));
            const gifts: Gift[] = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data() as Omit<Gift, "id">,
            }));
            setGiftList(gifts);
            setStatus(GiftStatus.SUCCESS);
        } catch (error) {
            setStatus(GiftStatus.FAILURE);
        }
    };
    const handleClose = () => setShowAddGiftModal(false);
    const handleShow = () => setShowAddGiftModal(true);
    const handleCloseGiftDetail = () => setShowGiftDetailModal(false);
    const handleShowGiftDetail = () => setShowGiftDetailModal(true);
    const handleOnClickSend = async () => {
        setStatus(GiftStatus.LOADING);
        try {
            const giftRef = doc(db, "gift", selectedGift?.id ?? "")
            const giftSnapshot = await getDoc(giftRef);

            if (giftSnapshot.exists()) {
                const giftData = giftSnapshot.data();
                if (giftData.isSelected === true) {
                    setStatus(GiftStatus.FAILURE);
                    showToast("Maaf, hadiah ini telah dipilih oleh orang lain. Silakan refresh dan pilih hadiah lain.");
                    return;
                }
            }
            await updateDoc(giftRef, {
                phone: phone,
                isSelected: true,
                timestamp: serverTimestamp()
            });
            setStatus(GiftStatus.SUCCESS);
            setShowConfirmationModal(false);
            showToast("Terima kasih, hadiah telah berhasil dipilih!");
            await fetchGifts();
        } catch (error) {
            setStatus(GiftStatus.FAILURE);
            showToast("Kesulitan berlaku ketika memilih  hadiah. Sila cuba lagi.");;
        }
    }
    const showToast = (message: string) => toast(message);
    const handleSend = async () => {
        setNewGiftStatus(NewGiftStatus.LOADING);
        try {
            await addDoc(collection(db, "gift"), {
                name: newGiftName,
                phone: newGiftPhone,
                isSelected: true,
                timestamp: serverTimestamp()

            });
            setNewGiftStatus(NewGiftStatus.SUCCESS);
            setNewGiftName("");
            setNewGiftPhone("");
            handleClose();
            showToast("Terima kasih, hadiah telah berhasil dipilih!");
            await fetchGifts();

        } catch (error) {
            setNewGiftStatus(NewGiftStatus.FAILURE);
            showToast("Kesulitan berlaku, Sila cuba lagi.");
        }
    }


    return (
        <>
            <Container

                fluid
            >
                <Row className="g-0 justify-content-center">
                    <Col sm={12} md={8} lg={6} xl={4} >
                        {cardDetailList.map((cardDetail, index) => (
                            <Row key={index} className={index === 0 ? "pt-5 pb-2" : "pt-2 pb-3"}>
                                <Col>
                                    <Card
                                        style={{
                                            backgroundColor: colorBrown[0],
                                        }}
                                    >
                                        <Card.Body>
                                            <Card.Title >{cardDetail.name}</Card.Title>
                                            <Card.Subtitle>{cardDetail.bankName}</Card.Subtitle>
                                            <Card.Text>
                                                {cardDetail.accountNumber}
                                                <AiOutlineCopy
                                                    className="ms-2"
                                                    onClick={() => handleCopy(cardDetail.accountNumber)} />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        ))}


                        <Row className="pb-3">
                            <Col>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nombor Telefon</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Nombor telefon anda"
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Hadiah</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Pilih di bawah"
                                            readOnly
                                            value={selectedGift ? selectedGift.name : ""}
                                        />
                                    </Form.Group>
                                    <Button
                                        disabled={isButtonDisabled || status === GiftStatus.LOADING}
                                        onClick={() => setShowConfirmationModal(true)}
                                        style={
                                            {
                                                backgroundColor: colorBrown[500],
                                                borderColor: colorBrown[500],
                                            }
                                        }
                                    >
                                        Hantar
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="auto" style={{ color: colorBrown[500] }} className="fw-bold"
                            >
                                •
                            </Col>
                            <Col
                                xs="auto"
                                style={{ color: colorBrown[500] }}
                                className="fw-bold"

                            >
                                Masih ada
                            </Col>
                        </Row>
                        <Row className="pb-3">
                            <Col
                                xs="auto"
                                style={{
                                    color: colorBrown[100]
                                }}
                                className="fw-bold"
                            >
                                •
                            </Col>
                            <Col xs="auto" style={{
                                color: colorBrown[100]
                            }}
                                className="fw-bold"
                            >
                                Sudah dipilih (Klik untuk lihat butiran)
                            </Col>
                        </Row>
                        <Row className="pb-5">
                            {giftList.map((gift, index) => (
                                <Col
                                    xs="auto"
                                    key={index}
                                    style={{
                                        backgroundColor: gift.isSelected ? colorBrown[100] : colorBrown[500],
                                        color: gift.isSelected ? "white" : "white",
                                        padding: "10px",
                                        margin: "5px",
                                        cursor: "pointer",
                                        borderRadius: "5px",
                                    }}
                                    onClick={() => {
                                        if (gift.isSelected !== true) {
                                            setSelectedGift(gift);
                                        } else {
                                            setUnvailableSelectedGift(gift);
                                            handleShowGiftDetail();
                                        }
                                    }}
                                >
                                    {gift.name}
                                </Col>
                            ))}
                            <Col xs="auto"
                                style={{
                                    backgroundColor: colorPrimary[0],
                                    borderColor: colorPrimary[500],
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    color: colorPrimary[500],
                                    padding: "10px 15px",
                                    margin: "5px",
                                    cursor: "pointer",
                                    borderRadius: "5px",
                                }}
                                onClick={handleShow}
                            >
                                +
                            </Col>
                        </Row>


                    </Col>
                </Row>


            </Container>

            <Modal
                show={showAddGiftModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tambah Hadiah</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-2" >
                            <Form.Label>Nombor Telefon</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombor telefon anda"
                                onChange={(e) => {
                                    setNewGiftPhone(e.target.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Hadiah</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Hadiah yang anda ingin berikan"
                                onChange={(e) => {
                                    setNewGiftName(e.target.value);
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        style={{
                            backgroundColor: colorBrown[500],
                            borderColor: colorBrown[500]
                        }}
                        onClick={handleSend}
                        disabled={!newGiftName || !newGiftPhone || newGiftStatus === NewGiftStatus.LOADING}
                    >
                        Simpan
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showGiftDetailModal}
                onHide={handleCloseGiftDetail}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Butiran Hadiah</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                Hadiah: {unvailableSelectedGift?.name ?? "N/A"}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Nombor Telefon Pemberi: {unvailableSelectedGift?.phone ?? "N/A"}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Tarikh: {unvailableSelectedGift?.timestamp
                                    ? new Date(unvailableSelectedGift.timestamp.toDate()).toLocaleString('en-GB', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: '2-digit'
                                    })
                                    : "N/A"}
                            </Col>
                        </Row>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        style={{
                            backgroundColor: colorBrown[500],
                            borderColor: colorBrown[500]
                        }}
                        onClick={handleCloseGiftDetail}>
                        Tutup
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showConfirmationModal}
                onHide={() => setShowConfirmationModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sila Sahkan Hadiah Anda</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs="auto">
                                Nombor Telefon Pemberi:
                            </Col>
                            <Col className="fw-bold p-0">
                                {phone}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="auto">
                                Hadiah:
                            </Col>
                            <Col className="fw-bold p-0">
                                {selectedGift?.name ?? "N/A"}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        style={{
                            backgroundColor: colorBrown[500],
                            borderColor: colorBrown[500]
                        }}
                        onClick={handleOnClickSend}>Simpan</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default GiftAtulSection;