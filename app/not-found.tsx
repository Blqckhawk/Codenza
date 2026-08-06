import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">Page not found</h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
        The page you are looking for has moved, been removed, or never existed.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-600 hover:text-white">
        Return home
      </Link>
    </div>
  );
}
