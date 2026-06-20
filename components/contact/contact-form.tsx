"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle2,
  Send,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const subjects = [
  { value: "general", label: "General Inquiry" },
  { value: "lessons", label: "About Lessons" },
  { value: "pricing", label: "Pricing & Packages" },
  { value: "scheduling", label: "Scheduling Questions" },
  { value: "technical", label: "Technical Support" },
  { value: "other", label: "Other" },
];

// const contactInfo = [
//   { icon: Mail, label: "Email", value: "info@kragaschoolofmusic.com" },
//   { icon: Phone, label: "Phone", value: "+31 6 1234 5678" },
//   { icon: MapPin, label: "Location", value: "Rotterdam, NL" },
// ];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setLoading(false);
      setIsSubmitted(true)
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_rgba(17,24,39,0.08)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-violet-50" />
        <div className="relative text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 16,
              delay: 0.1,
            }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-amber-600 shadow-inner"
          >
            <CheckCircle2 className="h-10 w-10" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-3xl font-semibold text-slate-900"
          >
            Message <span className="text-amber-600">Sent</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600"
          >
            Thanks for reaching out. We&apos;ll get back to you within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="outline"
              className="mt-8 rounded-full border-slate-200 bg-white px-6 hover:border-amber-300 hover:bg-amber-50"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", subject: "", message: "" });
              }}
            >
              Send Another Message
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="">
      <motion.form
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        onSubmit={handleSubmit}
        className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_rgba(17,24,39,0.08)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/40 to-violet-50/40" />

        <div className="relative space-y-6">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-amber-600 uppercase">
              Send A Message
            </p>
            <h3 className="mt-2 font-serif text-3xl font-semibold text-slate-900">
              {" "}
              We’d Love To Hear From You
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Fill out the form below and we’ll help you with free trial
              classes, schedules, and personalized music learning guidance.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contact-name" className="text-slate-700">
                Name *
              </Label>
              <Input
                id="contact-name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your name"
                className="h-12 rounded-2xl border-slate-200 bg-white/80 px-4 shadow-sm focus:border-[#f3b63c] focus:ring-amber-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email" className="text-slate-700">
                Email *
              </Label>
              <Input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="your@email.com"
                className="h-12 rounded-2xl border-slate-200 bg-white/80 px-4 shadow-sm focus:border-[#f3b63c] focus:ring-amber-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-subject" className="text-slate-700">
              Subject *
            </Label>
            <Select
              value={formData.subject}
              onValueChange={(value) =>
                setFormData({ ...formData, subject: value })
              }
            >
              <SelectTrigger className="h-12 rounded-2xl border-slate-200 bg-white/80 px-4 shadow-sm focus:ring-amber-200">
                <SelectValue placeholder="What is this about?" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject.value} value={subject.value}>
                    {subject.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message" className="text-slate-700">
              Message *
            </Label>
            <Textarea
              id="contact-message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="How can we help you?"
              rows={6}
              className="min-h-[160px] rounded-2xl border-slate-200 bg-white/80 px-4 py-3 shadow-sm focus:border-[#f3b63c] focus:ring-amber-200 resize-none"
            />
          </div>

          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Button
              type="submit"
              className="h-12 w-full rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800"
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.subject ||
                !formData.message
              }
            >
              <Send className="mr-2 h-4 w-4" />
              {loading? "Sending...." : "Send Message"}
            </Button>
          </motion.div>

          <p className="text-center text-xs text-slate-500">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </motion.form>
    </div>
  );
}
