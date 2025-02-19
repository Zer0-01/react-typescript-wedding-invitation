
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TitleComponent from '../components/big/TitleComponent';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import CardCouple from '../components/CardCouple';
import Countdown from '../components/Countdown';

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



function HomeScreen() {
  const targetDate = new Date('2025-05-18T00:00:00');
  const [, setTimeRemaining] = useState(getTimeRemaining(targetDate));


  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);




  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <Container
          className='p-0'
          fluid >
          <Row className='g-0'>
            <Col sm={0} md={2} lg={3} xl={4} className='d-none d-sm-block bg-light-subtle' />
            <Col sm={12} md={8} lg={6} xl={4} className='bg-light-subtle'>
              <TitleComponent />
              <CardCouple />
              <Countdown />

              {/* <RsvpForm /> */}
            </Col>
            <Col sm={0} md={2} lg={3} xl={4} className=' d-none d-sm-block bg-light-subtle' />
          </Row>

        </Container>
      </motion.div>

    </>
  );
}

export default HomeScreen;
