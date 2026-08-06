import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { SectionHeading } from "../components/section-heading";
import { posts } from "../lib/posts";

export const metadata = {
  title: "Blog | Codenza",
  description: "Insights on product strategy, software engineering, AI adoption, and digital growth.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Blog"
            title="Practical insights for modern product teams"
            description="We share ideas on architecture, delivery, AI adoption, and building software that lasts."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.slug} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
