import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionHeading } from "../components/section-heading";

const projects = [
  {
    name: "Codenza ClientHub",
    description: "An AI-powered platform for client management, project tracking, and collaboration.",
  },
  {
    name: "Oakmont Homes",
    description: "A premium real estate experience with property discovery and lead management.",
  },
  {
    name: "Codenza Invoice",
    description: "An intelligent billing platform with smart automation and secure payments.",
  },
];

export const metadata = {
  title: "Portfolio | Codenza",
  description: "Explore flagship software products built by Codenza for modern businesses.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Portfolio"
            title="Premium digital products, thoughtfully engineered"
            description="Each engagement blends strategy, product thinking, and modern engineering to deliver strong business outcomes."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
                <div className="h-40 bg-gradient-to-br from-blue-600 via-slate-900 to-emerald-500" />
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
