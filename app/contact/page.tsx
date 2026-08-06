import Link from "next/link";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

const bookingUrl = "https://cal.com/yourname/consultation";

export const metadata = {
  title: "Contact Codenza",
  description: "Book a consultation and discuss your next software project with Codenza.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Let’s build something exceptional.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Share your goals and we’ll help you shape the right product roadmap, engineering approach, and launch plan.
            </p>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Preferred contact</p>
              <p className="mt-3 text-xl font-semibold text-slate-900">hello@codenza.com</p>
              <p className="mt-2 text-slate-600">Available for discovery calls worldwide.</p>
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
                Book a consultation
              </a>
            </div>
          </div>
          <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Name
                <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Alex Morgan" />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Email
                <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="alex@company.com" />
              </label>
            </div>
            <label className="mt-6 block text-sm font-medium text-slate-700">
              Project Type
              <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="SaaS platform, automation, CRM..." />
            </label>
            <label className="mt-6 block text-sm font-medium text-slate-700">
              Message
              <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Tell us about your goals, timeline, and priorities." />
            </label>
            <button className="mt-8 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-900">
              Send inquiry
            </button>
            <p className="mt-4 text-sm text-slate-500">
              By submitting this form you agree to our <Link href="/privacy" className="text-blue-600">privacy policy</Link>.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
