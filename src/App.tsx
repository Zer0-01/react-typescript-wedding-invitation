import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useState, useEffect } from 'react';
import OurStory from './components/OurStory';
import CardCouple from './components/CardCouple';
import Countdown from './components/Countdown';
import Place from './components/Place';
import GiftComponent from './components/GiftComponent';
import FormRsvp from './components/FormRsvp';
import app from './FIrebaseConfig';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

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
  const targetDate = new Date('2025-04-26T00:00:00');
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));
  const db = getFirestore(app);


  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const place = {
    name: "The Vow Event Venue",
    address: "Lot 1751, Jln Salleh, Kampung Parit Setongkat, 84000 Muar, Johor Darul Ta'zim",
  };

  const openMap = () => {
    const mapUrl = `https://maps.app.goo.gl/QtFQXGNhuCV1UPRY6`;
    window.open(mapUrl, "_blank"); // Opens the map in a new tab
  };

  return (
    <>
      <Container>
        <Row className="pt-5 mb-3">
          <Col>
            <div className='text-center fs-3 fw-bold'>
              Ya Allah the Most Loving
            </div>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <div className='text-center fs-3'>
              With Your blessing, you brought us together in a holy marriage bond
            </div>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col >
            <div className='text-center fs-4 fw-bold'>
              THE WEDDING OF
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="fs-1 text-center fw-bold mb-5 ">
              Anas & Izzatul
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <div className="text-center fw-bold fs-3 mb-5">
              03 08 2025
            </div> </Col>
        </Row>
        <CardCouple />
        <Countdown days={timeRemaining.days} hours={timeRemaining.hours} minutes={timeRemaining.minutes} seconds={timeRemaining.seconds} />
        <Place akadNikahTitle={place.name} akadNikahAddress={place.address} akadNikahTime="1700 - 1800" akadNikahOnClick={openMap} resepsiTitle={place.name} resepsiAddress={place.address} resepsiTime="1800 - 2100" resepsiOnClick={openMap} />
        <OurStory />
        <Row>
          <Col className='text-center'>
            <div className='fs-1 fw-bold'>Give a gift</div>
            <div className='fs-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis velit iusto, nulla esse, tempore, voluptates repellat cupiditate possimus voluptatem vel deserunt iure enim eaque excepturi? Laboriosam eius neque mollitia.</div>
          </Col>
        </Row>
        <GiftComponent />
        <FormRsvp />
      </Container>
    </>
  );
}

export default App;
