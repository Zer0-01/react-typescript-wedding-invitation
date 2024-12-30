import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useState, useEffect } from 'react';
import OurStory from './components/OurStory';
import CardCouple from './components/CardCouple';
import Countdown from './components/Countdown';
import Place from './components/Place';

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
  const targetDate = new Date('2025-04-26T00:00:00');

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
    name: "The Vow Event Venue",
    address: "Lot 1751, Jln Salleh, Kampung Parit Setongkat, 84000 Muar, Johor Darul Ta'zim",
  };

  // Function to open Google Maps at the specified location
  const openMap = () => {
    const mapUrl = `https://maps.app.goo.gl/QtFQXGNhuCV1UPRY6`;
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
        <Countdown days={timeRemaining.days} hours={timeRemaining.hours} minutes={timeRemaining.minutes} seconds={timeRemaining.seconds} />
        <Place akadNikahTitle={place.name} akadNikahAddress={place.address} akadNikahTime="1700 - 1800" akadNikahOnClick={openMap} resepsiTitle={place.name} resepsiAddress={place.address} resepsiTime="1800 - 2100" resepsiOnClick={openMap} />
        {/* <Row>
          <Col xs={12} md={6}>
            <Card style={{ height: "40vh" }}>
              <Card.Img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/584084015.jpg?k=83c62c9050a3d40c26329ef6bc6741be931b98ada4736eca37bb451a7299f33c&o=&hp=1"
                style={{ height: "100%", objectFit: "cover" }}
              />
              <Card.ImgOverlay className="d-flex justify-content-center align-items-center text-center">
                <Row>
                  <Col>
                    <div className='fs-1 fw-bold text-light'>Resepsi</div>
                    <div className='fs-2 text-light'>1800 - 2100</div>
                    <div className='fs-3 text-light'>{place.name}</div>
                    <div className='fs-4 text-light'>{place.address}</div>
                    <Button onClick={openMap}>Open Map</Button>
                  </Col>
                </Row>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card style={{ height: "40vh" }}>
              <Card.Img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/584083788.jpg?k=f485db98e1e6dd35c431b4677481ce2e439e4fb30a02502e0b2315f7bb36e429&o=&hp=1"
                style={{ height: "100%", objectFit: "cover" }}
              />
              <Card.ImgOverlay className="d-flex justify-content-center align-items-center text-center">
                <Row>
                  <Col>
                    <div className='fs-1 fw-bold text-light'>Resepsi</div>
                    <div className='fs-2 text-light'>1800 - 2100</div>
                    <div className='fs-3 text-light'>{place.name}</div>
                    <div className='fs-4 text-light'>{place.address}</div>
                    <Button onClick={openMap}>Open Map</Button>
                  </Col>
                </Row>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row> */}

        {/* <Row className="d-flex justify-content-center">
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
        </Row> */}
        <Row>
          <Col>
            <hr style={{ borderTop: '2px solid #ccc', margin: '30px 0' }} />
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col style={{ fontSize: '39px' }}>Our Story</Col>
        </Row>
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
