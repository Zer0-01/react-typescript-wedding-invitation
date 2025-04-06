import { ToastContainer } from "react-toastify";
import CardCoupleAtulSection from "../sections/CardCoupleAtulSection";
import CountdownAtulSection from "../sections/CountdownAtulSection";
import GiftAtulSection from "../sections/GiftAtulSection";
import MessageAtulSection from "../sections/MessageAtulSection";
import RsvpAtulSection from "../sections/RsvpAtulSection";
import { useEffect, useState } from "react";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import FooterAtulSection from "../sections/FooterAtulSection";
import atulSong from "../../assets/zatul/zatul-song.mp3";

const HomeScreenAtul = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [audio] = useState(new Audio(atulSong));

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
            <CardCoupleAtulSection />
            <CountdownAtulSection />
            {/* <PlaceAtulSection /> */}
            <RsvpAtulSection />
            <MessageAtulSection />
            <GiftAtulSection />
            <FooterAtulSection />
            <ToastContainer />
            <div
                className='position-fixed bottom-0 end-0 m-2 p-2 rounded-circle shadow '
                style={{ backgroundColor: "white" }}
                onClick={toggleSound}
            >
                {isPlaying ? (<HiSpeakerWave />) : (<HiSpeakerXMark />)}
            </div>

        </>
    )
}

export default HomeScreenAtul;