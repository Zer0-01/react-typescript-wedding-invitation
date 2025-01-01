import Button from "react-bootstrap/esm/Button"
import Card from "react-bootstrap/esm/Card"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import { Clipboard } from "react-bootstrap-icons";

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
                    <Row>
                        <Col>
                            <div className='fs-4'>Anas Zulkifli bin Mohd Jeffry</div>
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
                    <Row>
                        <Col>
                            <div className='fs-4'>Nur Izzatul Khairiah binti Mubin</div>
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