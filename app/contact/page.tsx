import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { ContactForm } from "./contact-form";

const bookingUrl = "https://cal.com/codenza-wft8cz/30min";

export const metadata = {
  title: "Contact Codenza",
  description: "Book a consultation and discuss your next software project with Codenza.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
           <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Let's build something exceptional.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Share your goals and we'll help you shape the right product roadmap, engineering approach, and launch plan.
            </p>
            <div className="mt-8 rounded-3xl border border-border bg-surface p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Preferred contact</p>
              <p className="mt-3 text-xl font-semibold text-foreground">hello@codenza.com</p>
              <p className="mt-2 text-muted">Available for discovery calls worldwide.</p>
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
                Book a consultation
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}