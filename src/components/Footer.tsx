import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ArrowUp } from "lucide-react";

const platformLinks = [
  "Home",
  "How It Works",
  "Features",
  "Testimonials",
  "FAQs",
  "Contact Us",
];

const resourceLinks = ["Privacy Policy", "Terms & Conditions"];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-word", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".footer-link", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-link",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".footer-bottom", {
        y: 15,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-bottom",
          start: "top 98%",
          toggleActions: "play none none none",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="w-full px-6 lg:px-12 py-6 bg-white">
      <div
        className="max-w-7xl mx-auto rounded-3xl border border-gray-200 p-10 lg:p-14 relative"
        style={{
          backgroundImage: "radial-gradient(circle, #d4d4d4 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundColor: "#fafafa",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Headline */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <h2 className="text-3xl lg:text-4xl font-medium leading-tight text-gray-900">
              {["Ready", "To", "Scale"].map((word, i) => (
                <span
                  key={i}
                  className="footer-word text-gray-900 inline-block"
                  style={{ marginRight: "0.25em" }}
                >
                  {word}
                </span>
              ))}{" "}
              <span className="footer-word text-primary inline-block">Your</span>
              <br />
              <span className="footer-word text-secondary inline-block" style={{ marginRight: "0.25em" }}>
                Ad
              </span>
              <span className="footer-word text-primary inline-block">Campaigns?</span>
            </h2>
          </div>

          {/* Middle: Platform links */}
          <div>
            <h4 className="footer-link text-sm font-semibold text-gray-900 mb-5">Platform</h4>
            <ul className="flex flex-col gap-3">
              {platformLinks.map((link) => (
                <li key={link} className="footer-link">
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Resources links */}
          <div>
            <h4 className="footer-link text-sm font-semibold text-gray-900 mb-5">Resources</h4>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link} className="footer-link">
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom mt-14 flex items-center justify-between border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-400">
            © 2025 Smart Media Marketing. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="text-xs text-gray-700 font-medium hover:text-primary transition-colors flex items-center gap-1"
          >
            Back to the top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
