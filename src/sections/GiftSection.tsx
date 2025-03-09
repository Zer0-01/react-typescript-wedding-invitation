import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row"
import Card from "react-bootstrap/esm/Card";
import { AiOutlineCopy } from "react-icons/ai";
import { toast } from "react-toastify";
import { Button, Form, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore/lite";
import { db } from "../FirebaseConfig";




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
}

enum GiftStatus {
    INITIAL, LOADING, SUCCESS, FAILURE
}

const GiftSection = () => {
    const [status, setStatus] = useState<GiftStatus>(GiftStatus.INITIAL);
    const [giftList, setGiftList] = useState<Gift[]>([]);
    const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
    const [unvailableSelectedGift, setUnvailableSelectedGift] = useState<Gift | null>(null);
    const [showAddGiftModal, setShowAddGiftModal] = useState<boolean>(false);
    const [showGiftDetailModal, setShowGiftDetailModal] = useState<boolean>(false);
    const [isButtonDisabled, setIsButtonDIsabled] = useState<boolean>(true);
    const [phone, setPhone] = useState<string>("");

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
            await updateDoc(giftRef, {
                phone: phone,
                isSelected: true
            });
            await fetchGifts();
            setSelectedGift(null);
            showToast("Gift update successfully!");
            setStatus(GiftStatus.SUCCESS);
        } catch (error) {
            setStatus(GiftStatus.FAILURE);
        }
    }

    const showToast = (message: string) => toast(message);


    return (
        <>
            <Container
                style={{
                    backgroundColor: "#f8f9fa",
                }}
                fluid>
                {cardDetailList.map((cardDetail, index) => (
                    <Row key={index} className={index === 0 ? "pt-5 pb-2" : "pt-2 pb-5"}>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{cardDetail.name}</Card.Title>
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
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter phone number"
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Gift</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Select gift below"
                                    readOnly
                                    value={selectedGift ? selectedGift.name : ""}
                                />
                            </Form.Group>
                            <Button
                                disabled={isButtonDisabled || status === GiftStatus.LOADING}
                                onClick={handleOnClickSend}
                            >Send</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto" style={{ color: "blue" }} className="fw-bold"
                    >
                        •
                    </Col>
                    <Col
                        xs="auto"
                        style={{ color: "blue" }}
                        className="fw-bold"

                    >
                        Available
                    </Col>
                </Row>
                <Row className="pb-3">
                    <Col
                        xs="auto"
                        style={{
                            color: "gray"
                        }}
                        className="fw-bold"
                    >
                        •
                    </Col>
                    <Col xs="auto" style={{
                        color: "gray"
                    }}
                        className="fw-bold"
                    >
                        Already selected
                    </Col>
                </Row>
                <Row className="pb-5">
                    {giftList.map((gift, index) => (
                        <Col
                            xs="auto"
                            key={index}
                            style={{
                                backgroundColor: gift.isSelected ? "gray" : "blue",
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
                            backgroundColor: "green",
                            color: "white",
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
            </Container>

            <Modal
                show={showAddGiftModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new gift</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-2">I will not close if you click outside me. Do not even try to press
                        escape key.</div>
                    <Form>
                        <Form.Group className="mb-2" >
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="text" placeholder="Enter phone number" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Gift</Form.Label>
                            <Form.Control type="text" placeholder="Enter gift" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Send</Button>
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
                    <Modal.Title>Gift Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                Gift name: {unvailableSelectedGift?.name ?? "N/A"}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Phone number: {unvailableSelectedGift?.phone ?? "N/A"}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseGiftDetail}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );


};

export default GiftSection;