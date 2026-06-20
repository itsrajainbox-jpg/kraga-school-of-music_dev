import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-posts";

export const metadata = {
  title: "Piano Learning Blog | Kraga School of Music",
  description:
    "Piano lessons, keyboard tips, Trinity exam preparation, practice guides and student success stories.",
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const latestPosts = blogPosts.slice(1);

  return (
    <main className="bg-[#faf8f4] py-16 md:py-24">
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
            Piano Learning Resources
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-bold">
            Piano Learning Blog
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Expert advice, keyboard tips, Trinity exam preparation,
            practice guides, and student success stories.
          </p>
        </div>
      </section>

     <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* FEATURED POST */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-primary font-semibold">
              {featuredPost.category}
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              {featuredPost.title}
            </h2>

            <p className="mt-5 text-gray-600">
              {featuredPost.excerpt}
            </p>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="inline-flex mt-8 px-6 py-3 bg-primary text-white rounded-xl"
            >
              Read Article
            </Link>
          </div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap gap-3 mb-12">
          {[
            "Piano Basics",
            "Keyboard Tips",
            "Exam Preparation",
            "Parents & Kids",
            "Practice Guides",
            "Student Stories",
          ].map((category) => (
            <span
              key={category}
              className="px-4 py-2 border rounded-full text-sm"
            >
              {category}
            </span>
          ))}
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-60">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <span className="text-primary text-sm font-medium">
                  {post.category}
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  {post.title}
                </h3>

                <p className="mt-3 text-gray-600 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}