import { AgentExplanationSection } from "@/components/AgentExplanationSection";
import { AudienceSection } from "@/components/AudienceSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CTASection } from "@/components/CTASection";
import { DataTrustSection } from "@/components/DataTrustSection";
import { ExampleWorkflowSection } from "@/components/ExampleWorkflowSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ImplementationSection } from "@/components/ImplementationSection";
import { InlineCTA } from "@/components/InlineCTA";
import { ProblemSection } from "@/components/ProblemSection";
import { QualificationForm } from "@/components/QualificationForm";
import { SolutionSection } from "@/components/SolutionSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <AgentExplanationSection />
      <SolutionSection />
      <ExampleWorkflowSection />
      <InlineCTA
        title="Sie haben regelmäßig Fremd-LVs?"
        text="Dann prüfen wir, ob der KI-Kalkulant zu Ihrem Volumen, Ihrer Datenlage und Ihrem Prozess passt."
        tone="dark"
      />
      <BenefitsSection />
      <DataTrustSection />
      <ImplementationSection />
      <AudienceSection />
      <CTASection />
      <QualificationForm />
      <Footer />
    </main>
  );
}
