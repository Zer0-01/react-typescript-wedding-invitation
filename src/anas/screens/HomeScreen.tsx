
import TitleSection from '../sections/TitleSection';
import CardCoupleSection from '../sections/CardCoupleSection';
import CountdownSection from '../sections/CountdownSection';
import PlaceSection from '../sections/PlaceSection';
import RsvpFormSection from '../sections/RsvpFormSection';
import MessageSection from '../sections/MessageSection';
import GiftSection from '../sections/GiftSection';
import { ToastContainer } from 'react-toastify';
import FooterSection from '../sections/FooterSection';

function HomeScreen() {
  return (
    <>
      <TitleSection />
      <CardCoupleSection />
      <CountdownSection />
      <PlaceSection />
      <RsvpFormSection />
      <MessageSection />
      <GiftSection />
      <FooterSection />
      <ToastContainer />
    </>
  );
}

export default HomeScreen;
