import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";

const OurStory = () => {
    return (
        <Row>
            <Col xs={12} md={6}>
                <Row>
                    <Col className="text-center">
                        <Image src="https://via.placeholder.com/200" rounded fluid />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Row>
                                <Col>
                                    <div>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
                                        sapiente. Tenetur fugit tempore ea sed ratione, voluptate
                                        similique deserunt aliquam placeat at repudiandae dolorum ex
                                        aspernatur corporis. Cupiditate, atque laboriosam.
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} md={6}>
                <Row>
                    <Col>
                        <Card>
                            <Row>
                                <Col>
                                    <div>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
                                        sapiente. Tenetur fugit tempore ea sed ratione, voluptate
                                        similique deserunt aliquam placeat at repudiandae dolorum ex
                                        aspernatur corporis. Cupiditate, atque laboriosam.
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Image src="https://via.placeholder.com/200" rounded fluid />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default OurStory;