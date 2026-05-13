import { HeroSection } from "@/components/public/sections/HeroSection";
import { ProblemSection } from "@/components/public/sections/ProblemSection";
import { PromiseSection } from "@/components/public/sections/PromiseSection";
import { MethodFlowSection } from "@/components/public/sections/MethodFlowSection";
import { TargetSection } from "@/components/public/sections/TargetSection";
import { UseCasesSection } from "@/components/public/sections/UseCasesSection";
import { PathsPreviewSection } from "@/components/public/sections/PathsPreviewSection";
import { FrameworkOriginSection } from "@/components/public/sections/FrameworkOriginSection";
import { OpenSourceSection } from "@/components/public/sections/OpenSourceSection";
import { FinalCtaSection } from "@/components/public/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <main className="public-page">
      <HeroSection />
      <ProblemSection />
      <PromiseSection />
      <MethodFlowSection />
      <TargetSection />
      <UseCasesSection />
      <PathsPreviewSection />
      <FrameworkOriginSection />
      <OpenSourceSection />
      <FinalCtaSection />
    </main>
  );
}
