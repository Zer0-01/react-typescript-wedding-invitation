import { ToastContainer } from "react-toastify";
import CardCoupleAtulSection from "../sections/CardCoupleAtulSection";
import CountdownAtulSection from "../sections/CountdownAtulSection";
import GiftAtulSection from "../sections/GiftAtulSection";
import MessageAtulSection from "../sections/MessageAtulSection";
import PlaceAtulSection from "../sections/PlaceAtulSection";
import RsvpAtulSection from "../sections/RsvpAtulSection";

const HomeScreenAtul = () => {
    return (
        <>
            <CardCoupleAtulSection />
            <CountdownAtulSection />
            <PlaceAtulSection />
            <RsvpAtulSection />
            <MessageAtulSection />
            <GiftAtulSection />
            <ToastContainer />

        </>
    )
}

export default HomeScreenAtul;