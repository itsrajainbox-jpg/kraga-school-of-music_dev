"use client";

import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  User,
  Music,
  Star,
  Globe,
  ChartNoAxesCombined,
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import BookFreeTrial from "@/public/HowItWork/BookFreeTrial.png";
import MeetYourTeacher from "@/public/HowItWork/MeetStaff.png";
import StartPianoJourney from "@/public/HowItWork/StartJourney.png";
import { motion } from "framer-motion";

import Test1 from "@/public/HowItWork/Test1.png";
import Test2 from "@/public/HowItWork/Test2.jpeg";
import Test3 from "@/public/HowItWork/Test3.jpeg";
import Test6 from "@/public/HowItWork/Test6.png"
import Test4 from "@/public/HowItWork/Test4.jpg"
import Test5 from "@/public/HowItWork/Test5.jpg"


export function PianoJourneySection() {
  const steps = [
    {
      id: "01",
      title: "Book a Free Trial",
      image: BookFreeTrial,
      description:
        "Choose a time that suits you and book your free 30-minute class online.",
      points: [
        "30-minute 1:1 class",
        "No payment required",
        "No commitment, just music",
      ],
      badge: null,
    },
    {
      id: "02",
      title: "Meet Your Teacher",
      image: MeetYourTeacher,
      description:
        "Your first lesson is relaxed and conversational. Raja assesses your level, understands your goals, and teaches you something real.",
      badge: "Personal. Friendly. Focused on you.",
      icon: User,
    },
    {
      id: "03",
      title: "Start Your Piano Journey",
      image: StartPianoJourney,
      description:
        "Once enrolled, you follow a structured lesson plan built around your goals and interests.",
      badge: "Practice. Progress. Play.",
      icon: ChartNoAxesCombined,
    },
  ];

  const countries = [
    { code: "IN", name: "India" },
    { code: "US", name: "USA" },
    { code: "GB", name: "UK" },
    { code: "CA", name: "Canada" },
    { code: "AU", name: "Australia" },
  ];

  const testimonials = [
    {
      name: "Priya Iyer",
      role: "Parent of Aarav Iyer",
      country: "Chennai, India",
      image: Test1,
      review:
        "My son passed Trinity Grade 3 with Merit in just 8 months! The teaching style and patience are amazing.",
      code: "IN",
    },
    {
      name: "James Wilson",
      role: "Adult Learner",
      country: "London, UK",
      image: Test2,
      review:
        "Flexible timing and structured lessons helped me learn piano while working full-time.",
      code: "GB",
    },
    {
      name: "Ananya Sharma",
      role: "Trinity Grade 8 Student",
      country: "Dubai, UAE",
      image: Test3,
      review:
        "I cleared Trinity Grade 8 with Distinction. The feedback and guidance were exceptional.",
      code: "AE",
    },
    {
      name: "Sophia Brown",
      role: "Parent of Mathew Brown",
      country: "Sydney, Australia",
      image: Test6,
      review:
        "The online classes are engaging and well-structured. My Son enjoys every lesson and has improved tremendously.",
      code: "AU",
    },
    {
      name: "Michael Tan",
      role: "Adult Learner",
      country: "Singapore",
      image: Test4,
      review:
        "The instructor explains concepts clearly and adapts lessons to my pace. Learning piano has become one of the highlights of my week.",
      code: "SG",
    },
    {
      name: "Sarah Johnson",
      role: "Trinity Grade 5 Student",
      country: "Toronto, Canada",
      image: Test5,
      review:
        "The exam preparation was excellent. I gained confidence and achieved a Distinction in my Trinity examination.",
      code: "CA",
    },
  ];

  const loopingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-[#faf7f2] py-12 md:py-20 playfair">
      {/* Floating background music text */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-[-5rem] text-7xl md:text-9xl font-bold text-[#f3b63c]/10 select-none animate-pulse">
          I ♫⋆｡♪ ₊˚♬ ﾟ.
        </div>
        <div className="absolute top-40 right-[-4rem] text-6xl md:text-8xl font-bold text-slate-900/5 rotate-[-12deg] select-none animate-float">
          ♪ ♫ ♬
        </div>
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-5xl md:text-7xl font-bold text-[#f3b63c]/10 rotate-12 select-none animate-pulse">
          🎵 MUSIC 🎶
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-widest text-[#f3b63c] font-semibold text-sm">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Your Piano Journey{" "}
            <span className="text-[#f3b63c] italic">in 3 Easy Steps</span>
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Simple. Personal. Effective. From your first click to your first
            song.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.id} className="relative">
                <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-2 left-2 z-20 w-14 h-14 rounded-full bg-[#f3b63c] text-white flex items-center justify-center text-xl font-bold shadow-lg">
                    {step.id}
                  </div>

                  <div className="grid lg:grid-cols-[45%_55%] items-center">
                    <div className="relative h-[320px] lg:h-[380px]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="p-8">
                      <h3 className="text-xl font-bold text-slate-900">
                        {step.title}
                      </h3>

                      <div className="w-16 h-1 bg-[#f3b63c] rounded-full mt-4 mb-8" />

                      <p className="text-sm text-slate-600 leading-relaxed mb-8 max-w-xl">
                        {step.description}
                      </p>

                      {step.id === "01" ? (
                        <ul className="space-y-4">
                          {step.points?.map((point) => (
                            <li
                              key={point}
                              className="flex items-center gap-3 text-sm text-slate-800"
                            >
                              <div className="w-5 h-5 rounded-full bg-[#f3b63c] text-white flex items-center justify-center text-xs">
                                ✓
                              </div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="mt-6 flex items-center gap-4 bg-amber-50 rounded-2xl px-5 py-4 border border-amber-100">
                          {Icon && (
                            <Icon
                              size={20}
                              className="text-[#f3b63c] flex-shrink-0"
                            />
                          )}

                          <p className="text-slate-800 text-xs leading-relaxed">
                            {step.badge}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -right-14 z-30 w-12 h-12 rounded-full bg-[#f3b63c] text-white items-center justify-center shadow-lg">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-10 bg-gradient-to-r from-slate-950 to-blue-950 rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <Calendar className="text-[#f3b63c] w-12 h-12" />

            <div>
              <h3 className="text-white text-2xl font-bold">Ready to Begin?</h3>
              <p className="text-gray-300">
                Book your free trial class today and experience the difference.
              </p>
            </div>
          </div>

          <Link
            href="/book"
            className="bg-[#f3b63c] hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition"
          >
            Book My Free Trial Now
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Testimonials */}
        <div className="mt-20 text-center">
          <p className="uppercase text-[#f3b63c] font-semibold tracking-widest">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900">
            Loved by Students <span className="inter">&</span> Parents Worldwide
          </h2>

          <p className="text-slate-600 mt-3">
            Real stories from learners achieving their music goals.
          </p>
        </div>

        <div className="overflow-hidden mt-12">
          <motion.div
            className="flex gap-6 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {loopingTestimonials.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="w-[500px] flex-shrink-0 bg-white rounded-3xl p-6 shadow-lg border"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex text-[#f3b63c]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>

                    <p className="mt-5 text-slate-700 leading-relaxed">
                      "{item.review}"
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-slate-500 text-sm">{item.role}</p>

                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-slate-500 text-sm">{item.country}</p>
                    <ReactCountryFlag
                      countryCode={item.code}
                      svg
                      style={{ width: 20, height: 20 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Global Community */}
        <div className="mt-12 bg-white rounded-3xl border shadow-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-slate-950 text-[#f3b63c] flex items-center justify-center">
              <Globe size={28} />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900">
                A Global Community of Music Learners
              </h3>
              <p className="text-slate-600 mt-1">
                Proudly teaching students online worldwide
              </p>
            </div>

            {countries.map((country) => (
              <div key={country.code} className="flex items-center gap-2">
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                  }}
                />
                <h1 className="font-medium text-slate-800 text-center">
                  {country.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
