import { Col, Container, Row } from "react-bootstrap"
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { colorPrimary } from "../../constants/ColorsConstant";
import { AiOutlineLinkedin } from "react-icons/ai";



const FooterSection = () => {
    return (
        <Container style={{
            background: "black"
        }}
            fluid
        >

            <Row className="pt-5 pb-2 justify-content-center" >
                <Col xs="auto">
                    <AiFillGithub
                        style={
                            {
                                color: colorPrimary[0]
                            }
                        }
                        className="fs-1"
                        onClick={() => {
                            window.open("https://github.com/Zer0-01")
                        }}

                    />

                </Col>
                <Col xs="auto">
                    <AiOutlineWhatsApp
                        style={
                            {
                                color: colorPrimary[0]
                            }
                        }
                        className="fs-1"
                        onClick={() => {
                            window.open("https://wa.me/601154066082")
                        }}
                    />

                </Col>
                <Col xs="auto">
                    <AiOutlineLinkedin
                        style={
                            {
                                color: colorPrimary[0]
                            }
                        }
                        className="fs-1"
                        onClick={() => {
                            window.open("https://www.linkedin.com/in/anas-zulkifli-mohd-jeffry/")
                        }}
                    />

                </Col>
            </Row>

            <div
                className="pb-2 fs-6 text-center"
                style={
                    {
                        color: colorPrimary[0]
                    }
                }
            >Copyright © Anas</div>
            <Row className="pb-5 justify-content-center">
                <Col xs="auto">
                    <FaReact
                        style={{
                            color: "#61DBFB"
                        }}
                        className="fs-2" />
                </Col>
                <Col xs="auto">
                    <SiTypescript
                        style={{
                            color: "#007acc",
                            backgroundColor: colorPrimary[0]
                        }}
                        className="fs-2" />
                </Col>
            </Row>

        </Container>
    )
}

export default FooterSection;