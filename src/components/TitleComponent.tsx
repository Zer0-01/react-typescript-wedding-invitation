import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const TitleComponent = () => {
    return (
        <Container>
            <Row className="pt-5 mb-3">
                <Col>
                    <div className='text-center fs-3 fw-bold text-maroon '>
                        Ya Allah the Most Loving
                    </div>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col>
                    <div className='text-center fs-3 text-maroon'>
                        With Your blessing, you brought us together in a holy marriage bond
                    </div>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col >
                    <div className='text-center fs-4 fw-bold text-maroon'>
                        THE WEDDING OF
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="fs-1 text-center fw-bold mb-5  text-maroon">
                        Anas & Izzatul
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <div className="text-center fw-bold fs-3 mb-5 text-maroon">
                        03 08 2025
                    </div> </Col>
            </Row>

        </Container>


    );
}

export default TitleComponent;