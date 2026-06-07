import { DateSection } from "@/app/sections/date-section";
import { ContactSection } from "@/app/sections/contact-section";
import { GreetingSection } from "@/app/sections/greeting-section";
import { MessageSection } from "@/app/sections/message-section";
import { RsvpSection } from "@/app/sections/rsvp-section";
import { TentativeSection } from "@/app/sections/tentative-section";
import { TitleSection } from "@/app/sections/title-section";
import { VenueSection } from "@/app/sections/venue-section";
import { OpeningOverlay } from "@/components/opening-overlay";

export default function Home() {
  return (
    <OpeningOverlay>
      <main className="relative min-h-screen overflow-hidden bg-background px-4 py-6 sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.86),transparent_72%)]" />
        <div className="ambient-blush pointer-events-none absolute left-1/2 top-12 h-72 w-72 -translate-x-[135%] rounded-full bg-[radial-gradient(circle,rgba(226,188,184,0.34),transparent_70%)] blur-3xl" />
        <div className="ambient-mist pointer-events-none absolute right-1/2 top-80 h-80 w-80 translate-x-[145%] rounded-full bg-[radial-gradient(circle,rgba(214,202,189,0.28),transparent_72%)] blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-[440px] flex-col overflow-hidden rounded-[2rem] border border-white/55 bg-white/88 text-center shadow-[0_24px_80px_rgba(113,84,73,0.12)] backdrop-blur-sm sm:rounded-[2.5rem]">
          <div className="pointer-events-none absolute inset-x-5 top-5 h-px bg-[linear-gradient(90deg,transparent,rgba(125,94,84,0.28),transparent)]" />
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
    </OpeningOverlay>
  );
}
