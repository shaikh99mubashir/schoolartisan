import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  "Platform",
  "Features",
  "How It Works",
  "Testimonials",
  "FAQs",
  "Contact",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/icon.svg" alt="School Artisan" width={36} height={36} />
        <span className="text-xl font-medium tracking-tight">
          <span className="text-primary">School Artisan</span>
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center bg-gray-100 rounded-full px-6 py-2 gap-6">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm text-gray-500 hover:text-gray-900 font-medium whitespace-nowrap transition-colors"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="hidden md:flex items-center gap-3">
        <button className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
          Join Now For Free
        </button>
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
              key={link}
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium"
            >
              {link}
            </a>
          ))}
          <button className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full w-full">
            Join Now For Free
          </button>
        </div>
      )}
    </header>
  );
}
