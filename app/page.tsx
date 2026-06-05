import { GreetingSection } from "@/app/sections/greeting-section";
import { TitleSection } from "@/app/sections/title-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-4 py-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-[430px] flex-col justify-center">
        <div className="space-y-4 rounded-[2.5rem] bg-[linear-gradient(180deg,color-mix(in_oklch,var(--background),white_32%)_0%,var(--background)_38%,color-mix(in_oklch,var(--secondary),white_12%)_100%)] p-3">
          <TitleSection />
          <GreetingSection />
        </div>
      </div>
    </main>
  );
}
