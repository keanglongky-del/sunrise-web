import Link from "next/link";

interface PostData {
  slug: string;
  title: string;
  date: string;
  author?: string;
  tags?: string[];
}

export default function BlogPostClient({
  post,
  htmlContent,
}: {
  post: PostData;
  htmlContent: string;
}) {
  return (
    <main>
      {/* Header */}
      <section className="pt-32 pb-12 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-bark-light text-xs tracking-[0.15em] uppercase hover:text-bark transition-colors mb-8"
          >
            <svg
              viewBox="0 0 16 16"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M10 3L5 8L10 13" />
            </svg>
            Back to Blog
          </Link>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
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

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-bark leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-bark-light/60 text-xs tracking-wider">
            {post.author && <span>{post.author}</span>}
            {post.author && <span>&middot;</span>}
            <time>{formatDate(post.date)}</time>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="pb-28 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:text-bark
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-bark-light prose-p:leading-relaxed
              prose-strong:text-bark
              prose-a:text-terracotta prose-a:no-underline hover:prose-a:underline
              prose-ul:text-bark-light prose-ul:leading-relaxed
              prose-ol:text-bark-light prose-ol:leading-relaxed
              prose-li:mb-1
              prose-hr:border-bark/10
              prose-blockquote:border-l-terracotta prose-blockquote:text-bark-light/80"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </article>
    </main>
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
