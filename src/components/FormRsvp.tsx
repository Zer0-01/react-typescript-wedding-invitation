import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";

const FormRsvp = () => {
    return (
        <Row>
            <Col>
                <Card className='p-3'>
                    <Row>
                        <Col className='text-center'>
                            <div className='fs-3'>Say something!</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group className='mb-3' controlId='formName'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type='text' />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group className='mb-3' controlId='formMessage'>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={6} />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>Attendance</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Check
                                    label="Attend"
                                    name="group1"
                                    type='radio'
                                />
                                <Form.Check
                                    label="Not Attend"
                                    name="group1"
                                    type='radio'
                                />
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-center' >
                            <Button variant='primary'>Submit</Button>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
};

export default FormRsvp;

