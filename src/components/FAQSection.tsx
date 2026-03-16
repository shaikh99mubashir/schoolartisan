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
    question: "What is School Artisan?",
    answer:
      "School Artisan is an all-in-one school management system (School ERP) and website solution that lets you manage admissions, attendance, fees, exams, results, circulars and parent communication from a single platform.",
  },
  {
    question: "Which types of institutions is this system suitable for?",
    answer:
      "The platform is designed for private schools, academies, colleges, daycare centers, Islamic schools, coaching centers and multi-branch school networks—with the ability to scale from a few students to thousands.",
  },
  {
    question: "Do parents get a mobile / web portal?",
    answer:
      "Yes, parents get dedicated access where they can view their child&apos;s attendance, homework, announcements, fee status, exam results and the school calendar.",
  },
  {
    question: "Do you provide training and ongoing support?",
    answer:
      "We provide training for teachers and office staff during implementation, and offer ongoing support via WhatsApp, calls and remote sessions.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "Pricing is customized based on your student strength, required modules (ERP, website, SMS/WhatsApp) and number of branches. You&apos;ll receive a detailed quotation after the demo.",
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
    <section id="faqs" ref={sectionRef} className="w-full py-20 px-6 lg:px-12 bg-white">
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
