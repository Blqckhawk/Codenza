import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionHeading } from "../components/section-heading";

const values = [
  "Security first in every release",
  "Modern engineering with measurable outcomes",
  "Transparent collaboration and reliable delivery",
];

export const metadata = {
  title: "About Codenza | Premium Software Engineering",
  description: "Learn how Codenza helps ambitious companies build intelligent, secure, and scalable software.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="About"
            title="Building software that outlasts trends"
            description="Codenza is a product engineering partner for founders and teams who need modern, reliable software that scales with the business."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">Mission</h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We empower businesses with innovative, secure, scalable, and intelligent software solutions that solve real-world challenges and create lasting digital value.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-600 to-emerald-500 p-8 text-white shadow-lg">
              <h3 className="text-2xl font-semibold">Vision</h3>
              <p className="mt-4 text-lg leading-8 text-blue-50">
                To become a globally recognized technology company trusted for creating exceptional digital products that transform businesses and communities.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-8">
              <h3 className="text-xl font-semibold">Values</h3>
              <ul className="mt-6 space-y-3 text-slate-600">
                {values.map((value) => (
                  <li key={value} className="flex gap-3"><span className="text-blue-600">•</span>{value}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 p-8 lg:col-span-2">
              <h3 className="text-xl font-semibold">Engineering Philosophy</h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Every line of code should solve a real problem, improve someone’s work, and stand the test of time. That means thoughtful architecture, rigorous testing, and software that feels effortless to use.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
