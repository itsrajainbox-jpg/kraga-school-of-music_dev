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
  Sparkles,
  Headphones,
  Users,
} from "lucide-react";

const learnItems = [
  "Melody Playing",
  "Chord Understanding",
  "Rhythm & Timing",
  "Playing By Ear",
  "Accompaniment Techniques",
  "Practical Song Learning",
];

const suitableItems = [
  "Complete Beginners",
  "Kids & Teenagers",
  "Working Professionals",
  "Modern Music Learners",
];

export default function KeyboardCourseSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-[#fffdf8]">
      {/* BACKGROUND BLOBS */}
      <div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-yellow-100/60 blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-orange-100/50 blur-3xl" />

      {/* MUSICAL CURVE */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 500C260 260 420 700 720 520C980 360 1200 640 1440 420"
            stroke="#D4A017"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="14 18"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            {/* LABEL */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 mb-7 shadow-sm">
              <Piano className="w-4 h-4" />

              <span className="text-sm font-medium tracking-[0.15em] uppercase">
                Keyboard Course
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-black">
              Start Playing
              <span className="block text-yellow-600">Music You Love</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl">
              Learn keyboard through practical and creative lessons designed for
              beginners, kids, hobby learners, and aspiring musicians. Build
              rhythm, coordination, confidence, and real song-playing skills.
            </p>

            {/* FEATURES */}
            <div className="mt-12 space-y-5">
              {learnItems.slice(0, 4).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-yellow-700" />
                  </div>

                  <span className="text-gray-700 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-9 py-7 text-lg shadow-xl shadow-yellow-200">
                <Link href="/book">
                  Book Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE COLLAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[650px]">
            {/* MAIN IMAGE */}
            <div className="absolute top-0 right-0 w-[76%] h-[430px] rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
              <Image
                src="https://i.pinimg.com/736x/87/cf/87/87cf87b09f53aeefe8855cb27212f1e0.jpg"
                alt="Keyboard Student"
                fill
                className="object-cover"
              />
            </div>

            {/* SECOND IMAGE */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[280px] rounded-[2.5rem] overflow-hidden shadow-2xl -rotate-3 border-[10px] border-white">
              <Image
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200&auto=format&fit=crop"
                alt="Keyboard Learning"
                fill
                className="object-cover"
              />
            </div>

            {/* FLOATING BADGE */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-[52%] left-[8%] bg-white px-6 py-5 rounded-3xl shadow-2xl border border-yellow-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-yellow-600" />
                </div>

                <div>
                  <h4 className="font-bold text-xl text-black">
                    1-on-1 Classes
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Personalized keyboard training
                  </p>
                </div>
              </div>
            </motion.div>

            {/* FLOATING ICON */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute top-10 left-10 w-20 h-20 rounded-full bg-yellow-100 shadow-xl flex items-center justify-center">
              <Music2 className="w-9 h-9 text-yellow-600" />
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM CREATIVE SECTION */}
        <div className="mt-32 relative">
          {/* ROTATED BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-[3rem] rotate-[-1deg]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 lg:p-16">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-3xl bg-yellow-100 flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-yellow-700" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-black">
                    What Students Learn
                  </h3>

                  <p className="text-gray-500">Practical keyboard techniques</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {learnItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-5 shadow-md border border-yellow-100 flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-600 shrink-0" />

                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-3xl bg-yellow-100 flex items-center justify-center">
                  <Users className="w-8 h-8 text-yellow-700" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-black">Ideal For</h3>

                  <p className="text-gray-500">Suitable for all learners</p>
                </div>
              </div>

              <div className="space-y-5">
                {suitableItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-[2rem] p-6 shadow-md border border-yellow-100 flex items-start gap-4">
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
