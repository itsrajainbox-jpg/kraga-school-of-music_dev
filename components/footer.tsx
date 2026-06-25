"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Music,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Twitter,
  Piano,
  Facebook,
} from "lucide-react";
import Image from "next/image";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/book", label: "Book Free Trial Class" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/about", label: "About Us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
  ],
};

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/kraga.musicschool",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/people/Kraga-School-Of-Music/61571828266825/",
    label: "YouTube",
  },
  // { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background to-muted/30" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#f3b63c]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#f3b63c]/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              {/* <Piano className="w-12 h-12 text-[#f3b63c]" /> */}
              <Image
                src="/images/LogoWhite.png"
                alt="Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div className="leading-none">
                <h1 className="playfair text-4xl font-medium tracking-[0.15em] text-black">
                  KRAGA
                </h1>

                <p className="mt-1 text-[12px] tracking-[0.35em] font-medium text-black ">
                  SCHOOL OF MUSIC
                </p>
              </div>
            </Link>
            <p className="text-mdl text-muted-foreground leading-relaxed mb-6 mt-4">
              Professional piano instruction for students worldwide. Begin your
              musical journey with personalized lessons tailored to your goals.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-[#f3b63c]/10 transition-colors"
                  aria-label={social.label}
                  target="_blank"
                >
                  <social.icon className="w-6 h-6 text-[#f3b63c]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-md text-muted-foreground hover:text-[#f3b63c] transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#f3b63c] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-md text-muted-foreground hover:text-[#f3b63c] transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#f3b63c] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@kragaschoolofmusic.com"
                  target="_self"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-md text-muted-foreground hover:text-[#f3b63c] transition-colors group"
                >
                  <div className="w-8 h-8 glass-card rounded-full flex items-center justify-center group-hover:bg-[#f3b63c]/10 transition-colors">
                    <Mail className="w-4 h-4 text-[#f3b63c]" />
                  </div>
                  info@kragaschoolofmusic.com
                </a>
              </li>
              <li>
                <a
                   href="tel: +918807838099"
                  className="flex items-center gap-3 text-md text-muted-foreground hover:text-[#f3b63c] transition-colors group"
                >
                  <div className="w-8 h-8 glass-card rounded-full flex items-center justify-center group-hover:bg-[#f3b63c]/10 transition-colors">
                    <Phone className="w-4 h-4 text-[#f3b63c]" />
                  </div>
                  +91 8807838099
                </a>
              </li>
              <li className="flex items-start gap-3 text-md text-muted-foreground">
                <div className="w-8 h-8 glass-card rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#f3b63c]" />
                </div>
                <span className="mt-1.5">
                  Kraga School of Music Online Piano Lessons Worldwide Based in
                  Chennai, Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} KRAGA SCHOOL OF MUSIC. All rights
            reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-[#f3b63c] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-[#f3b63c] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
