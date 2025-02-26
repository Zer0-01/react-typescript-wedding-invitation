import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row"
import Card from "react-bootstrap/esm/Card";
import { AiOutlineCopy } from "react-icons/ai";
import { toast } from "react-toastify";




interface CardDetail {
    name: string;
    bankName: string;
    accountNumber: string;

}

const GiftComponent = () => {
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

    const handleCopy = (accountNumber: string) => {
        navigator.clipboard.writeText(accountNumber);
        showToast(`Account number copied to clipboard!: ${accountNumber}`);
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
            </Container>
        </>
    );


};

export default GiftComponent;