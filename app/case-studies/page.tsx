import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionHeading } from "../components/section-heading";

const studies = [
  {
    title: "ClientHub scaling with AI",
    summary: "A modern operations workspace that unified client communication, workflows, and analytics.",
  },
  {
    title: "Oakmont Homes growth platform",
    summary: "A polished real estate experience that improved lead capture and property discovery.",
  },
  {
    title: "Invoice automation rollout",
    summary: "An intelligent billing platform that reduced manual effort and accelerated payment cycles.",
  },
];

export const metadata = {
  title: "Case Studies | Codenza",
  description: "See how Codenza delivers measurable outcomes for clients through tailored software solutions.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Case studies"
            title="Results that strengthen operations and growth"
            description="We turn complex requirements into service platforms, internal tools, and digital products that users actually adopt."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {studies.map((study) => (
              <div key={study.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-xl font-semibold">{study.title}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">{study.summary}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
