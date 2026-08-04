export const metadata = {
  title: "Kraga School of Music | Book",
  description: "Learn piano online with Kraga. Structured lessons, flexible schedule, expert teachers.",
  alternates: { canonical: "/book/" }
};




"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookingForm } from "@/components/booking/booking-form";

export default function BookPage() {
  return (
    <div className="bg-white text-black overflow-hidden py-28 md:py-24 lg-16 ">
      {/* SEO Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
          Book Your Free Online Piano Trial Lesson
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          No commitment. No payment required. Just 30 minutes with one of our
          instructors.
        </p>
      </div>
      {/* BOOKING FORM */}
      <section className=" bg-white" id="booking">
        <div className="container mx-auto px-6 lg:px-12">
          <BookingForm />
        </div>
      </section>

      {/* Trust Signal */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Your information is safe with us. We will confirm your slot within 24
          hours.
        </p>

        <a
          href="https://wa.me/YOUR_WHATSAPP_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-primary font-medium hover:underline"
        >
          Prefer to book via WhatsApp? Click here.
        </a>
      </div>
    </div>
  );
}
