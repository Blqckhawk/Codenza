"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { SectionHeading } from "./components/section-heading";
import { FAQ } from "./components/faq";
import { useRegion } from "./components/region-context";

const services = [
  "Custom software development",
  "AI integrations",
  "SaaS and product engineering",
  "Cloud deployment and automation",
];

const stats = [
  { value: "Founder-Led", label: "Direct access to your engineering team" },
  { value: "Full-Stack", label: "Design, build, and deploy under one roof" },
  { value: "Fast Turnaround", label: "Structured delivery, clear updates" },
];

export default function Home() {
   const { region } = useRegion();
  return (
   <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main>
        <section className="relative overflow-hidden">
         <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/world.jpeg')" }}
            />
            <div className="absolute inset-0 bg-background/85" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(16,185,129,0.16),_transparent_30%)]" />
          </div>
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
            <div className="relative z-10">
              <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4 }} className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Codenza</motion.p>
              <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.1 }} className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Building the future, one line of code at a time.
              </motion.h1>
              <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.2 }} className="mt-8 max-w-2xl text-xl leading-9 text-muted">
                We design and build secure, scalable, AI-powered software solutions that help businesses innovate, grow, and succeed.
              </motion.p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a href={region === "ng" ? "https://wa.me/2348072257930" : "https://cal.com/codenza-wft8cz/30min"}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-900"
                >
                  {region === "ng" ? "Chat on WhatsApp" : "Book free consultation"}
                </a>
                <Link href="/portfolio" className="rounded-full border border-border bg-surface px-6 py-3 text-center font-semibold text-foreground transition hover:border-primary hover:text-primary">
                  View our work
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium text-muted">
                {services.map((service) => (
                  <span key={service} className="rounded-full border border-border bg-surface px-4 py-2 shadow-sm">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity:0, x:24 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.55, delay:0.15 }} className="relative z-10 rounded-[2rem] border border-border bg-surface-2 shadow-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-background/10 p-8 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Trusted by ambitious teams</p>
                <div className="mt-8 grid gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-surface p-4">
                      <p className="text-xl font-semibold text-foreground">{stat.value}</p>
                      <p className="mt-1 text-sm text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Why Codenza"
            title="Premium engineering with a clear business outcome"
            description="We merge modern product design, secure architecture, and strategic delivery to help teams move fast without compromising quality."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Modern engineering", "Thoughtful architecture, clean code, and dependable delivery."],
              ["Security first", "Secure systems that reduce risk and protect your clients."],
              ["Built to scale", "Growth-ready platforms that evolve as your demand increases."],
            ].map(([title, description]) => (
              <div key={title} className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-sm">
                <div
                  className="absolute inset-0 opacity-[0.10] dark:opacity-[0.16]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #00B8A9 1.5px, transparent 1.5px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-4 text-lg leading-8 text-muted">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="What we're building"
            title="Our current focus, built in the open"
            description="Codenza is a young studio — here's what we're actively building right now, not a list of finished case studies."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
             { name: "Codenza Sites", description: "Professional website packages for churches, schools, clinics, law firms, and real estate agencies", image: "/images/codenza_sites_illustration.png" },
{ name: "Codenza Booking", description: "Appointment and client management for service businesses — in development", image: "/images/codenza_booking_illustration.png" },
{ name: "Codenza FieldOps", description: "Job and invoice management for artisans and technicians — in development", image: "/images/codenza_fieldops_illustration.png" },
           ].map((project) => (
              <div key={project.name} className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
                <div className="h-40 w-full overflow-hidden">
                  <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                  <p className="mt-3 text-lg leading-8 text-muted">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl border border-border bg-surface p-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Early days</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              We're onboarding our first clients now.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Be one of them — reach out and let's talk about what you're building.
            </p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-900">
              Get in touch
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Flexible options for every stage"
            description={region === "ng"
              ? "Packages built for Nigerian businesses — churches, schools, clinics, law firms, and real estate agencies."
              : "Choose the engagement model that fits your roadmap, timeline, and level of support."}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                ng: { name: "Starter Website", price: "₦150k–250k", description: "A professional 5-page site — ideal for small churches, solo practitioners, and small schools." },
                global: { name: "Discovery Sprint", price: "$5k", description: "Fast strategy, architecture, and execution plan." },
              },
              {
                ng: { name: "Professional Website", price: "₦350k–500k", description: "Everything in Starter plus booking forms, team profiles, and blog setup." },
                global: { name: "Product Build", price: "$15k+", description: "Design and development for initial launches or feature delivery." },
              },
              {
                ng: { name: "Premium / Custom Build", price: "₦600k+", description: "Custom design, listings systems, payments, and an editable admin dashboard." },
                global: { name: "Ongoing Partner", price: "Custom", description: "Dedicated engineering support for scaling teams." },
              },
            ].map((tier) => {
              const t = tier[region];
              return (
                <div key={t.name} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900">{t.name}</h3>
                  <p className="mt-4 text-3xl font-semibold text-blue-600">{t.price}</p>
                  <p className="mt-4 text-lg leading-8 text-slate-600">{t.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-16 text-white shadow-2xl shadow-slate-900/20 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Book a consultation</p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Let's shape the software experience your business deserves.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-400">
                  Tell us about your goals and we'll help you turn them into a thoughtful product strategy and launch plan.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
                <a
                  href={region === "ng" ? "https://wa.me/2348072257930" : "https://cal.com/codenza-wft8cz/30min"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-950"
                >
                  {region === "ng" ? "Chat on WhatsApp" : "Schedule a call"}
                </a>
                <p className="mt-6 text-sm leading-7 text-slate-400">Fast replies. Clear process. Premium support from day one.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions founders and teams ask before they start"
            description="We believe the best product partnerships begin with clarity and honest communication."
          />
          <div className="mt-12">
            <FAQ />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}