import {
  FileText,
  CalendarClock,
  CreditCard,
  ShieldCheck,
  Scale,
  Mail,
} from "lucide-react";

const sections = [
  {
    icon: <FileText className="w-6 h-6 text-[#f3b63c]" />,
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing the KRAGA School of Music website or enrolling in our
        online piano and keyboard lessons, you agree to comply with these Terms
        & Conditions. If you do not agree, please refrain from using our
        website and services.
      </p>
    ),
  },
  {
    icon: <CalendarClock className="w-6 h-6 text-[#f3b63c]" />,
    title: "Lesson Booking",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Lessons are conducted online.</li>
          <li>Bookings are subject to instructor availability.</li>
          <li>Please join your lesson on time.</li>
          <li>A stable internet connection is required.</li>
          <li>
            Students should ensure they have a suitable keyboard or piano for
            practice.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <CreditCard className="w-6 h-6 text-[#f3b63c]" />,
    title: "Payments",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Lesson fees must be paid before the scheduled class.</li>
          <li>All pricing is displayed in the selected currency.</li>
          <li>Promotional offers may change without prior notice.</li>
          <li>Payments are securely processed through trusted providers.</li>
        </ul>
      </>
    ),
  },
  {
    icon: <CalendarClock className="w-6 h-6 text-[#f3b63c]" />,
    title: "Cancellation & Rescheduling",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Please provide at least <strong>24 hours' notice</strong> to
            reschedule a lesson.
          </li>
          <li>
            Missed lessons without prior notice may not be eligible for a
            replacement.
          </li>
          <li>
            KRAGA School of Music reserves the right to reschedule lessons due
            to unforeseen circumstances.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#f3b63c]" />,
    title: "Student Responsibilities",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Attend lessons on time.</li>
          <li>Practice regularly between lessons.</li>
          <li>Respect the instructor during sessions.</li>
          <li>Maintain a suitable learning environment.</li>
        </ul>
      </>
    ),
  },
  {
    icon: <Scale className="w-6 h-6 text-[#f3b63c]" />,
    title: "Intellectual Property",
    content: (
      <p>
        All lesson materials, videos, worksheets, exercises, logos, and website
        content are the intellectual property of KRAGA School of Music and may
        not be copied, distributed, or reproduced without written permission.
      </p>
    ),
  },
];


  const renderAmpersand = (text: string) =>
    text.split("&").map((part, index, array) => (
      <span key={index}>
        {part}
        {index < array.length - 1 && <span className="inter">&</span>}
      </span>
    ));
export default function TermsAndConditionsPage() {
  return (
    <main className="bg-[#faf8f4] py-20">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Hero */}
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-sm font-semibold text-[#f3b63c]">
            Legal
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-serif text-[#081737]">
       
            {renderAmpersand("Terms & Conditions")}
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
            Please read these Terms & Conditions carefully before using our
            website or enrolling in online piano and keyboard lessons at KRAGA
            School of Music.
          </p>

          <p className="mt-5 text-sm text-slate-500">
            Last Updated: June 2026
          </p>
        </div>

        {/* Sections */}
        <div className="mt-16 space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff5e6]">
                  {section.icon}
                </div>

                <h2 className="text-2xl font-bold text-[#081737]">
                  {section.title}
                </h2>
              </div>

              <div className="leading-8 text-slate-600">
                {section.content}
              </div>
            </div>
          ))}

          {/* Website Usage */}
          <div className="rounded-3xl bg-[#081737] p-10 text-white">
            <h2 className="text-3xl font-serif">Website Usage</h2>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-300">
              <li>Do not misuse or attempt to damage the website.</li>
              <li>Do not upload malicious or harmful content.</li>
              <li>Do not attempt unauthorized access to our systems.</li>
              <li>Respect copyright and intellectual property rights.</li>
            </ul>
          </div>

          {/* Liability */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#081737]">
              Limitation of Liability
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              KRAGA School of Music is not liable for interruptions caused by
              internet connectivity, third-party software, technical failures,
              or circumstances beyond our reasonable control.
            </p>
          </div>

          {/* Changes */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#081737]">
              Changes to These Terms
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We reserve the right to update these Terms & Conditions at any
              time. Continued use of our website or services constitutes
              acceptance of the revised terms.
            </p>
          </div>

          {/* Contact */}
          <div className="rounded-3xl border border-[#f3b63c]/40 bg-[#fff8ea] p-8">
            <div className="flex items-center gap-3">
              <Mail className="text-[#f3b63c]" />

              <h2 className="text-2xl font-bold text-[#081737]">
                Contact Us
              </h2>
            </div>

            <p className="mt-5 leading-8 text-slate-600">
              If you have any questions regarding these Terms & Conditions,
              please contact us:
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