import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { allSteps } from "@/lib/howItWorksData";
import { ArrowRight } from "lucide-react";

const steps = allSteps.slice(0, 3);

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
          <strong>Get Your School Running in 3 Simple Steps</strong>—no technical expertise
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
                      index % 2 === 0
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
        <p className="text-gray-400 text-sm">Want to explore all 36 modules?</p>
        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-3.5 rounded-full transition-colors text-sm"
        >
          View All Features
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
