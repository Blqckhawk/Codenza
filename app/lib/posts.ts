export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "ai-copilots-service-delivery",
    title: "How AI copilots improve modern service delivery",
    excerpt: "A practical look at how intelligent workflows can reduce friction and increase team output.",
    content: "This post explores how AI copilots can streamline service delivery, improve response speed, and help teams focus on high-value work.",
  },
  {
    slug: "designing-trustworthy-software",
    title: "Designing software that users trust from day one",
    excerpt: "The product principles that make complex systems feel simple, clear, and dependable.",
    content: "Great software feels intuitive because it is designed around trust, clarity, and thoughtful interactions.",
  },
  {
    slug: "secure-architecture-matters",
    title: "Why secure architecture matters more than ever",
    excerpt: "A guide to balancing growth, reliability, and compliance in modern product teams.",
    content: "Security should be treated as a product priority, not a late-stage patch.",
  },
];
