


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactForm } from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import CTAImage from "@/public/images/CTA2.webp";
import Contact from "@/public/images/Contact.webp";

import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Plus,
  Minus,
  GraduationCap,
  Users,
  Sparkles,
  Video,
  Piano,
  Music2,
  Clock,
  CheckCircle2,
  ChevronDown,
  Globe,
  Headphones,
  CalendarClock,
  CirclePlus,
  Gift,
  UserCheck,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    value: "info@kragaschoolofmusic.com",
    description: "Reach out anytime for lesson inquiries and support.",
    action: "mailto:info@kragaschoolofmusic.com",
    buttonText: "Send Email",
  },

  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 8807838099",
    description: "Fast replies for bookings and class information.",
    action: "https://wa.me/918807838099",
    buttonText: "Chat on WhatsApp",
  },

  {
    icon: Phone,
    title: "Call Us",
    value: "+91 8807838099",
    description: "Speak directly for quick guidance and scheduling.",
    action: "tel:+918807838099",
    buttonText: "Call Now",
  },
];

const faq = [
  {
    icon: GraduationCap,
    question: "Do I need prior experience?",
    answer: "No. Beginners are welcome.",
  },

  {
    icon: Users,
    question: "Are the classes one-on-one?",
    answer: "Yes. Every class is fully personalized.",
  },

  {
    icon: Sparkles,
    question: "What age groups do you teach?",
    answer: "Kids, teenagers, and adults.",
  },

  {
    icon: Video,
    question: "How are online classes conducted?",
    answer: "Classes are conducted through Zoom or Google Meet.",
  },

  {
    icon: Piano,
    question: "Can adults learn piano online?",
    answer: "Yes. Many adult students learn as a hobby or personal goal.",
  },

  {
    icon: Music2,
    question: "What keyboard do I need to start?",
    answer: "A basic keyboard is enough for beginners.",
  },

  {
    icon: Clock,
    question: "Are flexible timings available?",
    answer: "Yes. Morning, evening, and weekend slots are available.",
  },

  {
    icon: CheckCircle2,
    question: "Do you prepare students for Trinity grade exams?",
    answer:
      "Yes. Structured guidance is available for students preparing for graded music examinations.",
  },
];
const countries = [
  { name: "India", flag: "🇮🇳" },
  { name: "USA", flag: "🇺🇸" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "More", flag: "• • •" },
];

const features = [
  {
    title: "100% Free Trial",
    desc: "No payment. No commitment.",
    icon: Gift,
  },
  {
    title: "Expert Guidance",
    desc: "From day one",
    icon: UserCheck,
  },
  {
    title: "Flexible & Convenient",
    desc: "Learn on your schedule",
    icon: CalendarClock,
  },
];

const renderAmpersand = (text: string) =>
  text.split("&").map((part, index, array) => (
    <span key={index}>
      {part}
      {index < array.length - 1 && <span className="inter">&</span>}
    </span>
  ));

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <div className="pt-20 bg-background text-foreground overflow-hidden playfair">
      {/* HERO */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-b from-background via-background to-muted/20" />

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/10 blur-[160px] rounded-full" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}>
              <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">
                Contact Kraga School Of Music
              </span>

              <h1 className=" text-5xl lg:text-7xl font-bold mt-6 leading-tight">
                Contact Kraga{" "}
                <span className="text-[#f3b63c]">
                  {renderAmpersand("Online Piano & Keyboard Lessons")}
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mt-8 max-w-2xl">
                Reach out for online piano and keyboard classes, free trial
                bookings, schedules, and personalized learning guidance.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-10">
                <Link href="/book">
                  {" "}
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-background rounded-full px-8">
                    Book Free Trial
                  </Button>
                </Link>

                <Link href="/courses">
                  <Button
                    size="lg"
                    variant="outline"
                    className="
                    rounded-full
                    border-border/50
                    bg-background/50
                    backdrop-blur-xl
                    hover:bg-muted
                  ">
                    Explore Courses
                  </Button>
                </Link>
              </div>

              {/* STATS */}
              <div className="flex flex-wrap gap-4 mt-16">
                {[
                  {
                    icon: Globe,
                    title: "Worldwide Students",
                  },

                  {
                    icon: Video,
                    title: "Online Live Classes",
                  },

                  {
                    icon: Headphones,
                    title: "Personalized Learning",
                  },

                  {
                    icon: Sparkles,
                    title: "Free Trial Available",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -6,
                    }}
                    className="
        group
        relative
        w-[140px]
        h-[220px]
        rounded-[1.8rem]
        overflow-hidden
        bg-[#f8f3ea]
        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        border border-[#eee2cf]
      ">
                    {/* Piano Key Top */}
                    <div className="absolute top-0 inset-x-0 flex h-10">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div
                          key={i}
                          className="
              flex-1
              border-r
              border-[#d9d1c7]
              bg-white
              relative
            ">
                          {/* Black Keys */}
                          {[0, 1, 3, 4, 5].includes(i) && (
                            <div className="absolute right-[-8px] top-0 w-4 h-6 bg-black rounded-b-md z-10" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Glow */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-28 h-28 bg-[#f3d8a2]/40 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md mb-6">
                        <item.icon className="w-8 h-8 text-[#b88632]" />
                      </div>

                      <p className="text-sm font-semibold leading-relaxed text-[#2d2d2d]">
                        {renderAmpersand(item.title)}
                      </p>

                      <div className="w-10 h-[2px] bg-[#c79a4a] rounded-full mt-5" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FLOATING CONTACT CARDS */}
            <div className="relative h-[500px] hidden lg:block isolate">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{
                    y: -10,
                    scale: 1.04,
                  }}
                  className={`
  absolute
  rounded-[2.5rem]
  border border-border/50
  bg-white/70 dark:bg-background/60
  supports-[backdrop-filter]:bg-background/60
  backdrop-blur-2xl
  p-8
  transition-all duration-300
  hover:z-50
  z-10
  shadow-[0_10px_40px_rgba(0,0,0,0.08)]
  dark:shadow-[0_0_40px_rgba(255,215,0,0.08)]

  ${index === 0 ? "top-0 left-0 w-[320px]" : ""}

  ${index === 1 ? "top-28 right-0 w-[340px]" : ""}

  ${index === 2 ? "bottom-0 left-16 w-[300px]" : ""}
`}>
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                    <method.icon className="w-8 h-8 text-gold" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">
                    {renderAmpersand(method.title)}
                  </h3>

                  <p className="gradient-text font-medium mb-3">
                    {renderAmpersand(method.value)}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                    {renderAmpersand(method.description)}
                  </p>

                  <Button
                    asChild
                    className="rounded-full bg-gold hover:bg-gold-dark text-background">
                    <a
                      href={method.action}
                      target={
                        method.title === "WhatsApp" ? "_blank" : undefined
                      }>
                      {renderAmpersand(method.buttonText)}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      {/* FORM SECTION */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#fffdf8]">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f3d8a2]/20 blur-[120px] rounded-full" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative">
              {/* Main Image */}
              <div className="relative h-[650px] rounded-[3rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.12)]">
                <Image
                  src={Contact}
                  alt="Piano Class"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
            absolute
            -bottom-10
            right-6
            bg-white/90
            backdrop-blur-xl
            rounded-[2rem]
            px-6
            py-5
            shadow-2xl
            max-w-xs
          ">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#f4e4c8] flex items-center justify-center">
                    <Music2 className="w-7 h-7 text-[#b88632]" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-[#2d2d2d]">
                      Creative Music Learning
                    </h3>

                    <p className="text-sm text-[#777]">
                      Personalized online piano & keyboard classes
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Shape */}
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border border-[#e8d7b9]" />
            </motion.div>

            {/* RIGHT FORM SIDE */}

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-[#fbf7f0] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_35%),radial-gradient(circle_at_left,_rgba(236,196,102,0.08),_transparent_20%),radial-gradient(circle_at_right,_rgba(236,196,102,0.08),_transparent_20%)]" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-[#d4a23a]" />
              <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#b88922]">
                FAQ Section
              </span>
              <span className="h-px w-16 bg-[#d4a23a]" />
            </div>

            <h2 className="font-serif text-4xl font-black tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#5f5f5f] sm:text-lg">
              Everything you need to know before you begin.
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-5">
            {faq.map((item, index) => {
              const Icon = item.icon;
              const isOpen = openFAQ === index;

              return (
                <motion.div
                  key={index}
                  layout
                  className="rounded-[28px] border border-[#f1e6d6] bg-white/90 p-4 shadow-[0_10px_30px_rgba(17,24,39,0.05)] backdrop-blur-sm transition-all">
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left">
                    <div className="flex items-center gap-5">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#fff4df] text-[#c78b17] shadow-[inset_0_0_0_1px_rgba(199,139,23,0.08)]">
                        <Icon className="h-9 w-9" strokeWidth={1.9} />
                      </div>

                      <div>
                        <h3 className="font-serif text-xl font-bold text-[#111827] sm:text-[1.35rem]">
                          {renderAmpersand(item.question)}
                        </h3>
                        {/* <p className="mt-2 max-w-2xl text-sm leading-6 text-[#666] sm:text-base">
                          {item.answer}
                        </p> */}
                      </div>
                    </div>

                    <div className="ml-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#d6a23a] text-[#d6a23a]">
                      {isOpen ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <CirclePlus className="h-5 w-5" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden">
                        <div className="pl-[92px] pr-6 pt-4 pb-2">
                          <p className="max-w-3xl leading-7 text-[#666]">
                            {renderAmpersand(item.answer)}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div
            className="mt-16 overflow-hidden rounded-[30px] bg-[#071936] bg-cover bg-center bg-no-repeat shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            style={{ backgroundImage: `url(${CTAImage.src})` }}>
            <div className="grid items-stretch lg:grid-cols-2">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-12 bg-[#d7a23a]" />
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d7a23a]">
                    Ready to Begin?
                  </span>
                  <span className="h-px w-12 bg-[#d7a23a]" />
                </div>

                <h3 className="mt-6 font-serif text-4xl font-black leading-tight text-white sm:text-5xl">
                  Ready to Begin
                  <span className="block text-[#d7a23a]">
                    Your Piano Journey?
                  </span>
                </h3>

                <div className="mt-5 h-1 w-16 bg-[#d7a23a]" />

                <p className="mt-7 max-w-xl text-lg leading-8 text-white/85">
                  Book a free, no-commitment trial class today. Meet your
                  teacher, play your first notes, and decide when you're ready.
                </p>

                <Link href="/book">
                  <button className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#d7a23a] px-7 py-4 text-lg font-semibold text-white transition hover:bg-[#c7911d]">
                    <CalendarClock className="h-5 w-5" />
                    Book Your Free Trial Class
                    <ChevronDown className="h-5 w-5 rotate-[-90deg]" />
                  </button>
                </Link>

                <div className="mt-10 grid gap-4 sm:grid-cols-3 ">
                  {features.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-3 text-white/90">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d7a23a]/40 bg-[#d7a23a]/10 text-[#d7a23a]">
                          <Icon className="h-4 w-4" />
                        </div>

                        <div className="min-w-0">
                          <div className="whitespace-nowrap text-xs font-semibold">
                            {renderAmpersand(item.title)}
                          </div>
                          <div className="text-xs text-white/65">
                            {renderAmpersand(item.desc)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative min-h-[320px] lg:min-h-full">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,25,54,0.15),rgba(7,25,54,0.05))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(215,162,58,0.35),transparent_22%),radial-gradient(circle_at_90%_45%,rgba(255,255,255,0.18),transparent_18%)]" />
                <div className="flex h-full items-end justify-end p-4 sm:p-6 lg:p-8">
                  <div className="h-full w-full rounded-[24px] bg-[url('/your-image.jpg')] bg-cover bg-center" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[26px] border border-[#f2e6d4] bg-[#fff8ee] px-6 py-5 shadow-[0_8px_24px_rgba(17,24,39,0.04)]">
            <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff1d5] text-[#c78b17]">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <p className="font-serif text-xl font-bold text-[#111827]">
                    Loved by students across 10+ countries
                  </p>
                  <p className="mt-1 text-sm text-[#666]">
                    Join our global community of music learners today.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
                {countries.map((country) => (
                  <div
                    key={country.name}
                    className="flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                      {country.flag}
                    </div>
                    <span className="text-xs font-medium text-[#555]">
                      {country.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
