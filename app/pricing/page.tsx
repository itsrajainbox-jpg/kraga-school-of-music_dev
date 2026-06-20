"use client";

import { useState, useEffect } from "react";
import {
  BookOpen,
  CalendarDays,
  Globe2,
  TrendingUp,
  Sprout,
  SlidersHorizontal,
  Trophy,
  ShieldCheck,
  Users,
  BadgeCheck,
  ArrowRight,
  Target,
  GraduationCap,
  MessageCircle,
  Headphones,
  Award,
  Shield,
  Sparkles,MapPin,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const featureIcons = [
  {
    title: "Live 1:1 Lessons",
    desc: "Personalised attention just for you",
    icon: <Users className="h-7 w-7" />,
  },
  {
    title: "Flexible Scheduling",
    desc: "Pick time slots that suit you",
    icon: <CalendarDays className="h-7 w-7" />,
  },
  {
    title: "Learn From Anywhere",
    desc: "Students in 10+ countries",
    icon: <Globe2 className="h-7 w-7" />,
  },
  {
    title: "Proven Results",
    desc: "Structured approach with measurable progress",
    icon: <TrendingUp className="h-7 w-7" />,
  },
];

const pricingPlans = [
  {
    region: "International",
    title: "24 Session Program",
    badge: "",
    prices: [
      {
        duration: "60 Minute Private 1:1 Lessons",
        amount: "$360 USD",
      },
    ],
    features: [
      "Live 1:1 Online Lessons",
      "Structured Curriculum",
      "Trinity-Aligned Learning Path",
      "Flexible Scheduling",
      "Progress Tracking",
    ],
    icon: Globe2,
  },
  {
    region: "International",
    title: "48 Session Program",
    badge: "BEST VALUE",
    prices: [
      {
        duration: "60 Minute Private 1:1 Lessons",
        amount: "$690 USD",
      },
    ],
    features: [
      "Live 1:1 Online Lessons",
      "Long-Term Skill Development Plan",
      "Trinity-Aligned Learning Path",
      "Flexible Scheduling",
      "Progress Tracking",
    ],
    icon: Globe2,
  },
  {
    region: "India",
    title: "24 Session Program",
    badge: "",
    prices: [
      {
        duration: "60 Minute Private 1:1 Lessons",
        amount: "₹19,200",
      },
    ],
    features: [
      "Live 1:1 Online Lessons",
      "Structured Curriculum",
      "Trinity-Aligned Learning Path",
      "Flexible Scheduling",
      "Progress Tracking",
    ],
    icon: MapPin,
  },
  {
    region: "India",
    title: "48 Session Program",
    badge: "BEST VALUE",
    prices: [
      {
        duration: "60 Minute Private 1:1 Lessons",
        amount: "₹36,000",
      },
    ],
    features: [
      "Live 1:1 Online Lessons",
      "Long-Term Skill Development Plan",
      "Trinity-Aligned Learning Path",
      "Flexible Scheduling",
      "Progress Tracking",
    ],
    icon: MapPin,
  },
];



export default function PricingPage() {

  const [userRegion, setUserRegion] = useState<"India" | "International">(
  "International"
);

useEffect(() => {
  const detectCountry = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();

      if (data.country_code === "IN") {
        setUserRegion("India");
      } else {
        setUserRegion("International");
      }
    } catch (error) {
      console.error("Location detection failed", error);
      setUserRegion("International");
    }
  };

  detectCountry();
}, []);

const visiblePlans = pricingPlans.filter(
  (plan) => plan.region === userRegion
);
  return (
    <main className="bg-[#faf8f4] py-16 md:py-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
  

        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-4 text-[15px] font-semibold tracking-[0.24em] text-[#f3b63c]">
            <span className="h-px w-10 bg-[#f3b63c]" />
            PRICING
            <span className="h-px w-10 bg-[#f3b63c]" />
          </div>

          <h1 className="mt-4 font-serif text-[34px] leading-[1.05] font-semibold text-[#1e2b4b] md:text-[56px]">
            Online Piano Lesson Pricing — Find the Right Plan
          </h1>

          <h2 className="mt-2 font-serif text-[27px] leading-tight font-semibold md:text-[41px]">
            <span className="text-[#4b7d3f]">See Progress.</span>{" "}
            <span className="text-[#f3b63c]">Feel Proud.</span>{" "}
            <span className="text-[#7b39d8]">Enjoy the Music.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-[#4f5971] md:text-[19px]">
            Choose the right program for your goals. All programs include live
            1:1 lessons, structured learning, and personal guidance.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {featureIcons.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 border-r border-[#e5dccb] pr-4 last:border-r-0 last:pr-0"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f4ebd9] text-[#f3b63c]">
                {item.icon}
              </div>
              <div>
                <div className="font-semibold text-[#1d2747]">{item.title}</div>
                <div className="mt-1 text-sm leading-6 text-[#4f5971]">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

       {/* 1 x 4 Pricing Cards */}
        <div className="mt-16 grid gap-6 xl:grid-cols-2">
          {visiblePlans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <div
                key={index}
                className={`relative flex h-full flex-col rounded-[30px] border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  plan.badge
                    ? "border-[#f3b63c] ring-1 ring-[#f3b63c]/20"
                    : "border-[#eadfce]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3b63c] px-5 py-2 text-xs font-bold tracking-[0.18em] text-white">
                    BEST VALUE
                  </div>
                )}

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f4ebd9] text-[#f3b63c]">
                  <Icon className="h-8 w-8" />
                </div>

                <div className="mt-5 text-center">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3b63c]">
                    {plan.region}
                  </div>

                  <h3 className="mt-2 font-serif text-3xl font-semibold text-[#1d2747]">
                    {plan.title}
                  </h3>
                </div>

                <div className="mt-6 rounded-2xl bg-[#f8f4ee] p-5">
                  <div className="space-y-5">
                    {plan.prices.map((item, idx) => (
                      <div key={idx}>
                        <div className="text-sm text-[#59667f]">
                          {item.duration}
                        </div>

                        <div className="mt-1 text-3xl font-bold text-[#102246]">
                          {item.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex-1 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#5a8a42]" />
                      <span className="text-[#45516c]">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/book"
                  className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[#102246] px-6 py-4 font-semibold text-[#f3b63c] transition hover:brightness-110"
                >
                  Book Free Trial Class
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#6b7280]">
                  <ShieldCheck className="h-4 w-4 text-[#5a8a42]" />
                  No hidden fees
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-[28px] border border-[#eadfce] bg-white/75 px-5 py-6 shadow-[0_8px_30px_rgba(32,27,18,0.04)] backdrop-blur">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 text-2xl font-semibold">
              <span className="h-px w-10 bg-[#f3b63c]" />
              <span className="font-serif text-[28px] text-[#1d2747]">
                Every Program Includes
              </span>
              <span className="h-px w-10 bg-[#f3b63c]" />
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-5">
            {[
              ["Personalised Learning Plan", <BookOpen className="h-8 w-8" />],
              ["Progress Tracking", <TrendingUp className="h-8 w-8" />],
              ["Regular Feedback", <MessageCircle className="h-8 w-8" />],
              ["Practice Guidance", <Headphones className="h-8 w-8" />],
              ["Certificate of Completion", <Award className="h-8 w-8" />],
            ].map(([label, icon], idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="text-[#f3b63c]">{icon}</div>
                <div className="mt-3 max-w-[160px] text-[15px] font-semibold leading-6 text-[#1d2747]">
                  {label as string}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 rounded-[28px] border border-[#eadfce] bg-white/90 p-6 shadow-[0_8px_30px_rgba(32,27,18,0.05)] lg:grid-cols-2">
          <div className="flex items-center gap-5">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[28px] bg-[#102246] shadow-[0_10px_25px_rgba(16,34,70,0.2)]">
              <ShieldCheck className="h-12 w-12 text-[#e3ad34]" />
            </div>
            <div>
              <h3 className="font-serif text-[28px] font-semibold text-[#1d2747]">
                Your Progress. Our Commitment.
              </h3>
              <p className="mt-3 max-w-xl text-[16px] leading-8 text-[#4f5971]">
                We’re confident you’ll love learning with us. That’s why we
                offer a free trial class so you can experience our teaching and
                approach—risk free.
              </p>
            </div>
          </div>

          <div className="rounded-[24px] border-l border-[#eadfce] pl-0 lg:pl-8">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f4ebd9] text-[#f3b63c]">
                <Users className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-serif text-[24px] font-semibold text-[#1d2747]">
                  Join 1,000+ students
                </h3>
                <p className="mt-2 text-[16px] leading-7 text-[#4f5971]">
                  across 10+ countries who are learning and growing with us.
                </p>
              </div>
            </div>

            <Link href="/book" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#102246] px-6 py-4 text-[17px] font-semibold text-[#f3b63c] shadow-[0_8px_20px_rgba(18,34,65,0.18)]">
              Book Your Free Trial <ArrowRight className="h-5 w-5" />
            </Link>

            <div className="mt-4 text-center text-sm text-[#59667f]">
              <ShieldCheck className="mr-1 inline h-4 w-4 text-[#5a8a42]" />
              No commitment. Cancel anytime.
            </div>
          </div>
        </div>

        <div className="mx-auto mt-4 max-w-3xl rounded-full border border-[#eadfce] bg-white/80 px-5 py-3 text-center text-[14px] text-[#566078] shadow-sm">
          <span className="text-[#f3b63c]">▣</span> Free trial class available before enrollment
        </div>
      </section>
    </main>
  );
}
