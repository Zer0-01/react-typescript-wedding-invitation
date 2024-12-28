import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Spacer from './components/Spacer';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/esm/Image';

import { useState, useEffect } from 'react';
import OurStory from './components/OurStory';
import CardCouple from './components/CardCouple';

function getTimeRemaining(targetDate: Date) {
  const now = new Date();
  const timeDifference = targetDate.getTime() - now.getTime();

  if (timeDifference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function App() {
  // Target date (03/08/2025)
  const targetDate = new Date('2025-08-03T00:00:00');

  // State to hold the remaining time
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  const place = {
    name: "Eiffel Tower",
    address: "Champ de Mars, 5 Avenue Anatole, 75007 Paris, France",
    latitude: 48.8584,
    longitude: 2.2945
  };

  // Function to open Google Maps at the specified location
  const openMap = () => {
    const mapUrl = `https://maps.app.goo.gl/wp83ctnYxTV5NfDm6`;
    window.open(mapUrl, "_blank"); // Opens the map in a new tab
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col>
            <div className='text-center fs-1 fw-bold'>
              Ya Allah the Most Loving
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <div className='text-center fs-3'>
              With Your blessing, you brought us together in a holy marriage bond
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col >
            <div className='text-center fs-1 fw-bold'>
              THE WEDDING OF
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <div className="fs-1 text-center fw-bold ">
              Anas & Izzatul
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <div className="text-center fw-bold fs-1">
              03 08 2025
            </div> </Col>
        </Row>
        <CardCouple />
        <Spacer height={100} />
        <Row className="d-flex justify-content-center">
          <Col xs="auto">
            <Card>
              <Card.Body className="text-center">
                <Card.Title>Countdown to Wedding</Card.Title>

                <Row>
                  <Col xs={3}>
                    <Card.Body>
                      <h4>{timeRemaining.days}</h4>
                      <p>Days</p>
                    </Card.Body>
                  </Col>
                  <Col xs={3}>
                    <Card.Body>
                      <h4>{timeRemaining.hours}</h4>
                      <p>Hours</p>
                    </Card.Body>
                  </Col>
                  <Col xs={3}>
                    <Card.Body>
                      <h4>{timeRemaining.minutes}</h4>
                      <p>Minutes</p>
                    </Card.Body>
                  </Col>
                  <Col xs={3}>
                    <Card.Body>
                      <h4>{timeRemaining.seconds}</h4>
                      <p>Seconds</p>
                    </Card.Body>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Spacer height={100} />
        <Row className="d-flex justify-content-center">
          <Col xs="auto">
            <Card>
              <Card.Body className="text-center">
                <Card.Title>{place.name}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{place.address}</Card.Subtitle>
                <Button variant="primary" onClick={openMap}>View on Map</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto">
            <Card>
              <Card.Body className="text-center">
                <Card.Title>{place.name}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{place.address}</Card.Subtitle>
                <Button variant="primary" onClick={openMap}>View on Map</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr style={{ borderTop: '2px solid #ccc', margin: '30px 0' }} />
          </Col>
        </Row>
        <Spacer height={100} />
        <Row className="mt-4 text-center">
          <Col style={{ fontSize: '39px' }}>Our Story</Col>
        </Row>
        <Spacer height={100} />
        <OurStory />
        <Row>
          <Col>
            <hr style={{ borderTop: '2px solid #ccc', margin: '30px 0' }} />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs="auto">
            <div style={{ fontSize: '40 px' }}>Gallery</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
