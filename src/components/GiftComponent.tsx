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
            console.error("Error fetching gifts:", error);
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
                    : <Row className="pb-5">
                        <Col>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter phone number" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Gift</Form.Label>
                                    <Form.Select>
                                        {giftList.map((gift, index) => (
                                            <option key={index} value={gift.name}>{gift.name}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Button>Send</Button>
                            </Form>
                        </Col>
                    </Row>}
                <Row className="pb-5">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>List of Gifts</Card.Title>
                                <Container
                                    className="overflow-auto p-0"
                                    style={{ maxHeight: "50vh" }}>
                                    <Row>
                                        <Col>

                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );


};

export default GiftComponent;