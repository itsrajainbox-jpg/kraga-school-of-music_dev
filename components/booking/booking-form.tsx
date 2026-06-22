"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

import { Badge } from "@/components/ui/badge";

import { CheckCircle2, Globe, Sparkles, Loader2 } from "lucide-react";

export function BookingForm() {
  const [date, setDate] = useState<Date | undefined>();

  const [selectedTime, setSelectedTime] = useState("");

  const [loading, setLoading] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [timezone, setTimezone] = useState("UTC");

  const [ipTimezone, setIpTimezone] = useState("");

  const [vpnDetected, setVpnDetected] = useState(false);

  const teacherTimezone = "Asia/Kolkata";

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    instrument: "",

    email: "",
    phone: "",
    country: "",
    message: "",
  });

  useEffect(() => {
    async function detectTimezone() {
      const browserTimezone =
        Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

      setTimezone(browserTimezone);

      try {
        const response = await fetch("https://ipapi.co/json/");

        const data = await response.json();

        const detectedIpTimezone = data.timezone;

        setIpTimezone(detectedIpTimezone);

        setVpnDetected(browserTimezone !== detectedIpTimezone);

        console.log("Browser Timezone:", browserTimezone);
        console.log("IP Timezone:", detectedIpTimezone);
        console.log("Possible VPN:", browserTimezone !== detectedIpTimezone);
      } catch (error) {
        console.error("Failed to detect IP timezone", error);
      }
    }

    detectTimezone();
  }, []);

  function createUTCSlot(selectedDate: Date, teacherHour: number) {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: teacherTimezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(selectedDate);

    const year = parts.find((p) => p.type === "year")?.value || "2025";

    const month = parts.find((p) => p.type === "month")?.value || "01";

    const day = parts.find((p) => p.type === "day")?.value || "01";

    const utcDate = new Date(
      Date.UTC(
        Number(year),
        Number(month) - 1,
        Number(day),
        teacherHour - 5,
        -30,
        0,
      ),
    );

    return utcDate;
  }

  const isPastTimeSlot = (utcISO: string) => new Date(utcISO) <= new Date();

  const convertedSlots = [];

  if (date) {
    for (let hour = 9; hour <= 20; hour++) {
      const slotUTC = createUTCSlot(date, hour);

      const studentFormatted = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: ipTimezone,
      }).format(slotUTC);

      const teacherFormatted = new Intl.DateTimeFormat("en-IN", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: teacherTimezone,
      }).format(slotUTC);

      convertedSlots.push({
        teacher: teacherFormatted,
        student: studentFormatted,
        utc: slotUTC.toISOString(),
      });
    }
  }

  console.log("The DSlots", convertedSlots);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !selectedTime) return;

    try {
      setLoading(true);

      const bookingDate = new Date(date);

      const [time, modifier] = selectedTime.split(" ");
      let [hours, minutes] = time.split(":").map(Number);

      if (modifier === "PM" && hours !== 12) hours += 12;
      if (modifier === "AM" && hours === 12) hours = 0;

      bookingDate.setHours(hours, minutes, 0, 0);

      const utcDate = bookingDate.toISOString();

      const studentDateTime = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        dateStyle: "full",
        timeStyle: "short",
      }).format(bookingDate);

      const teacherDateTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: ipTimezone,
        dateStyle: "full",
        timeStyle: "short",
      }).format(bookingDate);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz94fKZilyVvzXrss7xFN6rS9-KNMPTbZzO7BnZ0I-MDDHjY1a3P5NO7NkZSKBpJs19/exec",
        {
         method: "POST",
          mode: "no-cors",
          
          body: JSON.stringify({
            ...formData,
            studentTimezone: ipTimezone,
            ipTimezone,
            vpnDetected,
            teacherTimezone,
            bookingUTC: utcDate,
            studentDateTime,
            teacherDateTime,
          }),
        },
      );

      // const data = await response.json();

      // if (!data.success) {
      //   throw new Error("Booking failed");
      // }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="max-w-3xl mx-auto"
      >
        <div
          className="
            rounded-[2.5rem]
            border border-border/50
            bg-white/70 dark:bg-background/60
            backdrop-blur-2xl
            p-10 lg:p-14
            text-center
          "
        >
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              type: "spring",
              delay: 0.2,
            }}
            className="
              w-24 h-24
              rounded-full
              bg-gold/10
              flex items-center justify-center
              mx-auto mb-8
            "
          >
            <CheckCircle2 className="w-12 h-12 text-gold" />
          </motion.div>

          <h2 className="text-4xl font-bold mb-5">Booking Confirmed!</h2>

          <div className="text-lg font-semibold mb-4">
            {date &&
              `${date.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })} at ${selectedTime}`}
          </div>

          <Badge
            className="
              bg-gold/10
              text-gold
              text-lg
              px-5 py-2
              rounded-full
            "
          >
            {ipTimezone}
          </Badge>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      <motion.div
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        className="
          rounded-[2.5rem]
          border border-border/50
          bg-white/70 dark:bg-background/60
          backdrop-blur-2xl
          p-8
        "
      >
        <div className="mb-8">
          <h3 className="font-serif text-3xl font-bold mb-3">
            Select Date <span className="inter">&</span> Time
          </h3>

          <p className="text-muted-foreground">Choose your preferred slot</p>
        </div>

        <div className="flex justify-center mb-10">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => {
              const today = new Date();

              today.setHours(0, 0, 0, 0);

              return date < today || date.getDay() === 0;
            }}
            className="
              rounded-2xl
              border border-border/50
              p-4
            "
          />
        </div>

        <AnimatePresence>
          {date && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
            >
              <Label className="mb-5 block">Available Time Slots</Label>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {convertedSlots.map((slot) => {
                  const isPast = isPastTimeSlot(slot.utc);

                  return (
                    <Button
                      key={slot.student}
                      type="button"
                      disabled={isPast}
                      variant={
                        selectedTime === slot.student ? "default" : "outline"
                      }
                      onClick={() => setSelectedTime(slot.student)}
                      className={`
                        rounded-xl h-11
                        ${isPast ? "opacity-40 cursor-not-allowed" : ""}
                      `}
                    >
                      {slot.student}
                    </Button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* <div className="mt-4 space-y-2 text-sm">
          <p>
            Browser Timezone:
            <strong> {timezone}</strong>
          </p>

          <p>
            Network Timezone:
            <strong> {ipTimezone || "Loading..."}</strong>
          </p>

          <p>
            VPN Check:
            <strong>
              {vpnDetected
                ? " Possible VPN / Different Location"
                : " No Mismatch"}
            </strong>
          </p>
        </div> */}
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        className="
          rounded-[2.5rem]
          border border-border/50
          bg-white/70 dark:bg-background/60
          backdrop-blur-2xl
          p-8
        "
      >
        <div className="mb-8">
          <h3 className="font-serif text-3xl font-bold mb-3">Your Details</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Full Name</Label>

            <Input
              required
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fullName: e.target.value,
                })
              }
              className="
      h-12
      rounded-2xl
      border-border/50
      bg-background/50
      focus-visible:ring-gold
    "
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Email Address</Label>

            <Input
              type="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="
        h-12
        rounded-2xl
        border-border/50
        bg-background/50
        focus-visible:ring-gold
      "
            />
          </div>

          {/* Mobile Number */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Mobile Number</Label>

            <Input
              type="tel"
              required
              placeholder="Enter your mobile number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
              className="
      h-12
      rounded-2xl
      border-border/50
      bg-background/50
      focus-visible:ring-gold
    "
            />
          </div>

          {/* Age + Gender */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Age</Label>

              <Input
                type="number"
                required
                placeholder="Enter age"
                value={formData.age}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    age: e.target.value,
                  })
                }
                className="
          h-12
          rounded-2xl
          border-border/50
          bg-background/50
          focus-visible:ring-gold
        "
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Gender</Label>

              <Select
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    gender: value,
                  })
                }
              >
                <SelectTrigger
                  className="
            h-12
            rounded-2xl
            border-border/50
            bg-background/50
          "
                >
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>

                <SelectContent className="rounded-2xl">
                  <SelectItem value="male">Male</SelectItem>

                  <SelectItem value="female">Female</SelectItem>

                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Instrument */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              Do you have an instrument?
            </Label>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    instrument: "Yes",
                  })
                }
                className={`
          h-12
          rounded-2xl
          border
          transition-all
          font-medium
          ${
            formData.instrument === "Yes"
              ? "bg-gold text-black border-gold"
              : "border-border/50 bg-background/50 hover:border-gold"
          }
        `}
              >
                Yes
              </button>

              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    instrument: "No",
                  })
                }
                className={`
          h-12
          rounded-2xl
          border
          transition-all
          font-medium
          ${
            formData.instrument === "No"
              ? "bg-gold text-black border-gold"
              : "border-border/50 bg-background/50 hover:border-gold"
          }
        `}
              >
                No
              </button>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Message</Label>

            <Textarea
              placeholder="Tell us about your musical interests, goals, or any questions..."
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className="
      min-h-34
      rounded-3xl
      border-border/50
      bg-background/50
      resize-none
      p-4
      text-sm
      leading-6
      focus-visible:ring-gold
    "
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={
              loading ||
              !selectedTime ||
              !formData.fullName ||
              !formData.email ||
              !formData.phone ||
              !formData.age ||
              !formData.gender ||
              !formData.instrument
            }
            className="
      w-full
      h-14
      rounded-2xl
      bg-gold
      text-background
      text-base
      font-semibold
      shadow-lg
      hover:scale-[1.01]
      transition-all
    "
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Booking...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Confirm Booking
              </>
            )}
          </Button>
        </form>
        <div
          className="
            mt-6
            rounded-2xl
            border border-border/40
            bg-background/40
            p-4
            flex items-center gap-3
            text-sm
          "
        >
          <Globe className="w-5 h-5 text-gold shrink-0" />

          <span className="text-muted-foreground">
            Your timezone:
            <span className="font-medium text-foreground ml-1">
              {ipTimezone}
            </span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
