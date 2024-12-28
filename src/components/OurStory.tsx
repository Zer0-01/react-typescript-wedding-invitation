import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";

const OurStory = () => {
    return (
        <Row>
            <Col xs={12} md={6}>
                <Row className="justify-content-center mb-4">
                    <Col xs="auto">
                        <Image src="https://via.placeholder.com/200" />
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col>
                        <Card className='p-4'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae officiis velit obcaecati possimus eaque ipsam voluptatibus fuga consequuntur animi repudiandae quaerat doloremque id odit, veniam maxime eligendi expedita aspernatur perspiciatis.
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} md={6}>
                <Row className='justify-content-center mb-4'>
                    <Col>
                        <Card className='p-4'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae officiis velit obcaecati possimus eaque ipsam voluptatibus fuga consequuntur animi repudiandae quaerat doloremque id odit, veniam maxime eligendi expedita aspernatur perspiciatis.
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <Image src="https://via.placeholder.com/200" />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default OurStory;