import { Col, Container, Row } from "react-bootstrap"
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const FooterSection = () => {
    return (
        <Container style={{
            background: "#FFFAEC"
        }}  >

            <Row className="pt-5 pb-2 justify-content-center" >
                <Col xs="auto">
                    <AiFillGithub
                        className="fs-1"
                        onClick={() => {
                            window.open("https://github.com/Zer0-01")
                        }}

                    />

                </Col>
                <Col xs="auto">
                    <AiOutlineWhatsApp 
                    className="fs-1" 
                    onClick={() => {
                        window.open("https://wa.me/601154066082")
                    }}
                    />

                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="fs-2 text-center">Copyright by Anas</div>
                </Col>
            </Row>
            <Row className="pb-5 justify-content-center">
                <Col xs="auto">
                    <FaReact className="fs-2" />
                </Col>
                <Col xs="auto">
                    <SiTypescript className="fs-2" />
                </Col>
            </Row>

        </Container>
    )
}

export default FooterSection;