import { DateSection } from "@/app/sections/date-section";
import { ContactSection } from "@/app/sections/contact-section";
import { GreetingSection } from "@/app/sections/greeting-section";
import { RsvpSection } from "@/app/sections/rsvp-section";
import { TentativeSection } from "@/app/sections/tentative-section";
import { TitleSection } from "@/app/sections/title-section";
import { VenueSection } from "@/app/sections/venue-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto flex w-full max-w-[430px] flex-col items-center gap-14 text-center">
        <TitleSection />
        <GreetingSection />
        <DateSection />
        <TentativeSection />
        <VenueSection />
        <RsvpSection />
        <ContactSection />
      </div>
    </main>
  );
}
