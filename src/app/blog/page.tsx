import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog — Sunrise Organic Kampot Pepper",
  description:
    "Stories from our farm, cooking tips, pepper knowledge, and the latest news from Sunrise Pepper in Kampot, Cambodia.",
  openGraph: {
    title: "Blog — Sunrise Organic Kampot Pepper",
    description:
      "Stories from our farm, cooking tips, pepper knowledge, and the latest news from Sunrise Pepper in Kampot, Cambodia.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <p className="text-terracotta tracking-[0.3em] text-xs uppercase mb-4">
            From the Farm
          </p>
          <h1 className="font-display text-4xl lg:text-5xl text-bark mb-6">
            Our <span className="italic">Journal</span>
          </h1>
          <p className="text-bark-light leading-relaxed max-w-xl">
            Stories about Kampot pepper, organic farming, cooking inspiration,
            and life on our farm in Cambodia.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-28 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <BlogList posts={posts} />
        </div>
      </section>
    </main>
  );
}
