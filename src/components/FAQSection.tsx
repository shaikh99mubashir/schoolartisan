import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Smart Media Marketing?",
    answer:
      "Smart Media is a performance marketing platform that offers agency-level ad accounts, curated media deals, landing page tools, and omnichannel ad campaign management—all in one place.",
  },
  {
    question: "Who is this platform for?",
    answer:
      "Smart Media is built for digital marketers, media buyers, marketing agencies, and brands of all sizes who want to scale their advertising without the headaches of managing multiple ad accounts.",
  },
  {
    question: "Do I need my own ad accounts to run campaigns?",
    answer:
      "No. Smart Media provides agency-level ad accounts on TikTok, Meta, Snapchat, and more. You simply set your budget and we handle the rest—no bans, no limits.",
  },
  {
    question: "Is there a free trial or free access?",
    answer:
      "Yes! You can sign up for free with no upfront costs. You only pay your ad budget plus our 10% management fee when you launch campaigns.",
  },
  {
    question: "What about contracts, proposals, and billing?",
    answer:
      "Smart Media includes built-in tools for creating proposals, managing contracts, sending invoices, and tracking billing—all from your unified dashboard.",
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-heading", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".faq-item", {
        y: 35,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-item",
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2
          className="faq-heading text-4xl lg:text-5xl font-medium text-center mb-14"
          style={{
            background: "var(--brand-gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          FAQ&apos;s
        </h2>

        <Accordion type="single" collapsible defaultValue="item-0" className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <AccordionItem value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
