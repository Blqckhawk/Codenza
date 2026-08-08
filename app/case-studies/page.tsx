import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionHeading } from "../components/section-heading";

export const metadata = {
  title: "Case Studies | Codenza",
  description: "Real case studies from Codenza client work — coming soon.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Case studies"
            title="Coming soon, one real project at a time"
            description="We'd rather show you nothing than show you something that isn't real. Our first case studies will be published here as projects complete."
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}