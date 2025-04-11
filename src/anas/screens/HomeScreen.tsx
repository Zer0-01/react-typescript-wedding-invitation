
import TitleSection from '../sections/TitleSection';
import CardCoupleSection from '../sections/CardCoupleSection';
import CountdownSection from '../sections/CountdownSection';
import PlaceSection from '../sections/PlaceSection';
import RsvpFormSection from '../sections/RsvpFormSection';
import MessageSection from '../sections/MessageSection';
import GiftSection from '../sections/GiftSection';
import { ToastContainer } from 'react-toastify';
import FooterSection from '../sections/FooterSection';
import { useEffect, useState } from 'react';
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import song from '../../assets/song.mp3';



function HomeScreen() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio] = useState(new Audio(`${song}`));

  useEffect(() => {
    audio.loop = true;
    audio.play().then(() => setIsPlaying(true)).catch(() => console.log("Autoplay blocked"));
    return () => {
      audio.pause();
    };
  }, [audio])

  const toggleSound = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  }

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
      <div
        className='position-fixed bottom-0 end-0 m-2 p-2 rounded-circle shadow '
        style={{ backgroundColor: "white" }}
        onClick={toggleSound}
      >
        {isPlaying ? (<HiSpeakerWave />) : (<HiSpeakerXMark />)}
      </div>


    </>
  );
}

export default HomeScreen;
