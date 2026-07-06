"use client";

import {
  Globe,
  Calendar,
  Users,
  GraduationCap,
  Award,
  Building2,
  Trophy,
  Briefcase,
  Smile,
} from "lucide-react";
import { motion } from "framer-motion";
import Kids from "@/public/WhoItFor/Kids.webp";
import Professional from "@/public/WhoItFor/Professional.webp";
import GradeExams from "@/public/WhoItFor/GradeExams.webp";
import Image from "next/image";
import Link from "next/link";
const stats = [
  {
    icon: Building2,
    title: "Trinity College London",
    subtitle: "Exam Prep Available",
  },
  {
    icon: Award,
    title: "ABRSM-Aligned",
    subtitle: "Curriculum",
  },
  {
    icon: Globe,
    title: "Students in",
    subtitle: "10+ Countries",
  },
  {
    icon: Calendar,
    title: "Morning, Evening &",
    subtitle: "Weekend Slots",
  },
  {
    icon: Users,
    title: "Beginner to Advanced",
    subtitle: "All Ages",
  },
];

const learners = [
  {
    id: "01",
    icon: Smile,
    title: "Kids & Beginners",
    subtitle: "Perfect for Children (Ages 5 and above)",
    description:
      "Fun, structured lessons that build real skills not just songs. Your child progresses through a proven curriculum at their own pace, with Trinity and ABRSM exam preparation available when they're ready.",
    image: Kids,
  },
  {
    id: "02",
    icon: Briefcase,
    title: "Working Adults",
    subtitle: "For Busy Adults Too",
    description:
      "Always wanted to play piano but never found the time? Our lessons fit around your schedule evenings, weekends, your time zone. No prior experience needed. Start from zero and progress at your pace.",
    image: Professional,
  },
  {
    id: "03",
    icon: GraduationCap,
    title: "Exam Prep",
    subtitle: "Trinity & ABRSM Exam Preparation",
    description:
      "Working toward a graded music exam? Our structured curriculum and exam-focused training help students prepare confidently from Grade 1 through Grade 8.",
    image: GradeExams,
  },
];

const renderAmpersand = (text: string) =>
  text.split("&").map((part, index, array) => (
    <span key={index}>
      {part}
      {index < array.length - 1 && <span className="inter">&</span>}
    </span>
  ));

export function SocialProofSection() {
  return (
    <section className="bg-[#faf8f4] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Proof */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#f3b63c]" />
            <span className="text-[#f3b63c] uppercase tracking-[0.25em] text-sm font-medium">
              Social Proof
            </span>
            <div className="h-px w-10 bg-[#f3b63c]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900">
            Trusted by Students Worldwide
          </h2>
        </div>

        {/* Stats */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 bg-white rounded-2xl border border-stone-200 p-5">
                  <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-[#f3b63c]" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {renderAmpersand(item.title)}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {renderAmpersand(item.subtitle)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Who It's For */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#f3b63c]" />
            <span className="text-[#f3b63c] uppercase tracking-[0.25em] text-sm font-medium">
              Who It's For
            </span>
            <div className="h-px w-10 bg-[#f3b63c]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 font-semibold">
            Tailored for Every Learner
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Personalised lessons designed for different goals, ages and
            lifestyles.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {learners.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                className="bg-white border border-stone-200 rounded-[30px] overflow-hidden shadow-sm">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover"
                  />

                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-8">
                    <div className="w-16 h-16 bg-white rounded-full border border-stone-200 shadow-md flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#f3b63c]" />
                    </div>
                  </div>
                </div>

                <div className="pt-14 pb-8 px-6">
                  <span className="text-[#f3b63c] font-semibold">
                    {item.id}
                  </span>

                  <h3 className="mt-2 text-3xl font-serif text-slate-900">
                    {renderAmpersand(item.title)}
                  </h3>

                  <p className="mt-2 text-[#f3b63c] font-medium">
                    {renderAmpersand(item.subtitle)}
                  </p>

                  <p className="mt-5 text-slate-600 leading-relaxed">
                    {renderAmpersand(item.description)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-3xl border border-stone-200 bg-white p-6 md:p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-[#f3b63c]" />
              </div>

              <div>
                <h3 className="text-2xl font-serif text-slate-900">
                  Structured. Supportive. Proven Results.
                </h3>

                <p className="text-slate-600 mt-1">
                  Join Students across 10+ countries achieving their music goals
                  every day.
                </p>
              </div>
            </div>

            <Link
              href="book"
              className="w-full lg:w-auto px-8 py-4 bg-[#f3b63c] hover:bg-[#f3b63c] transition-colors text-white rounded-xl font-medium flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Your Free Trial Class
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
