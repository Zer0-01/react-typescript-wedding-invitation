import { Col, Container, Row, Image } from "react-bootstrap";
import { colorBackground } from "../../constants/ColorsConstant";


const TitleSection = () => {
    return (
        <Container
            className="vh-100 p-0"
            style={{ backgroundColor: colorBackground }}
            fluid>
            <Row className="g-0 h-100">
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
                <Col sm={12} md={8} lg={6} xl={4} >
                    <Image
                        src="../src/assets/cover.jpg"
                        className="h-100 object-fit-contain"
                        fluid
                    />
                </Col>
                <Col sm={0} md={2} lg={3} xl={4} className="d-none d-md-block" />
            </Row>
        </Container>
    );
}

export default TitleSection;