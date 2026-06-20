import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-posts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.seoKeywords?.join(", "),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const content = post.content as {
    introduction: string;
    sections: { heading: string; paragraphs: string[] }[];
    faq: { question: string; answer: string }[];
    conclusion: string;
  };

  return (
    <main className="bg-[#faf8f4] py-16 md:py-24">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white border-b border-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-3xl">
            {/* Category pill */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-amber-100 text-amber-700 mb-6">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-4 text-lg text-stone-500 leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mt-8 text-sm text-stone-400">
              <span className="font-medium text-stone-600">{post.author}</span>
              <span className="w-1 h-1 rounded-full bg-stone-300 inline-block" />
              <span>{post.date}</span>
              {post.seoKeywords && (
                <>
                  <span className="w-1 h-1 rounded-full bg-stone-300 inline-block" />
                  <span>{post.category}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_340px] gap-14 xl:gap-20 items-start">
          {/* ── LEFT: Article ──────────────────────────────────── */}
          <article className="min-w-0">
            {/* Feature image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-sm">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Introduction */}
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-medium border-l-4 border-amber-400 pl-5 mb-12">
              {content.introduction}
            </p>

            {/* Sections */}
            <div className="space-y-12">
              {content.sections.map((section, i) => (
                <section key={i}>
                  <h2 className="text-2xl font-bold text-stone-900 mb-4 leading-snug">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((para, j) => (
                      <p key={j} className="text-stone-600 leading-relaxed text-base md:text-[17px]">
                        {para}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* FAQ */}
            {content.faq?.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold text-stone-900 mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-5">
                  {content.faq.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm"
                    >
                      <h3 className="font-semibold text-stone-900 mb-2 leading-snug">
                        {item.question}
                      </h3>
                      <p className="text-stone-500 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Conclusion */}
            <div className="mt-14 p-7 rounded-2xl bg-amber-50 border border-amber-100">
              <p className="text-stone-700 leading-relaxed text-base md:text-[17px]">
                {content.conclusion}
              </p>
            </div>

            {/* SEO Keywords (visually tags) */}
            {post.seoKeywords?.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2">
                {post.seoKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1 text-xs rounded-full bg-stone-100 text-stone-500 font-medium"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </article>

          {/* ── RIGHT: Sticky sidebar ──────────────────────────── */}
          <aside className="lg:sticky lg:top-8 space-y-8">
            {/* Table of contents */}
            <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-4">
                In this article
              </p>
              <nav className="space-y-2">
                {content.sections.map((section, i) => (
                  <a
                    key={i}
                    href={`#section-${i}`}
                    className="block text-sm text-stone-500 hover:text-amber-600 transition-colors py-0.5 leading-snug"
                  >
                    {section.heading}
                  </a>
                ))}
                {content.faq?.length > 0 && (
                  <a
                    href="#faq"
                    className="block text-sm text-stone-500 hover:text-amber-600 transition-colors py-0.5"
                  >
                    FAQs
                  </a>
                )}
              </nav>
            </div>

            {/* CTA card */}
            <div className="bg-stone-900 rounded-2xl p-6 text-white">
              <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-3">
                Kraga Music
              </p>
              <h3 className="font-bold text-lg leading-snug mb-3">
                Ready to start your piano journey?
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-5">
                Book a free trial lesson with one of our experienced online piano teachers today.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-amber-400 text-stone-900 font-semibold text-sm hover:bg-amber-300 transition-colors"
              >
                Book a Free Trial
              </Link>
            </div>
          </aside>
        </div>

        {/* ── RELATED ARTICLES ─────────────────────────────────── */}
        <section className="mt-24 pt-14 border-t border-stone-100">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              Related Articles
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
            {relatedPosts.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-1.5">
                  {item.category}
                </span>
                <h3 className="font-semibold text-stone-900 leading-snug group-hover:text-amber-700 transition-colors text-[15px]">
                  {item.title}
                </h3>
                <p className="text-stone-400 text-sm mt-1.5 line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}