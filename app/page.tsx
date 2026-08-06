"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { SectionHeading } from "./components/section-heading";
import { FAQ } from "./components/faq";

const services = [
  "Custom software development",
  "AI integrations",
  "SaaS and product engineering",
  "Cloud deployment and automation",
];

const stats = [
  { value: "50+", label: "Products launched" },
  { value: "99.9%", label: "Reliability target" },
  { value: "24/7", label: "Support readiness" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Navigation />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(16,185,129,0.16),_transparent_30%)]" />
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
            <div className="relative z-10">
              <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4 }} className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Codenza</motion.p>
              <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.1 }} className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
                Building the future, one line of code at a time.
              </motion.h1>
              <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.2 }} className="mt-8 max-w-2xl text-xl leading-9 text-slate-600 dark:text-slate-300">
                We design and build secure, scalable, AI-powered software solutions that help businesses innovate, grow, and succeed.
              </motion.p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="rounded-full bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-900">
                  Book free consultation
                </Link>
                <Link href="/portfolio" className="rounded-full border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600">
                  View our work
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium text-slate-600">
                {services.map((service) => (
                  <span key={service} className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity:0, x:24 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.55, delay:0.15 }} className="relative z-10 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 dark:border-slate-800">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Trusted by ambitious teams</p>
                <div className="mt-8 grid gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                      <p className="text-3xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
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
              <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Featured work"
            title="Flagship products built for real-world impact"
            description="From AI-native internal tools to customer-facing platforms, our work closes the gap between ambition and delivery."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              ["Codenza ClientHub", "AI-powered client and project management"],
              ["Oakmont Homes", "Modern real estate platform"],
              ["Codenza Invoice", "Smart invoice and billing experience"],
            ].map(([name, description]) => (
              <div key={name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="h-40 bg-gradient-to-br from-blue-600 via-slate-900 to-emerald-500" />
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
                  <p className="mt-3 text-lg leading-8 text-slate-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by founders and growth-focused teams"
            description="Our clients choose us for clarity, speed, and engineering that feels effortless."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              ["“Codenza brought clarity and pace to our roadmap. The product arrived better than we imagined.”", "— Amara, Founder"],
              ["“Their team understood our business goals immediately and translated them into a high-quality product.”", "— Daniel, COO"],
              ["“From discovery to launch, every step felt strategic and calm.”", "— Nina, Operations Director"],
            ].map(([quote, author]) => (
              <div key={quote} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <p className="text-lg leading-8 text-slate-700">{quote}</p>
                <p className="mt-6 font-semibold text-slate-900">{author}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Flexible partnership options for every stage"
            description="Choose the engagement model that fits your roadmap, timeline, and level of support."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              ["Discovery Sprint", "$5k", "Fast strategy, architecture, and execution plan."],
              ["Product Build", "$15k+", "Design and development for initial launches or feature delivery."],
              ["Ongoing Partner", "Custom", "Dedicated engineering support for scaling teams."],
            ].map(([name, price, description]) => (
              <div key={name} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
                <p className="mt-4 text-3xl font-semibold text-blue-600">{price}</p>
                <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-16 text-white shadow-2xl shadow-slate-900/20 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Book a consultation</p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Let’s shape the software experience your business deserves.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-400">
                  Tell us about your goals and we’ll help you turn them into a thoughtful product strategy and launch plan.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
                <Link href="/contact" className="inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-950">
                  Schedule a call
                </Link>
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
