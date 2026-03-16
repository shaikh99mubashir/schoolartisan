import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { GraduationCap, UserCheck, CreditCard, LayoutTemplate, BarChart2, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: GraduationCap,
    title: "Complete\nSchool ERP",
    description:
      "Admissions, student records, classes, sections and staff management—everything in one cloud-based system.",
  },
  {
    icon: CreditCard,
    title: "Online Fees\n& Billing",
    description:
      "Streamline fee collection with reminders, auto-generated receipts and detailed finance reports—no more manual cash registers.",
  },
  {
    icon: LayoutTemplate,
    title: "Modern\nSchool Website",
    description:
      "An SEO-friendly school website where you can easily manage courses, gallery, notices, admission forms and results.",
  },
  {
    icon: BarChart2,
    title: "Real-Time\nReports",
    description:
      "Ready-made dashboards and MIS reports for attendance, fees, exam results and staff performance—built for principals.",
  },
  {
    icon: UserCheck,
    title: "Attendance\n& Exams",
    description:
      "Daily attendance with parent alerts, exam schedules, marks entry and auto-generated report cards (PDF).",
  },
  {
    icon: Users,
    title: "Parents\n& Teachers App",
    description:
      "Dedicated access for parents and teachers: real-time homework, announcements, fee status, results and simple daily workflows.",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".features-word", {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".features-sub", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".features-card", {
        y: 50,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="w-full py-20 px-6 lg:px-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl lg:text-5xl font-medium leading-tight">
          {["Every", "Tool", "Your", "School", "Needs"].map((word, i) => (
            <span
              key={i}
              className="features-word inline-block"
              style={{
                marginRight: "0.25em",
                background: "var(--brand-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {word}
            </span>
          ))}
          <br />
          {["for", "Smart", "Management"].map((word, i) => (
            <span
              key={i}
              className="features-word text-gray-900 inline-block"
              style={{ marginRight: "0.25em" }}
            >
              {word}
            </span>
          ))}
        </h2>
        <p className="features-sub mt-5 text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
          Whether you run a small private school or a large campus, School Artisan makes your
          <strong> daily operations simple, transparent and trackable</strong>.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="features-grid max-w-8xl mx-auto bg-gray-50 rounded-3xl border border-gray-100 p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {features.map((feature) => (
            <div key={feature.title} className="features-card flex flex-col gap-4">
              <feature.icon size={40} strokeWidth={1.5} className="text-gray-800" />
              <h3 className="text-2xl font-medium text-gray-900 leading-snug whitespace-pre-line">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
