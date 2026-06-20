"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Piano,
  Music2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const learnItems = [
  "Hand coordination",
  "Rhythm and timing",
  "Music reading",
  "Chords and scales",
  "Performance confidence",
  "Song playing techniques",
];

const suitableItems = [
  "Kids starting music for the first time",
  "Adults learning as a hobby",
  "Beginners and intermediate students",
  "Trinity grade exam preparation",
];

export default function PianoCourseSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-[#fffdf8]">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-100 h-100 bg-yellow-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-87.5 h-87.5 bg-amber-100 blur-3xl rounded-full" />

      {/* Musical Curves */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 500C250 300 400 700 720 500C1000 320 1200 650 1440 400"
            stroke="#D4A017"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="12 18"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 mb-6">
              <Piano className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                Piano Course
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-black">
              Learn Piano With
              <span className="block text-yellow-600">
                Creativity & Confidence
              </span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-600 max-w-xl">
              Personalized piano lessons designed for kids, beginners, hobby
              learners, and aspiring performers. Build strong musical
              foundations while enjoying every lesson.
            </p>

            {/* Floating Learn Points */}
            <div className="mt-10 space-y-4">
              {learnItems.slice(0, 4).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-yellow-700" />
                  </div>

                  <span className="text-gray-700 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-yellow-200">
                <Link href="/book">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-162.5">
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[75%] h-105 rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
              <Image
                src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=1200&auto=format&fit=crop"
                alt="Piano Student"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Image */}
            <div className="absolute bottom-0 left-0 w-[55%] h-70 rounded-[2.5rem] overflow-hidden shadow-2xl -rotate-3 border-8 border-white">
              <Image
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200&auto=format&fit=crop"
                alt="Piano Practice"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-[52%] left-[10%] bg-white px-6 py-5 rounded-3xl shadow-xl border border-yellow-100">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-yellow-600" />
                </div>

                <div>
                  <h4 className="font-bold text-xl text-black">
                    1-on-1 Classes
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Personalized learning experience
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM CREATIVE WAVE SECTION */}
        <div className="mt-28 relative">
          <div className="absolute inset-0 bg-linear-to-r from-yellow-50 to-orange-50 rounded-[3rem] -rotate-1" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 p-10 lg:p-16">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-yellow-100 flex items-center justify-center">
                  <Music2 className="w-8 h-8 text-yellow-700" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-black">
                    What Students Learn
                  </h3>

                  <p className="text-gray-500">
                    Core musical foundations & techniques
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {learnItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-5 shadow-md border border-yellow-100 flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-600 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-yellow-100 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-yellow-700" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-black">Perfect For</h3>

                  <p className="text-gray-500">Suitable for all age groups</p>
                </div>
              </div>

              <div className="space-y-5">
                {suitableItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-4xl p-6 shadow-md border border-yellow-100 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-yellow-700" />
                    </div>

                    <span className="text-gray-700 text-lg leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
