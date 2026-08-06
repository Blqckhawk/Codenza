"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What kinds of projects does Codenza build?",
    answer: "We build custom web platforms, SaaS products, internal systems, automation tools, and AI-enabled experiences for startups, mid-market teams, and enterprise organizations.",
  },
  {
    question: "How long does a typical engagement take?",
    answer: "Timelines depend on scope, but our engagements typically move from discovery to launch in a matter of weeks to a few months.",
  },
  {
    question: "Can you support us after launch?",
    answer: "Yes. We provide maintenance, support, feature iterations, and scaling support as your product evolves.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
              <span className="text-2xl text-blue-600">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? <p className="mt-4 text-lg leading-8 text-slate-600">{faq.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
