"use client";

import Image from "next/image";
import {
  BookOpen,
  GraduationCap,
  Globe,
  ChartColumn,
  Users,
  CalendarDays,
  Video,
  Trophy,
  Music2,
} from "lucide-react";

export function WhyStudentsChooseKraga() {
  const features = [
    {
      icon: <Video className="w-10 h-10 text-[#f3b63c]" />,
      title: "Live 1:1 Personal Lessons",
      description:
        "Every lesson is taught live and personalized to your goals, learning style, and pace. No pre-recorded videos. No one-size-fits-all.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-[#f3b63c]" />,
      title: "Structured Curriculum",
      description:
        "A clear step-by-step learning pathway that builds strong technique, musical understanding, and confident playing. Every stage has a purpose.",
    },
    {
      icon: <Trophy className="w-10 h-10 text-[#f3b63c]" />,
      title: "Trinity & ABRSM Exam Preparation",
      description:
        "Expert guidance for Trinity College London and ABRSM exams from beginner to advanced levels with proven results.",
    },
    {
      icon: <Globe className="w-10 h-10 text-[#f3b63c]" />,
      title: "Learn From Anywhere",
      description:
        "Students across India, the USA, the UK, Canada, Australia, and beyond. Flexible scheduling with morning, evening, and weekend slots.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#f3b63c]" />,
      title: "Student-Focused Teaching",
      description:
        "Patient, encouraging, and interactive teaching that keeps students motivated and comfortable to learn and grow.",
    },
    {
      icon: <ChartColumn className="w-10 h-10 text-[#f3b63c]" />,
      title: "Real Progress, Real Results.",
      description:
        "From your first song to exam success, we track your progress with clear goals, regular feedback, and measurable improvement.",
    },
  ];

  const stats = [
    {
      icon: <Globe className="w-10 h-10 text-[#111827]" />,
      value: "10+",
      label: "Countries",
      description: "Students learning from around the world",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#111827]" />,
      value: "Beginner",
      label: "to Grade 8",
      description: "Complete learning path For kids, teens & adults",
    },
    {
      icon: <Users className="w-10 h-10 text-[#111827]" />,
      value: "100%",
      label: "Live 1:1 Lessons",
      description: "Personal attention in every single class",
    },
    {
      icon: <CalendarDays className="w-10 h-10 text-[#111827]" />,
      value: "Flexible",
      label: "Scheduling",
      description: "Classes that fit your time, across all time zones",
    },
  ];

  const renderAmpersand = (text: string) =>
  text.split("&").map((part, index, array) => (
    <span key={index}>
      {part}
      {index < array.length - 1 && <span className="inter">&</span>}
    </span>
  ));

  return (
    <section className="relative overflow-hidden bg-[#fffdf9] py-16 md:py-24 playfair">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 text-[#d9a441]/20 text-8xl md:text-9xl font-light rotate-[-10deg] select-none">
          ♩
        </div>
        <div className="absolute right-0 top-20 text-[#d9a441]/20 text-8xl md:text-9xl font-light rotate-[10deg] select-none">
          ♪
        </div>
        <div className="absolute left-1/2 top-52 -translate-x-1/2 text-[#d9a441]/5 text-[10rem] md:text-[14rem] font-bold select-none tracking-widest">
          MUSIC
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fffdf9] to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[#f3b63c] uppercase tracking-[0.35em] text-sm font-semibold">
            — THE KRAGA DIFFERENCE —
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-950">
            Why Students Choose Kraga
          </h2>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-20 bg-[#f3b63c]" />
            <span className="h-3 w-3 rounded-full bg-[#f3b63c]" />
            <span className="h-[2px] w-20 bg-[#f3b63c]" />
          </div>

          <p className="mt-8 text-lg md:text-2xl leading-relaxed text-slate-600">
            We go beyond teaching notes. Our structured 1:1 piano lessons are
            designed to build skills, confidence, and a lifelong love for
            music.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-[28px] border border-[#f2ede3] bg-white/90 p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-[#f8f2e6] shadow-inner">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold leading-tight text-slate-950">
                    {renderAmpersand(item.title)}
                  </h3>

                  <div className="mt-4 h-[2px] w-12 bg-[#f3b63c]" />

                  <p className="mt-5 text-[17px] leading-8 text-slate-700">
                    {renderAmpersand(item.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
      <div className="mt-8 rounded-[28px] border border-slate-800 bg-gradient-to-r from-slate-950 to-blue-950 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex items-center gap-4 px-0 xl:px-6 ${
                  index !== stats.length - 1 ? "xl:border-r xl:border-[#ede6d8]" : ""
                }`}
              >
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-[#faf6ee] border border-[#ece4d4]">
                  {stat.icon}
                </div>

                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-[#f3b63c] leading-none">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-lg font-bold text-white">
                    {renderAmpersand(stat.label)}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white">
                    {renderAmpersand(stat.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}