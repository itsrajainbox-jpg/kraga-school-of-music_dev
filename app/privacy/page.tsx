"use client"

import { ShieldCheck, Lock, Cookie, UserCheck, Mail } from "lucide-react";

const sections = [
  {
    icon: <UserCheck className="w-6 h-6 text-[#f3b63c]" />,
    title: "Information We Collect",
    content: (
      <>
        <p>
          We may collect the following information when you contact us or book
          lessons:
        </p>

        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Country</li>
          <li>Age (if provided)</li>
          <li>Instrument Preference</li>
          <li>Lesson Booking Information</li>
        </ul>
      </>
    ),
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#f3b63c]" />,
    title: "How We Use Your Information",
    content: (
      <>
        <p>Your information is used to:</p>

        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Schedule online lessons</li>
          <li>Respond to enquiries</li>
          <li>Provide customer support</li>
          <li>Send booking confirmations and reminders</li>
          <li>Improve our website and services</li>
        </ul>

        <p className="mt-4 font-medium">
          We never sell or rent your personal information.
        </p>
      </>
    ),
  },
  {
    icon: <Cookie className="w-6 h-6 text-[#f3b63c]" />,
    title: "Cookies",
    content: (
      <p>
        Our website may use cookies to improve your browsing experience,
        remember your preferences, and analyse website traffic. You can disable
        cookies anytime from your browser settings.
      </p>
    ),
  },
  {
    icon: <Lock className="w-6 h-6 text-[#f3b63c]" />,
    title: "Data Protection",
    content: (
      <p>
        We take appropriate security measures to protect your personal
        information from unauthorised access, disclosure, or misuse.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#faf8f4] py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-sm font-semibold text-[#f3b63c]">
            Legal
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-serif text-[#081737]">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            At KRAGA School of Music, your privacy is important to us. This
            Privacy Policy explains how we collect, use, and protect your
            personal information.
          </p>

          <p className="mt-5 text-sm text-slate-500">
            Last Updated: June 2026
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#fff5e6] flex items-center justify-center">
                  {section.icon}
                </div>

                <h2 className="text-2xl font-bold text-[#081737]">
                  {section.title}
                </h2>
              </div>

              <div className="text-slate-600 leading-8">
                {section.content}
              </div>
            </div>
          ))}

          <div className="rounded-3xl bg-[#081737] p-10 text-white">
            <h2 className="text-3xl font-serif">
              Third-Party Services
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              We may use trusted third-party services such as Google Meet,
              Google Calendar, payment providers, and analytics tools to improve
              our services. These providers maintain their own privacy policies.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#081737]">
              Children's Privacy
            </h2>

            <p className="mt-5 text-slate-600 leading-8">
              Parents or guardians should provide consent when registering
              students under the age of 18 for online lessons.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#081737]">
              Changes to this Policy
            </h2>

            <p className="mt-5 text-slate-600 leading-8">
              We may update this Privacy Policy from time to time. Any changes
              will be published on this page.
            </p>
          </div>

          <div className="rounded-3xl bg-[#fff8ea] border border-[#f3b63c]/40 p-8">
            <div className="flex items-center gap-3">
              <Mail className="text-[#f3b63c]" />

              <h2 className="text-2xl font-bold text-[#081737]">
                Contact Us
              </h2>
            </div>

            <p className="mt-5 text-slate-600 leading-8">
              If you have any questions regarding this Privacy Policy, please
              contact us at:
            </p>

            <a
              href="mailto:info@kragaschoolofmusic.com"
              className="mt-6 inline-block text-lg font-semibold text-[#f3b63c] hover:underline"
            >
              info@kragaschoolofmusic.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}