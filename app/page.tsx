export const metadata = {
  title: "Kraga School of Music | Online Piano Lessons for All Ages",
  description:
    "Structured online piano lessons for kids and adults. Free trial class, flexible schedules, Trinity exam prep. Students across 10+ countries.",
  alternates: { canonical: "/" }
};

import { HeroSection } from "@/components/home/hero-section";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { PianoJourneySection } from "@/components/home/PianoJourneySection";
import { GlobalStudentsSection } from "@/components/home/GlobalStudentsSection";
import { WhyStudentsChooseKraga } from "@/components/home/WhyStudentsChooseKraga";
import { CTASection } from "@/components/home/cta-section";
import ReactCountryFlag from "react-country-flag";

export default function HomePage() {
  const countries = [
    { code: "IN", name: "India" },
    { code: "US", name: "USA" },
    { code: "GB", name: "UK" },
    { code: "CA", name: "Canada" },
    { code: "AU", name: "Australia" },
  ];
  return (
    <>
      <HeroSection />
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-xl md:text-2xl font-semibold text-slate-900 mb-8">
            Proudly Teaching Students Online Across the Globe
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {countries.map((country) => (
              <div key={country.code} className="flex items-center gap-3">
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  style={{
                    width: 50,
                    height: 70,
                    borderRadius: "50px",
                  }}
                />
                <span className="font-medium text-slate-800">
                  {country.name}
                </span>
              </div>
            ))}
            <span className="font-medium text-slate-800">
              and 10+ more countries
            </span>
          </div>
        </div>
      </section>
      <SocialProofSection />
      <PianoJourneySection />
      <GlobalStudentsSection />
      <WhyStudentsChooseKraga />
      <CTASection />
    </>
  );
}
