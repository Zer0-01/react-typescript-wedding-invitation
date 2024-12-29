import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

interface CountdownProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Countdown = ({ days, hours, minutes, seconds }: CountdownProps) => {
    return (
        <Row>
            <Col className='text-center '>
                <div className='fs-1' >We are getting married</div>
                <div className="fs-3 fw-bold">Assalammualaikum Warahmatullah Wabarakatuh</div>
                <div className='fs-1'>By asking for the grace and blessing of Allah SWT. We intend to hold a wedding celebration for our sons and daughters, which Allah SWT willing will be held on:</div>
                <div className='fs-1'>18 May 2025</div>
                <Row className='px-5' >
                    <Col>
                        <Card>
                            <div className='fs-1 fw-bold'>{days}</div>
                            <div className='fs-1 fw-bold'>D</div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className='fs-1 fw-bold'>{hours}</div>
                            <div className='fs-1 fw-bold'>H</div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className='fs-1 fw-bold'>{minutes}</div>
                            <div className='fs-1 fw-bold'>M</div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className='fs-1 fw-bold'>{seconds}</div>
                            <div className='fs-1 fw-bold'>S</div>
                        </Card>
                    </Col>
                </Row>

            </Col>
        </Row>
    );
}

export default Countdown;