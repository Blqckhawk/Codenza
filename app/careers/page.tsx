import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionHeading } from "../components/section-heading";

const roles = [
  "Senior Frontend Engineer",
  "Product Designer",
  "Solutions Architect",
];

export const metadata = {
  title: "Careers | Codenza",
  description: "Join Codenza and help build elegant, high-impact software for ambitious companies.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Careers"
            title="Build with a team that values excellence"
            description="We are looking for thoughtful engineers and designers who care about making technology feel effortless."
          />
          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Open roles</h3>
            <ul className="mt-6 space-y-3 text-lg text-slate-600">
              {roles.map((role) => (
                <li key={role} className="flex gap-3"><span className="text-blue-600">•</span>{role}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
