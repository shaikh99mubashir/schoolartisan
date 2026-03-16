import { useEffect, useRef } from "react";
import { Check, User, CheckCircle, Smartphone, Rocket, MessageCircle, Megaphone, Play } from "lucide-react";
import { gsap } from "@/lib/gsap";

const steps = [
  {
    number: "01",
    title: "Share Your School Details",
    description:
      "Our team understands your school structure (branches, classes, sections, fee heads, exams) and prepares a tailored setup for you.",
    imagePosition: "right",
    imageBg: "from-blue-100 via-blue-50 to-blue-200",
    imageContent: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center">
          <User size={48} color="#3b82f6" />
        </div>
        <div className="absolute top-6 right-8 bg-green-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
          <Check size={20} color="white" />
        </div>
        <div className="absolute bottom-10 left-8 flex items-center gap-1 bg-white/60 rounded-full px-3 py-1">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <User size={12} color="white" />
          </div>
          <Check size={16} color="#22c55e" />
        </div>
      </div>
    ),
    connectorColor: "stroke-blue-300",
  },
  {
    number: "02",
    title: "We Configure Your ERP & Website",
    description:
      "Within a few days we configure your School ERP, user roles and permissions, SMS/WhatsApp templates and a modern school website.",
    imagePosition: "left",
    imageBg: "from-blue-50 via-blue-100 to-blue-200",
    imageContent: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-24 h-24 rounded-2xl bg-blue-200 flex items-center justify-center"><Smartphone size={48} color="#3b82f6" /></div>
        <div className="absolute top-6 left-6 w-8 h-8 bg-blue-500 rounded-lg" />
        <div className="absolute top-8 right-10">
          <div className="bg-orange-400 rounded-xl px-2 py-1 text-white text-xs font-semibold flex items-center gap-1">
            <><Rocket size={12} /> ADS</>
          </div>
        </div>
        <div className="absolute bottom-8 right-8">
          <div className="bg-red-500 rounded-lg px-2 py-0.5 text-white text-xs font-semibold">
            ADS
          </div>
        </div>
      </div>
    ),
    connectorColor: "stroke-purple-300",
  },
  {
    number: "03",
    title: "Train Your Staff & Go Live",
    description:
      "Teachers, office staff and management receive short training—then you start using live attendance, fees, exams and the parent portal on day one.",
    imagePosition: "right",
    imageBg: "from-blue-100 via-blue-50 to-blue-200",
    imageContent: (
      <div className="relative w-full h-full flex items-center justify-center gap-2">
        <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center"><User size={32} color="#3b82f6" /></div>
        <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center"><User size={32} color="#9333ea" /></div>
        <div className="absolute top-6 right-8"><MessageCircle size={28} color="#3b82f6" /></div>
        <div className="absolute top-8 right-20"><Megaphone size={24} color="#f97316" /></div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gray-200 rounded-xl px-4 py-2 flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center">
            <Play size={16} className="fill-primary text-primary" />
          </div>
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-purple-500" />
        </div>
      </div>
    ),
    connectorColor: null,
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hiw-word", {
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

      gsap.from(".hiw-sub", {
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

      // Each step animates in from alternating sides
      document.querySelectorAll(".hiw-step").forEach((step, i) => {
        const fromLeft = i % 2 === 0;
        gsap.from(step, {
          x: fromLeft ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.from(".hiw-cta", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hiw-cta",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="w-full py-20 px-6 lg:px-12 bg-white overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-medium">
          {["How", "It"].map((word, i) => (
            <span
              key={i}
              className="hiw-word text-gray-900 inline-block"
              style={{ marginRight: "0.25em" }}
            >
              {word}
            </span>
          ))}{" "}
          <span
            className="hiw-word inline-block"
            style={{
              background: "var(--brand-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Works
          </span>
        </h2>
        <p className="hiw-sub mt-4 text-gray-500 text-sm">
          <strong>Get Started in 3 Simple Steps</strong>—no technical expertise
          required
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto flex flex-col gap-0">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            <div className="hiw-step grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10">
              {/* Text Side */}
              <div
                className={`flex flex-col gap-4 ${
                  step.imagePosition === "left" ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex flex-col gap-2">
                  <span className="text-6xl font-medium text-gray-200 leading-none select-none">
                    {step.number}
                  </span>
                  <div className="w-0.5 h-24 bg-blue-300 ml-1" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Image Side */}
              <div
                className={`${
                  step.imagePosition === "left" ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div
                  className={`rounded-3xl bg-linear-to-br ${step.imageBg} h-80 relative overflow-hidden`}
                >
                  {step.imageContent}
                </div>
              </div>
            </div>

            {/* Dashed Curved Connector */}
            {index < steps.length - 1 && (
              <div className="relative h-20 w-full -mt-4 -mb-4">
                <svg
                  viewBox="0 0 800 100"
                  className="w-full h-full"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d={
                      index === 0
                        ? "M 650 10 Q 500 60 400 80 Q 300 100 150 90"
                        : "M 150 10 Q 300 60 400 80 Q 500 100 650 90"
                    }
                    stroke="#93c5fd"
                    strokeWidth="2"
                    strokeDasharray="8 6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="hiw-cta text-center mt-16 flex flex-col items-center gap-4">
        <p className="text-gray-400 text-sm">Ready to See It Live?</p>
        <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-3.5 rounded-full transition-colors text-sm">
          Start For Free Today
        </button>
      </div>
    </section>
  );
}
