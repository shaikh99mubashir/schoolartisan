import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Full page links (e.g. /contact) — navigate directly
    if (!href.startsWith("#")) {
      router.push(href);
      setMenuOpen(false);
      return;
    }

    // Hash links — scroll to section
    if (router.pathname !== "/") {
      router.push("/" + href);
      setMenuOpen(false);
      return;
    }

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  return (
    <header className="w-full relative">
      <div className="w-full max-w-400 mx-auto px-6 py-4 flex items-center justify-between bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="School Artisan" width={120} height={36} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center bg-gray-100 rounded-full px-6 py-2 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm text-gray-500 hover:text-gray-900 font-medium whitespace-nowrap transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Request Free Demo
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50 md:hidden px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm text-gray-600 hover:text-gray-900 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full w-full text-center"
            >
              Request Free Demo
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
