import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-bark-light text-center py-20">
        No posts yet. Check back soon.
      </p>
    );
  }

  return (
    <div className="space-y-0">
      {posts.map((post, i) => (
        <article key={post.slug}>
          {i > 0 && (
            <hr className="border-bark/10 my-0" />
          )}
          <Link href={`/blog/${post.slug}`} className="block py-10 group">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <h2 className="font-display text-xl lg:text-2xl text-bark group-hover:text-terracotta transition-colors duration-300">
                {post.title}
              </h2>
              <time className="text-bark-light/60 text-xs tracking-wider uppercase whitespace-nowrap sm:ml-8">
                {formatDate(post.date)}
              </time>
            </div>
            <p className="text-bark-light text-[0.9rem] leading-relaxed mb-3 max-w-2xl">
              {post.excerpt}
            </p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.65rem] tracking-[0.15em] uppercase text-terracotta bg-terracotta/10 px-3 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        </article>
      ))}
    </div>
  );
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}
