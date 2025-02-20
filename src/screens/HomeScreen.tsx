
import { motion } from 'framer-motion';
import TitleComponent from '../components/TitleComponent';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import CardCoupleComponent from '../components/CardCoupleComponent';
import CountdownComponent from '../components/CountdownComponent';
import PlaceComponent from '../components/PlaceComponent';
import RsvpForm from '../components/RsvpForm';

function HomeScreen() {
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
              <CardCoupleComponent />
              <CountdownComponent />
              <PlaceComponent />
              <RsvpForm />
            </Col>
            <Col sm={0} md={2} lg={3} xl={4} className=' d-none d-sm-block bg-light-subtle' />
          </Row>

        </Container>
      </motion.div>

    </>
  );
}

export default HomeScreen;
