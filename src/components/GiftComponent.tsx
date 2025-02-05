import Button from "react-bootstrap/esm/Button"
import Card from "react-bootstrap/esm/Card"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import { Clipboard } from "react-bootstrap-icons";
import { Container, Image } from "react-bootstrap";
import bankQrAnas from "../assets/bank-qr-anas.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../styles/GiftStyle.css"

const GiftComponent = () => {
    const copyToClipboard = (textToCopy: string) => {
        navigator.clipboard.writeText(textToCopy).then(
            () => {
                toast.success('Copied to clipboard!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                });
               // alert('Copied to clipboard!');
            },
            () => {
                alert('Failed to copy to clipboard. Please copy manually.');
            }
        );
    };

    return (
        <Container className="mb-5 gift-text">
            <ToastContainer />
            <Row className="mb-5">
                <Col className='text-center'>
                    <div className='fs-1 fw-bold'>Give a gift</div>
                    <div className='fs-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis velit iusto, nulla esse, tempore, voluptates repellat cupiditate possimus voluptatem vel deserunt iure enim eaque excepturi? Laboriosam eius neque mollitia.</div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6} className="my-3">
                    <Card className="p-3">
                        <Row className="align-items-center">
                            <Col>
                                <div className='fs-4'>Anas Zulkifli</div>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                            <Image src={bankQrAnas} className='img-fluid' />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className='p-2'>
                                    <Row className='justify-content-between align-items-center'>
                                        <Col>
                                            <div className='fs-5'>1234345346456</div>
                                        </Col>
                                        <Col className='text-end'>
                                            <Button variant='outline-primary' className='border-0' onClick={() => copyToClipboard('1234345346456')}>
                                                <Clipboard />
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>

                    </Card>

                </Col>

                <Col xs={12} md={6} className="my-3">
                    <Card className="p-3">
                        <Row className="align-items-center">
                            <Col >
                                <div className='fs-4'>Nur Izzatul Khairiah</div>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Card className='p-2'>
                                    <Row className='justify-content-between align-items-center'>
                                        <Col>
                                            <div className='fs-5'>1234345346456</div>
                                        </Col>
                                        <Col className='text-end'>
                                            <Button variant='outline-primary' className='border-0' onClick={() => copyToClipboard('1234345346456')}>
                                                <Clipboard />
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>

    );

};

export default GiftComponent;