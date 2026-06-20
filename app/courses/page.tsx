// app/courses/page.tsx
import Image from "next/image";
import {
  CalendarDays,
  Globe2,
  NotebookText,
  TrendingUp,
  Users,
  Clock3,
  BookOpen,
  ShieldCheck,
  Trophy,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Users className="h-7 w-7 text-[#f3b63c]" />,
    title: "Live 1:1 Lessons",
    desc: "Personalised guidance just for you",
  },
  {
    icon: <CalendarDays className="h-7 w-7 text-[#f3b63c]" />,
    title: "Flexible Scheduling",
    desc: "Learn on your time with slots that suit you",
  },
  {
    icon: <Globe2 className="h-7 w-7 text-[#f3b63c]" />,
    title: "Learn From Anywhere",
    desc: "Connecting students in 10+ countries",
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-[#f3b63c]" />,
    title: "Proven Progress",
    desc: "Structured curriculum with measurable results",
  },
];

const plans = [
  {
    number: 1,
    title: "Beginner",
    subtitle: "START YOUR JOURNEY",
    keywordSubtitle: "Online Piano Lessons for Beginners",
    desc: "Perfect for absolute beginners with no prior experience. Build a strong foundation and start playing your favorite songs.",
    image:
      "https://i.pinimg.com/1200x/34/11/c0/3411c004df02f91fa99c9abf1857413e.jpg",
    learn: "Notes, rhythm, scales, chords, basic songs & practice habits",
    format: "Live 1:1, 30 or 60 minutes, weekly",
    border: "border-transparent",
    badge: null,
  },
  {
    number: 2,
    title: "Intermediate",
    subtitle: "BUILD SKILLS & CONFIDENCE",
    keywordSubtitle: "Online Piano Classes for Intermediate Students",
    desc: "For students who know the basics and want to take their playing, technique, and musical understanding to the next level.",
    image:
      "https://i.pinimg.com/1200x/a0/74/dd/a074dd1489f994047b661a09c09caa5e.jpg",
    learn: "Hand coordination, chords, scales, arpeggios, music theory & more",
    format: "Live 1:1, 30 or 60 minutes, weekly",
    border: "border-[#f3b63c]",
    badge: "MOST POPULAR",
  },
  {
    number: 3,
    title: "Advanced",
    subtitle: "REFINE. PERFORM. EXCEL.",
    keywordSubtitle: "Trinity Exam Preparation and Advanced Piano",
    desc: "For advanced students aiming for performance excellence or preparing for higher-level exams.",
    image:
      "https://i.pinimg.com/736x/34/5a/49/345a49deeec6120ef0e640dfb78b6cf7.jpg",
    learn:
      "Advanced technique, interpretation, repertoire, sight reading & expression",
    format: "Live 1:1,  30 minutes, weekly",
    border: "border-transparent",
    badge: null,
  },
  {
    number: 4,
    title: "Online Keyboard Classes",
    subtitle: "LEARN KEYBOARD ONLINE",
    keywordSubtitle: "Online Keyboard Classes for All Ages",
    desc: "Online keyboard classes designed for beginners and aspiring performers.",
    image:
      "https://i.pinimg.com/736x/b8/ad/d6/b8add627be9c971235fef52e83be04c6.jpg",
    learn: "Learn keyboard techniques, chords, rhythm, melodies.",
    format: "Live 1:1, 30 or 60 minutes, weekly",
    border: "border-transparent",
    badge: null,
  },
];

export default function CoursesPage() {
  return (
    <main className="bg-[#faf8f4] py-16 md:py-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,220,150,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(255,220,150,0.12),_transparent_20%)]" />
        <div className="absolute inset-y-0 left-0 w-40 bg-[url('/images/music-notes-left.png')] bg-contain bg-no-repeat opacity-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-56 bg-[url('/images/piano-lines-right.png')] bg-contain bg-no-repeat bg-right opacity-20 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-amber-600/70" />
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f3b63c]">
                Our Courses
              </p>
              <span className="h-px w-12 bg-amber-600/70" />
            </div>

            <h1 className="mx-auto max-w-5xl font-serif text-5xl leading-[1.02] text-[#0f1b3d] md:text-[76px]">
              Online Piano Courses for Every Level
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 md:text-[22px]">
              Structured 1:1 online piano lessons designed to help you learn,
              grow, and achieve your musical goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4 md:gap-0">
            {features.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 px-0 md:px-6 ${index !== 3 ? "md:border-r md:border-slate-200" : ""}`}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#fff5e6] shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-base leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-4 relative">
            {plans.map((plan) => (
              <article
                key={plan.title}
                className={`relative rounded-3xl border ${plan.border} bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]`}
              >
                {plan.badge && (
                  <div className="absolute left-1/2 -top-4 z-30 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#f3b63c] px-6 py-2 text-sm font-bold text-white shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div className="overflow-hidden rounded-t-3xl">
                  <div className="relative h-44 w-full">
                    <Image
                      src={plan.image}
                      alt={plan.title}
                      fill
                      className="object-cover"
                      priority={plan.number === 2}
                    />
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col px-6 pb-6 pt-7">
                  <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#f3b63c] text-2xl font-bold text-white shadow-md">
                    {plan.number}
                  </div>

                  <div className="pt-5 text-center">
                    <h2 className="font-serif text-4xl text-[#0f1b3d]">
                      {plan.title}
                    </h2>

                    <p className="mt-2 text-sm font-medium text-slate-500">
                      {plan.keywordSubtitle}
                    </p>
                    <p className="mt-2 text-[15px] font-bold uppercase tracking-[0.16em] text-[#f3b63c]">
                      {plan.subtitle}
                    </p>
                    <p className="mx-auto mt-4 max-w-[28rem] text-[15px] leading-7 text-slate-600">
                      {plan.desc}
                    </p>
                  </div>

                  <div className="my-6 border-t border-slate-200" />

                  <div className="flex-1 space-y-5">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff5e6]">
                        <BookOpen className="h-5 w-5 text-slate-900" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900">
                          What you’ll learn
                        </h4>
                        <p className="mt-1 text-[15px] leading-7 text-slate-700">
                          {plan.learn}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff5e6]">
                        <Clock3 className="h-5 w-5 text-slate-900" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900">
                          Lesson format
                        </h4>
                        <p className="mt-1 text-[15px] leading-7 text-slate-700">
                          {plan.format}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href="/book" className="mt-auto pt-6">
                    <button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#081737] px-5 py-3 text-base font-semibold text-[#f3b63c] shadow-sm transition hover:bg-[#0b1d45]">
                      Book a Free Trial
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-[#fbf7f1] px-6 py-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
            <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr_0.8fr] lg:items-center">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#081737]">
                  <Trophy className="h-8 w-8 text-[#f3b63c]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Every Course Includes
                  </h3>
                  <div className="mt-3 grid gap-2 text-[15px] text-slate-700 md:grid-cols-2">
                    <p>✓ Structured curriculum</p>
                    <p>✓ Progress tracking</p>
                    <p>✓ Regular feedback</p>
                    <p>✓ Support every step</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 border-y border-slate-200 py-5 lg:border-y-0 lg:border-l lg:py-0 lg:pl-6">
                <div className="flex -space-x-3">
                  <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-white bg-slate-300">
                    <img
                      src="https://i.pinimg.com/736x/80/a6/49/80a64977e4a4749d8ce504e54f186f0e.jpg"
                      alt="Student 1"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-white bg-slate-300">
                    <img
                      src="https://i.pinimg.com/736x/28/5f/48/285f48bede5d06d434900bce4a25c938.jpg"
                      alt="Student 1"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-white bg-slate-300">
                    <img
                      src="https://i.pinimg.com/736x/b4/5c/13/b45c133201eff18f79b8ebf034dcf005.jpg"
                      alt="Student 1"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Join our global learning community
                  </h3>
                  <p className="mt-1 text-[15px] leading-7 text-slate-700">
                    Be part of a thriving community of learners from across the globe.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 lg:items-end lg:pl-6">
                <Link href="/book">
                  <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#081737] px-5 py-3 text-base font-semibold text-[#f3b63c] shadow-sm transition hover:bg-[#0b1d45]">
                    Book a Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <p className="flex items-center gap-2 text-sm text-slate-600">
                  <ShieldCheck className="h-4 w-4 text-slate-700" />
                  No commitment. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
