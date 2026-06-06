import { DateSection } from "@/app/sections/date-section";
import { ContactSection } from "@/app/sections/contact-section";
import { GreetingSection } from "@/app/sections/greeting-section";
import { MessageSection } from "@/app/sections/message-section";
import { RsvpSection } from "@/app/sections/rsvp-section";
import { TentativeSection } from "@/app/sections/tentative-section";
import { TitleSection } from "@/app/sections/title-section";
import { VenueSection } from "@/app/sections/venue-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex w-full max-w-[430px] flex-col items-center gap-0 text-center sm:shadow-[-18px_0_28px_rgba(0,0,0,0.08),18px_0_28px_rgba(0,0,0,0.08)]">
        <TitleSection />
        <GreetingSection />
        <DateSection />
        <TentativeSection />
        <VenueSection />
        <RsvpSection />
        <MessageSection />
        <ContactSection />
      </div>
    </main>
  );
}
