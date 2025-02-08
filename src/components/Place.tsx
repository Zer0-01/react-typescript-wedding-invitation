import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

interface PlaceProps {
    akadNikahTitle: string;
    akadNikahTime: string;
    akadNikahAddress: string;
    akadNikahOnClick: () => void;
    resepsiTitle: string;
    resepsiTime: string;
    resepsiAddress: string;
    resepsiOnClick: () => void;

}

const Place = ({ akadNikahTitle, akadNikahTime, akadNikahAddress, akadNikahOnClick, resepsiTitle, resepsiTime, resepsiAddress, resepsiOnClick }: PlaceProps) => {
    return (
        <Container fluid className="bg-maroon p-5 mb-5">
            <Row>
                <Col xs={12} md={12} className="my-3">
                    <Card style={{ height: "50vh" }}>
                        <Card.Img
                            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/584083788.jpg?k=f485db98e1e6dd35c431b4677481ce2e439e4fb30a02502e0b2315f7bb36e429&o=&hp=1"
                            className="h-100"
                        />
                        <Card.ImgOverlay className="d-flex justify-content-center align-items-center text-center" style={{
                            background: "rgba(0, 0, 0, 0.7)"
                        }}>
                            <Row>
                                <Col>
                                    <div className='fs-1 fw-bold text-light mb-2'>Resepsi</div>
                                    <div className='fs-2 text-light mb-2'>{resepsiTime}</div>
                                    <div className='fs-3 text-light mb-2'>{resepsiTitle}</div>
                                    <div className='fs-4 text-light mb-2'>{resepsiAddress}</div>
                                    <Button onClick={resepsiOnClick}>Open Map</Button>
                                </Col>
                            </Row>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export default Place;