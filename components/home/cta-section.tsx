"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Globe, Sparkles } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-br from-background via-muted to-background" />

          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [-20, 20, -20],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              x: [20, -20, 20],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-gold/15 rounded-full blur-[100px]"
          />

          {/* Floating Sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              className="absolute"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}>
              <Sparkles className="w-4 h-4 text-gold/30" />
            </motion.div>
          ))}

          {/* Content */}
          <div className="relative z-10 p-8 lg:p-20 glass-card border-gold/10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className=" text-4xl lg:text-7xl font-bold mb-8 text-balance">
                Begin Your Musical{" "}
                <span className="gradient-text">Journey Today</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-lg lg:text-xl text-muted-foreground mb-12 leading-relaxed">
                Whether you dream of playing your favorite songs, performing on
                stage, or simply finding joy in music, the perfect time to start
                is now. Book your first lesson and take the first step.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(212,175,55,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-background font-medium px-8 py-6 rounded-full text-lg">
                    <Link href="/book">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your First Lesson
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
                    className="rounded-full px-8 py-6 text-lg border-border/50 hover:bg-muted/50">
                    <Link href="#Global">
                      <Globe className="w-5 h-5 mr-2" />
                      International Students
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                {[
                  "Free trial lesson available",
                  "Flexible scheduling",
                  "All skill levels welcome",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
