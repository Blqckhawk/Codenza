import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">Codenza</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            We build secure, scalable, intelligent software for ambitious companies that want to grow with confidence.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Navigate</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>hello@codenza.com</li>
            <li>
              <a href="https://wa.me/2348072257930" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                Chat on WhatsApp
              </a>
            </li>
            <li>Lagos, Nigeria • Remote-friendly worldwide</li>
          </ul>
        </div>
      </div>
       <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-500">
        Designed & Developed by Nkoe Iniobong Francis
      </div>
    </footer>
  );
}
