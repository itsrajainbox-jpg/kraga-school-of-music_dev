"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Clock3, Users, BadgeCheck } from "lucide-react";

export function HeroSection() {
  const features = [
    {
      title: "Certified Teacher",
      desc: "Learn from qualified music educators.",
      icon: BadgeCheck,
    },
    {
      title: "Flexible Scheduling",
      desc: "Morning to night classes available.",
      icon: Clock3,
    },
    {
      title: "Kids & Adults",
      desc: "Programs for every skill level.",
      icon: Users,
    },
    {
      title: "Grade Preparation",
      desc: "Structured Trinity exam training.",
      icon: GraduationCap,
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
    <section className="relative min-h-screen overflow-hidden playfair">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Hero/HeroBG.png')",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pt-20 lg:pt-24">
        <div className="flex min-h-screen items-center">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center rounded-full bg-[#182433]/80 px-4 py-2 text-xs sm:text-sm font-medium text-[#f3b63c] backdrop-blur">
              ✨ LIVE ONLINE PIANO LESSONS
            </div>

            <h1 className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight playfair">
              Live One-on-One
              <br />
              Online Piano <span className="inter">&</span> Keyboard
              <br />
              <span className="text-[#f3b63c]">Lessons</span>
            </h1>

            <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-300">
              Expert lead lessons for kids and adults personalised to your
              pace, scheduled around your life. Start with a free trial class,
              no commitment required.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="rounded-xl bg-[#f3b63c] px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white transition hover:bg-amber-600">
                Book Your Free Trial Class →
              </Link>

              <Link href="/courses" className="rounded-xl border border-[#f3b63c] px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white transition hover:bg-white/10">
                Explore Courses
              </Link>
            </div>

            {/* Students */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "https://i.pinimg.com/736x/e2/35/d9/e235d9770d5858ebad005e06a3e71327.jpg",
                  "https://i.pinimg.com/1200x/48/f2/6b/48f26bf059acc727509390bec373c928.jpg",
                  "https://i.pinimg.com/736x/01/9b/d2/019bd2df6e305b648c74f78bd0cc3cda.jpg",
                  "https://i.pinimg.com/736x/7d/14/70/7d14707008fc181468c9fbbd2c578afc.jpg",
                ].map((item) => (
                  <img
                    key={item}
                    src={item}
                    alt=""
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-slate-900 object-cover bg-slate-700"
                  />
                ))}
              </div>

              <div>
                <p className="font-semibold text-sm sm:text-base">
                  Trusted by students across 10+ countries
                </p>
                <p className="text-sm text-slate-400">
                  No credit card required
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-[#f3b63c]/30"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3b63c]/10">
                      <Icon className="h-6 w-6 text-[#f3b63c]" />
                    </div>

                    <h3 className="font-semibold text-sm sm:text-base text-white">
                      {renderAmpersand(item.title)}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-400">
                      {renderAmpersand(item.desc)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
