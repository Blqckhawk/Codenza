import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionHeading } from "../components/section-heading";

const services = [
  { title: "Custom Software Development", description: "Tailored platforms that solve real operational and growth challenges." },
  { title: "SaaS Development", description: "Subscription products designed for reliability, growth, and retention." },
  { title: "AI Integrations", description: "Practical AI workflows that augment teams and improve decision-making." },
  { title: "Cloud Deployment", description: "Scalable infrastructure, automation, and observability from day one." },
];

export const metadata = {
  title: "Services | Codenza",
  description: "Explore the software services Codenza offers for startups, mid-market teams, and enterprise organizations.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Services"
            title="Engineering partnerships built for growth"
            description="From strategic consulting to launch and ongoing support, we help teams ship with confidence."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-lg leading-8 text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}