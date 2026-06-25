import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "KRAGA SCHOOL OF MUSIC | Professional Piano Lessons Online",
  description:
    "Learn piano from a world-class instructor. Professional piano lessons for students of all levels, available globally via online sessions.",
  keywords: [
    "piano lessons",
    "online piano teacher",
    "music education",
    "piano instructor",
    "learn piano",
  ],
  icons: {
    icon: "https://kragaschoolofmusic.com/images/Logo.png",
    shortcut: "https://kragaschoolofmusic.com/images/Logo.png",
    apple: "https://kragaschoolofmusic.com/images/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange> */}
        <Navigation />
        <main>{children}</main>
        <Footer />
        {/* </ThemeProvider> */}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
