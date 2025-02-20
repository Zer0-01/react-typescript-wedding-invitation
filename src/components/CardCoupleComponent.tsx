import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import Container from "react-bootstrap/esm/Container";

const CardCoupleComponent = () => {
    return (
        <Container
            style={{
                backgroundImage: "url('../src/assets/background-1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            fluid >
            <Row className="py-5">
                <Col className="text-center">
                    <div className="fs-1" >Assalammualaikum</div>
                </Col>
            </Row>
            <Row className="py-5">
                <Col className="text-center">
                    <div className="fs-5" >Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, Kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri Resepsi Pernikahan kami.</div>
                </Col>
            </Row>
            <Row className="py-2">
                <Col className="text-center">
                    <Image
                        className="bg-dark w-75"
                        src="../src/assets/atul-cartoon.png"
                        roundedCircle
                        fluid />
                </Col>
            </Row>
            <Row className="py-2">
                <Col className="text-center">
                    <div>Nur Izzatul Khairiah</div>
                </Col>
            </Row>
            <Row className="py-2">
                <Col className="text-center">
                    <div>Puteri daripada Encik Mubin dan Puan Zoliana</div>
                </Col>
            </Row>
            <Row className="py-2">
                <Col className="text-center">
                    <Image
                        className="bg-dark w-75"
                        src="../src/assets/anas-cartoon.png"
                        roundedCircle
                        fluid />
                </Col>
            </Row>
            <Row className="py-2">
                <Col className="text-center">
                    <div>Anas Zulkifli</div>
                </Col>
            </Row>
            <Row className="pt-2 pb-5">
                <Col className="text-center">
                    <div>Putera daripada Encik Mohd Jeffry dan Puan Jamilah</div>
                </Col>
            </Row>
        </Container>



    );
}

export default CardCoupleComponent;
