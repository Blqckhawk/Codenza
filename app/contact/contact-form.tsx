"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm({ name: "", email: "", projectType: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"
            placeholder="Alex Morgan"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"
            placeholder="alex@company.com"
          />
        </label>
      </div>
      <label className="mt-6 block text-sm font-medium text-slate-700">
        Project Type
        <input
          value={form.projectType}
          onChange={(e) => setForm({ ...form, projectType: e.target.value })}
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"
          placeholder="Website, booking system, custom app..."
        />
      </label>
      <label className="mt-6 block text-sm font-medium text-slate-700">
        Message
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 px-4 py-3"
          placeholder="Tell us about your goals, timeline, and priorities."
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-900 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send inquiry"}
      </button>
      {status === "sent" ? (
        <p className="mt-4 text-sm text-emerald-600">Thanks — we'll be in touch shortly.</p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 text-sm text-red-600">Something went wrong — try WhatsApp instead, or email us directly.</p>
      ) : null}
      <p className="mt-4 text-sm text-slate-500">
        By submitting this form you agree to our <Link href="/privacy" className="text-blue-600">privacy policy</Link>.
      </p>
    </form>
  );
}