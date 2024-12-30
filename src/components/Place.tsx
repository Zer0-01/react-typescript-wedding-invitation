import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
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
        <Row>
            <Col xs={12} md={6}>
                <Card style={{ height: "40vh" }}>
                    <Card.Img
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/584084015.jpg?k=83c62c9050a3d40c26329ef6bc6741be931b98ada4736eca37bb451a7299f33c&o=&hp=1"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                    <Card.ImgOverlay className="d-flex justify-content-center align-items-center text-center" style={{
                        background: "rgba(0, 0, 0, 0.5)"
                    }}>
                        <Row>
                            <Col>
                                <div className='fs-1 fw-bold text-light'>Akad Nikah</div>
                                <div className='fs-2 text-light'>{akadNikahTime}</div>
                                <div className='fs-3 text-light'>{akadNikahTitle}</div>
                                <div className='fs-4 text-light'>{akadNikahAddress}</div>
                                <Button onClick={akadNikahOnClick}>Open Map</Button>
                            </Col>
                        </Row>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col xs={12} md={6}>
                <Card style={{ height: "40vh" }}>
                    <Card.Img
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/584083788.jpg?k=f485db98e1e6dd35c431b4677481ce2e439e4fb30a02502e0b2315f7bb36e429&o=&hp=1"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                    <Card.ImgOverlay className="d-flex justify-content-center align-items-center text-center" style={{
                        background: "rgba(0, 0, 0, 0.5)"
                    }}>
                        <Row>
                            <Col>
                                <div className='fs-1 fw-bold text-light'>Resepsi</div>
                                <div className='fs-2 text-light'>{resepsiTime}</div>
                                <div className='fs-3 text-light'>{resepsiTitle}</div>
                                <div className='fs-4 text-light'>{resepsiAddress}</div>
                                <Button onClick={resepsiOnClick}>Open Map</Button>
                            </Col>
                        </Row>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </Row>
    );
};

export default Place;