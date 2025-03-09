
import { motion } from 'framer-motion';
import TitleSection from '../sections/TitleSection';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import CardCoupleSection from '../sections/CardCoupleSection';
import CountdownSection from '../sections/CountdownSection';
import PlaceSection from '../sections/PlaceSection';
import RsvpFormSection from '../sections/rsvpForm/RsvpFormSection';
import MessageSection from '../sections/MessageSection';
import GiftSection from '../sections/GiftSection';
import { ToastContainer } from 'react-toastify';
import FooterSection from '../sections/FooterSection';

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
              <TitleSection />
              <CardCoupleSection />
              <CountdownSection />
              <PlaceSection />
              <RsvpFormSection />
              <MessageSection />
              <GiftSection />
              <FooterSection />
            </Col>
            <Col sm={0} md={2} lg={3} xl={4} className=' d-none d-sm-block bg-light-subtle' />
          </Row>

        </Container>
      </motion.div>
      <ToastContainer />


    </>
  );
}

export default HomeScreen;
