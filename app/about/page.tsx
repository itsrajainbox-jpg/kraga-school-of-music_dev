// app/components/KragaDifference.tsx
import Image from "next/image";
import {
  Users,
  Music2,
  GraduationCap,
  HandHelping,
  BookOpen,
  ChartNoAxesColumnIncreasing,
  BadgeCheck,
  CircleUserRound,
  Quote,
  Trophy,
  Earth,
  LibraryBig,
} from "lucide-react";
import AboutImage from "@/public/images/Teach.jpg";
const points = [
  {
    icon: Users,
    text: (
      <>
        After teaching hundreds of students through established music academies,
        we noticed a common problem.
      </>
    ),
  },
  {
    icon: Music2,
    text: (
      <>
        Many students learned songs. <br />
        <span className="font-semibold text-[#f3b63c]">Few learned music.</span>
      </>
    ),
  },
  {
    icon: GraduationCap,
    text: (
      <>
        Kraga School of Music provides{" "}
        <span className="font-semibold">
          structured piano education that develops technique, musical
          understanding, confidence, and long-term progress.
        </span>
      </>
    ),
  },
  {
    icon: HandHelping,
    text: (
      <>
        Whether you're a child taking your first lesson or an adult returning to
        music after years away, every student receives a{" "}
        <span className="font-semibold text-[#f3b63c]">
          clear learning pathway.
        </span>
      </>
    ),
  },
];

const highlights = [
  {
    icon: CircleUserRound,
    title: "Experienced Guidance",
    desc: "Learn from dedicated and passionate piano educators.",
  },
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    desc: "Step-by-step learning designed for real musical growth.",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Proven Progress",
    desc: "Hundreds of students across 10+ countries trust our approach.",
  },
  {
    icon: BadgeCheck,
    title: "Exam Success",
    desc: "Trinity & ABRSM exam preparation from Grade 1 to Grade 8.",
  },
];

export default function KragaDifference() {
  return (
    <section className="bg-[#faf8f4] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_1.08fr]">
          {/* Left */}
          <div className="pt-2">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-6 bg-[#f3b63c]" />
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f3b63c]">
                The Kraga Difference
              </p>
              <span className="h-px w-10 bg-[#f3b63c]" />
            </div>

            <h2 className="max-w-xl font-serif text-4xl leading-none tracking-[-0.02em] text-[#0E1B4D] sm:text-5xl lg:text-[5rem]">
              <span className="block">Why Choose Kraga for </span>
              <span className="mt-1 block text-[#f3b63c]">
                Online Piano Lessons
              </span>
            </h2>

            <div className="mt-7 h-[2px] w-16 bg-[#f3b63c]" />

            <div className="relative mt-8 space-y-8">
              <div className="absolute left-[1.35rem] top-5 bottom-5 w-px bg-[#E8DED0]" />

              {points.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="relative flex items-start gap-5">
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7EEDF] ring-8 ring-[#FCF8F2]">
                      <Icon
                        className="h-5 w-5 text-[#f3b63c]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="max-w-xl pt-1 text-[1.02rem] leading-8 text-[#2E2E2E]">
                      {item.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[24px] border border-[#D8CBB8]/50 bg-[#EADBC8] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[1.08/1] w-full">
                <Image
                  src={AboutImage}
                  alt="Piano lesson with teacher and student"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-[20px] bg-[#031B52] px-5 py-5 text-white shadow-xl md:bottom-6 md:left-6 md:right-6 md:px-6 md:py-6">
                <div className="flex items-start gap-3">
                  <Quote
                    className="mt-1 h-6 w-6 shrink-0 text-[#F2A51A]"
                    fill="currentColor"
                  />
                  <p className="text-base leading-7 md:text-[1.02rem]">
                    Our mission is simple: help students become{" "}
                    <span className="font-semibold text-[#F2A51A]">
                      confident, independent musicians
                    </span>{" "}
                    for life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="mt-8 rounded-[24px] border border-[#E7DCCB] bg-[#FDFBF7] px-4 py-6 shadow-[0_4px_18px_rgba(88,56,20,0.05)] md:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center px-4 text-center ${
                    idx !== highlights.length - 1
                      ? "lg:border-r lg:border-[#E9DECF]"
                      : ""
                  }`}
                >
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#FBF4E8]">
                    <Icon
                      className="h-9 w-9 text-[#f3b63c]"
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="text-[1.65rem] font-semibold leading-tight text-[#0E1B4D]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[240px] text-[1rem] leading-7 text-[#353535]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Results & Success Section */}
        <div
          className="
    relative
    overflow-hidden
    mt-8
    rounded-[32px]
    border
    border-white/10
    bg-gradient-to-br
    from-slate-950
    via-[#091c4a]
    to-blue-950
    p-8
    md:p-12
    shadow-[0_25px_80px_rgba(0,0,0,0.35)]
  "
        >
          {/* Decorative Glow Effects */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#f3b63c]/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          {/* Header */}
          <div className="relative text-center">
            <span className="inline-block rounded-full border border-[#f3b63c]/30 bg-[#f3b63c]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#f3b63c]">
              Results & Success
            </span>

            <h2 className="mt-5 font-serif text-4xl font-bold text-white md:text-6xl">
              From First Notes to
              <span className="block text-[#f3b63c]">Trinity Distinctions</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Real results from students learning piano online across India,
              USA, UK, Canada, and Australia.
            </p>
          </div>

          {/* Achievement Statistics */}
          <div className="relative mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(243,182,60,0.15)]">
              <h3 className="text-5xl font-bold text-[#f3b63c]">500+</h3>
              <p className="mt-3 text-lg font-medium text-white">
                Students Trained
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(243,182,60,0.15)]">
              <h3 className="text-5xl font-bold text-[#f3b63c]">10+</h3>
              <p className="mt-3 text-lg font-medium text-white">Countries</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(243,182,60,0.15)]">
              <h3 className="text-5xl font-bold text-[#f3b63c]">96%</h3>
              <p className="mt-3 text-lg font-medium text-white">
                Exam Pass Rate
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(243,182,60,0.15)]">
              <h3 className="text-5xl font-bold text-[#f3b63c]">78%</h3>
              <p className="mt-3 text-lg font-medium text-white">
                Merit & Distinction
              </p>
            </div>
          </div>

          {/* Achievement Highlights */}
          <div className="relative mt-14 border-t border-white/10 pt-10">
            <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Achievement Highlights
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:border-[#f3b63c]/30 hover:bg-white/10">
                <div className="mb-5 flex justify-center">
                  <Trophy
                    size={42}
                    className="text-[#f3b63c]"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-xl font-bold text-white">
                  Trinity Excellence
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  150+ Trinity exam entries completed successfully.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:border-[#f3b63c]/30 hover:bg-white/10">
                <div className="mb-5 flex justify-center">
                  <Earth size={42} className="text-[#f3b63c]" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-white">
                  International Students
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  Students learning from USA, UK, Canada, Australia & India.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:border-[#f3b63c]/30 hover:bg-white/10">
                <div className="mb-5 flex justify-center">
                  <LibraryBig
                    size={42}
                    className="text-[#f3b63c]"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-xl font-bold text-white">
                  Structured Curriculum
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  Beginner to Grade 8 learning pathway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
