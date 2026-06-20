"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Users, Clock, Award } from "lucide-react";
import WorldMap from "@/components/home/world-map";

const countries = [
  { name: "USA", students: 120, x: "20%", y: "35%" },
  { name: "UK", students: 85, x: "48%", y: "28%" },
  { name: "Germany", students: 45, x: "52%", y: "30%" },
  { name: "India", students: 95, x: "68%", y: "45%" },
  { name: "Australia", students: 35, x: "82%", y: "72%" },
  { name: "Canada", students: 55, x: "22%", y: "25%" },
  { name: "Japan", students: 40, x: "85%", y: "38%" },
  { name: "Brazil", students: 30, x: "30%", y: "65%" },
];

const stats = [
  { icon: Users, value: "500+", label: "Students Worldwide" },
  { icon: Globe, value: "30+", label: "Countries Reached" },
  { icon: Clock, value: "24/7", label: "Flexible Scheduling" },
  { icon: Award, value: "98%", label: "Student Satisfaction" },
];

export function GlobalStudentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-40 relative overflow-hidden"
      id="Global">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-muted/30 to-background" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-wider uppercase">
            Global Reach
          </span>
          <h2 className=" text-4xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
            Students from{" "}
            <span className="gradient-text">Around the World</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join a diverse community of piano enthusiasts from over 30
            countries, all learning and growing together.
          </p>
        </motion.div>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto mb-20">
          <div className="relative aspect-2/1 glass-card rounded-3xl overflow-hidden p-8">
            {/* Simplified World Map Grid */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                  linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)
                `,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <WorldMap />

            {/* Central Hub
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-6 h-6 bg-gold rounded-full shadow-lg shadow-gold/50 flex items-center justify-center">
                <div className="w-3 h-3 bg-background rounded-full" />
              </motion.div>
            </motion.div> */}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card rounded-2xl p-6 text-center glow-hover transition-shadow">
              <stat.icon className="w-8 h-8 text-gold mx-auto mb-4" />
              <div className="text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
