import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row"
import Card from "react-bootstrap/esm/Card";
import { AiOutlineCopy } from "react-icons/ai";
import { toast } from "react-toastify";
import { Button, Form, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../FirebaseConfig";




interface CardDetail {
    name: string;
    bankName: string;
    accountNumber: string;
}

interface Gift {
    name: string;
    phone: string;
    isSelected: boolean;
}

enum GiftStatus {
    INITIAL, LOADING, SUCCESS, FAILURE
}

const GiftComponent = () => {
    const [status, setStatus] = useState<GiftStatus>(GiftStatus.INITIAL);
    const [giftList, setGiftList] = useState<Gift[]>([]);
    const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
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

    const handleCopy = (accountNumber: string) => {
        navigator.clipboard.writeText(accountNumber);
        showToast(`Account number copied to clipboard!: ${accountNumber}`);
    }

    const showToast = (message: string) => toast(message);

    const fetchGifts = async () => {
        setStatus(GiftStatus.LOADING);
        try {
            const querySnapshot = await getDocs(collection(db, "gift"));
            querySnapshot.forEach((gift) => {
                setGiftList((prevGiftList) => [...prevGiftList, gift.data() as Gift]);
            });
            setStatus(GiftStatus.SUCCESS);
        } catch (error) {
            setStatus(GiftStatus.FAILURE);
        }
    }

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
                {status === GiftStatus.LOADING
                    ? <Spinner as="span" animation="border" size="sm" />
                    : <Row className="pb-3">
                        <Col>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter phone number" />
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
                                <Button>Send</Button>
                            </Form>
                        </Col>
                    </Row>}
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
                        }}>
                        +
                    </Col>
                </Row>
            </Container>
        </>
    );


};

export default GiftComponent;