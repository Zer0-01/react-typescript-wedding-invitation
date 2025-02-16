import { Card, Col, Container, Row } from "react-bootstrap";
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineEnvironment } from "react-icons/ai";


const TitleComponent = () => {
    return (
        <Card className="shadow-sm py-3 ">
            <Container>
                <div className='text-center fs-4  text-maroon '>
                    The Wedding of
                </div>
                <div className='text-center fs-1 text-maroon'>
                    Izzatul & Anas
                </div>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <AiOutlineCalendar />
                    </Col>
                    <Col className="p-0">
                        Sunday, 26th April 2025
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <AiOutlineEnvironment />
                    </Col>
                    <Col className="p-0">
                        Sunday, 26th April 2025
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <AiOutlineClockCircle />
                    </Col>
                    <Col className="p-0">
                        Sunday, 26th April 2025
                    </Col>
                </Row>
            </Container>
        </Card >
    );
}

export default TitleComponent;