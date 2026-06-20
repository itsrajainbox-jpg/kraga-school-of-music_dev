"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Piano, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  {
    href: "/courses",
    label: "Courses",
  },
  {
    href: "/pricing",
    label: "Pricing",
  },
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = pathname === "/";

  // Helper to check if link is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg text-black"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* <Piano className="w-12 h-12 text-[#f3b63c]" /> */}
            {isHomePage?scrolled?<Image
              src="/images/LogoWhite.png"
              alt="Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />:<Image
              src="/images/Logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />:<Image
              src="/images/LogoWhite.png"
              alt="Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />}
            {/* <Image
              src="/images/Logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            /> */}
            <div className="leading-none">
              <h1
                className={`playfair text-4xl font-medium tracking-[0.15em] ${
                  isHomePage
                    ? scrolled
                      ? "text-black"
                      : "text-white"
                    : "text-black"
                }`}
              >
                KRAGA
              </h1>

              <p
                className={`mt-1 text-[12px] tracking-[0.35em] font-medium ${
                  isHomePage
                    ? scrolled
                      ? "text-black"
                      : "text-white"
                    : "text-black"
                }`}
              >
                SCHOOL OF MUSIC
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {"children" in link ? (
                  <>
                    <button
                      className={`flex items-center gap-1 text-xl transition-all duration-300 ${
                        isHomePage
                          ? scrolled
                            ? "text-black"
                            : "text-white"
                          : "text-black"
                      }`}
                    >
                      {link.label}

                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="w-60 rounded-xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-5 py-3 transition-colors ${
                              isActive(child.href)
                                ? "text-amber-600 bg-amber-50"
                                : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-xl transition-all duration-300 ${
                      isActive(link.href)
                        ? "text-[#f3b63c] font-semibold"
                        : isHomePage
                          ? scrolled
                            ? "text-black hover:text-[#f3b63c]"
                            : "text-white hover:text-[#f3b63c]"
                          : "text-black hover:text-[#f3b63c]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(212,175,55,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="bg-[#f3b63c] hover:bg-amber-600 text-white font-medium px-6 rounded-full"
              >
                <Link href="/book">Book Free Trial Class</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center gap-3">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu
                    className={`h-8 w-8 ${
                      isHomePage
                        ? scrolled
                          ? "text-black"
                          : "text-white"
                        : "text-black"
                    }`}
                  />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[320px] bg-white border-l border-gray-200 px-6"
              >
                <div className="mb-10 mt-8">
                  <h2 className="text-2xl font-bold">KRAGA</h2>
                  <p className="text-sm text-gray-500">School of Music</p>
                </div>
                <div className="flex flex-col gap-8">
                  <AnimatePresence>
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-gray-200 pb-3"
                      >
                        {"children" in link ? (
                          <>
                            <button
                              onClick={() =>
                                setOpenMenu(
                                  openMenu === link.label ? null : link.label,
                                )
                              }
                              className="w-full flex items-center justify-between py-2 text-lg font-medium"
                            >
                              <span>{link.label}</span>

                              <ChevronDown
                                className={`h-5 w-5 transition-transform duration-300 ${
                                  openMenu === link.label ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {openMenu === link.label && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{
                                    height: "auto",
                                    opacity: 1,
                                  }}
                                  exit={{
                                    height: 0,
                                    opacity: 0,
                                  }}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-4 mt-2 rounded-xl bg-amber-50 p-3 flex flex-col gap-3">
                                    {link.children.map((child) => (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`transition-colors ${
                                          isActive(child.href)
                                            ? "text-amber-600 font-semibold"
                                            : "text-gray-700 hover:text-amber-600"
                                        }`}
                                      >
                                        {child.label}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block py-2 text-lg font-medium transition-colors ${
                              isActive(link.href)
                                ? "text-[#f3b63c] font-semibold"
                                : "hover:text-[#f3b63c] text-gray-700"
                            }`}
                          >
                            {link.label}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pt-4"
                  >
                    <Button
                      asChild
                      className="w-full bg-[#f3b63c] hover:bg-amber-600 text-white rounded-full"
                    >
                      <Link href="/book" onClick={() => setIsOpen(false)}>
                        Book Free Trial Class
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
