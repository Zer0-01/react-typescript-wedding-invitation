import { DateSection } from "@/app/sections/date-section";
import { GreetingSection } from "@/app/sections/greeting-section";
import { TitleSection } from "@/app/sections/title-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto flex w-full max-w-[430px] flex-col items-center gap-14 text-center">
        <TitleSection />
        <GreetingSection />
        <DateSection />
      </div>
    </main>
  );
}
