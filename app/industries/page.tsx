import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionHeading } from "../components/section-heading";

const industries = [
  "Real Estate",
  "Healthcare",
  "Education",
  "Churches & NGOs",
  "Logistics",
  "Professional Services",
];

export const metadata = {
  title: "Industries | Codenza",
  description: "See how Codenza builds tailored digital products for regulated and fast-moving industries.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Industries"
            title="Solutions tailored to the realities of your sector"
            description="We design systems that are secure, intuitive, and ready for scale no matter the industry."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
