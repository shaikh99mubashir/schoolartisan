import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Megaphone, CreditCard, LayoutTemplate, BarChart2, Target, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Megaphone,
    title: "Launch\nWinning Ads",
    description:
      "Run campaigns on TikTok, Facebook, Snapchat & Instagram—powered by verified agency accounts.",
  },
  {
    icon: CreditCard,
    title: "Zero Setup\nHassles",
    description:
      "No ad account bans, no hidden fees—simply set your ad budget, pay 10%, and we'll handle the rest.",
  },
  {
    icon: LayoutTemplate,
    title: "Custom Landing\nPages",
    description:
      "Build link-in-bio pages, add QR CTAs, embed WhatsApp & forms—no coding required.",
  },
  {
    icon: BarChart2,
    title: "Real-Time\nAnalytics",
    description:
      "Monitor impressions, spend, conversions, and ROI live from your unified dashboard.",
  },
  {
    icon: Target,
    title: "Omnichannel\nCampaigns",
    description:
      "Coordinate onsite native ads, offsite programmatic, and in-store promotions—all in one place.",
  },
  {
    icon: Users,
    title: "Collaborate\n& Scale",
    description:
      "Assign tasks, track progress, add sub-users, and manage all your client projects seamlessly.",
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
    <section ref={sectionRef} className="w-full py-20 px-6 lg:px-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl lg:text-5xl font-medium leading-tight">
          {["Every", "Tool", "You", "Need"].map((word, i) => (
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
          {["for", "Campaign", "Success"].map((word, i) => (
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
          From setup to scale, Smart Media Marketing handles it all—just add
          your ad budget + our 10% management fee.
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
