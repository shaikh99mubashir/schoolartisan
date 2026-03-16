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
      "School Artisan is a complete school management system designed for K-12 schools, colleges, and coaching centers. It covers student management, attendance, exams, fee collection, e-learning, library, transport, and much more—all in one beautifully designed platform.",
  },
  {
    question: "Who is School Artisan suitable for?",
    answer:
      "School Artisan is built for all types of educational institutions—primary schools, high schools, colleges, universities, coaching centers, and training institutes. It supports multiple user roles including Admin, Teachers, Students, Parents, Accountants, and Librarians.",
  },
  {
    question: "Can I try it before purchasing?",
    answer:
      "Absolutely! We offer a full hands-on demo with sample data so you can explore every feature—including the student portal, parent app, admin dashboard, and more—before making any commitment.",
  },
  {
    question: "What modules are included in School Artisan?",
    answer:
      "School Artisan includes 29+ modules: Student Management, Attendance, Examinations, Fee Management, E-Learning (Homework, Online Exams, Live Classes), Library Management, Transport, Hostel, Timetable, SMS Notifications, and more.",
  },
  {
    question: "Is training and technical support available?",
    answer:
      "Yes. We provide detailed documentation, video tutorials, and a dedicated support team to help you set up and get the most out of School Artisan. Ongoing updates and new features are included at no extra cost.",
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
