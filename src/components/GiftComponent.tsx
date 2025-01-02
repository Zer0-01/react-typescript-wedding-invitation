import Button from "react-bootstrap/esm/Button"
import Card from "react-bootstrap/esm/Card"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import { Clipboard } from "react-bootstrap-icons";
import Image from "react-bootstrap/esm/Image"

const GiftComponent = () => {
    const copyToClipboard = (textToCopy: string) => {
        navigator.clipboard.writeText(textToCopy).then(
            () => {
                alert('Copied to clipboard!');
            },
            () => {
                alert('Failed to copy to clipboard. Please copy manually.');
            }
        );
    };

    return (
        <Row>
            <Col>
                <Card className='p-3'>
                    <Row className="align-items-center">
                        <Col xs={12} md={4}>
                            <div className='fs-4'>Anas Zulkifli</div>
                        </Col>
                        <Col xs={12} md={8}>
                            <Image src="src/assets/cimb.png" className="w-25" />
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
                    <Row className="align-items-center">
                        <Col xs={12} md={4}>
                            <div className='fs-4'>Nur Izzatul Khairiah</div>
                        </Col>
                        <Col xs={12} md={8}>
                            <Image src="src/assets/maybank.png" className="w-25" />
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
    );

};

export default GiftComponent;