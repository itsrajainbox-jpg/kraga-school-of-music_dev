export const metadata = {
  title: "Kraga School of Music | International",
  description: "Learn piano online with Kraga. Structured lessons, flexible schedule, expert teachers.",
  alternates: { canonical: "/international/" }
};




"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Clock,
  Languages,
  CreditCard,
  Wifi,
  CheckCircle2,
  MapPin,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import WorldMap from "@/components/home/world-map";

const regions = [
  { name: "North America", countries: "USA, Canada, Mexico", students: "200+" },
  { name: "Europe", countries: "UK, Germany, France, Spain", students: "150+" },
  {
    name: "Asia",
    countries: "India, Japan, China, Singapore",
    students: "100+",
  },
  { name: "Oceania", countries: "Australia, New Zealand", students: "50+" },
  {
    name: "Middle East",
    countries: "UAE, Saudi Arabia, Israel",
    students: "40+",
  },
  {
    name: "South America",
    countries: "Brazil, Argentina, Chile",
    students: "30+",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Lessons available from early morning to late evening to accommodate students in any time zone.",
  },
  {
    icon: Globe,
    title: "Timezone Conversion",
    description:
      "Our booking system automatically converts all times to your local timezone for easy scheduling.",
  },
  {
    icon: Languages,
    title: "Clear Communication",
    description:
      "Lessons conducted in English with clear, patient instruction suitable for non-native speakers.",
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Options",
    description:
      "Accept payments in various currencies via credit card, PayPal, and international bank transfer.",
  },
  {
    icon: Wifi,
    title: "Low Bandwidth Mode",
    description:
      "Optimized video settings available for students with limited internet connectivity.",
  },
  {
    icon: Users,
    title: "Global Community",
    description:
      "Join students from over 30 countries in our international learning community.",
  },
];

const testimonials = [
  {
    quote:
      "Living in Tokyo, I thought finding a quality piano teacher would be impossible. These online lessons have exceeded all my expectations.",
    author: "Yuki T.",
    location: "Tokyo, Japan",
  },
  {
    quote:
      "The timezone flexibility is amazing. I can take lessons early morning before work, which fits perfectly with my schedule in Mumbai.",
    author: "Rahul S.",
    location: "Mumbai, India",
  },
  {
    quote:
      "As an expat moving frequently, online lessons give me consistency. Same teacher, same quality, no matter where I am.",
    author: "Emma W.",
    location: "Dubai, UAE",
  },
];

const timezoneSlots = [
  {
    region: "Europe / Middle East",
    time: "Morning ET",
    desc: "6 AM - 10 AM ET (Afternoon/Evening local)",
  },
  {
    region: "Americas",
    time: "Daytime ET",
    desc: "10 AM - 6 PM ET (Standard hours)",
  },
  {
    region: "Asia Pacific",
    time: "Evening ET",
    desc: "6 PM - 10 PM ET (Morning local)",
  },
];

export default function InternationalPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-muted/50 to-background" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gold/20 rounded-full blur-[120px]"
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
              <Globe className="w-4 h-4 text-gold" />
              Students from 30+ Countries
            </motion.div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
              Piano Lessons for{" "}
              <span className="gradient-text">International Students</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No matter where you are in the world, quality piano instruction is
              just a click away. Join our global community of music learners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <span className="text-gold text-sm font-medium tracking-wider uppercase">
              Worldwide
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mt-4 mb-4">
              Our <span className="gradient-text">Global Reach</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We have taught students across six continents. Here&apos;s a
              snapshot of our international student body.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <WorldMap />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-muted/30 to-background" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
              Why International Students{" "}
              <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We&apos;ve designed our program specifically to accommodate
              students from around the world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-6">
                <div className="p-3 rounded-xl bg-gold/10 w-fit mb-4">
                  <benefit.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timezone Scheduling */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
                Timezone-Friendly{" "}
                <span className="gradient-text">Scheduling</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                We understand that coordinating across time zones can be
                challenging. That&apos;s why our booking system is designed to
                make scheduling as seamless as possible.
              </p>
              <ul className="space-y-4">
                {[
                  "Automatic timezone detection and conversion",
                  "Extended hours to cover all major time zones",
                  "Consistent weekly slots to build a routine",
                  "Easy rescheduling with 24-hour notice",
                  "Calendar integration (Google, Apple, Outlook)",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 glow">
              <h3 className="font-serif text-2xl font-bold mb-2">
                Sample Availability
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Times shown in Eastern Time (ET)
              </p>
              <div className="space-y-4">
                {timezoneSlots.map((slot, index) => (
                  <motion.div
                    key={slot.region}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{slot.region}</span>
                      <span className="text-gold text-sm font-medium">
                        {slot.time}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {slot.desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-muted/30 to-background" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">
              From Our International{" "}
              <span className="gradient-text">Students</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center glass-card rounded-3xl p-12 glow">
            <Globe className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              Join Our Global Community
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              No matter where you are, your musical journey can begin today.
              Book a free trial lesson and experience world-class piano
              instruction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-background rounded-full px-8 py-6 text-lg">
                  <Link href="/book">
                    Book a Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg border-border/50">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
