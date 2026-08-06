import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

export const metadata = {
  title: "Privacy Policy | Codenza",
  description: "Codenza privacy policy for client and website interactions.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <main className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32">
        <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          We respect your privacy and handle personal information only for the purposes of delivering our services and communicating with clients.
        </p>
      </main>
      <Footer />
    </div>
  );
}
