import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionHeading } from "../components/section-heading";

const projects = [
  {
    name: "Codenza Sites",
    description: "Professional website packages for churches, schools, clinics, law firms, and real estate agencies.",
    image: "/images/codenza_sites_illustration.png",
  },
  {
    name: "Codenza Booking",
    description: "Appointment and client management for service-based businesses — currently in development.",
    image: "/images/codenza_booking_illustration.png",
  },
  {
    name: "Codenza FieldOps",
    description: "Job and invoice management for artisans and technicians — currently in development.",
    image: "/images/codenza_fieldops_illustration.png",
  },
];

export const metadata = {
  title: "Portfolio | Codenza",
  description: "See what Codenza is currently building for real clients and industries.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Portfolio"
            title="What we're building right now"
            description="Codenza is a young studio — here's our current focus, built in the open rather than dressed up as finished case studies."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
           {projects.map((project) => (
              <div key={project.name} className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
                <div className="h-40 w-full overflow-hidden">
                  <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="mt-3 text-lg leading-8 text-slate-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}