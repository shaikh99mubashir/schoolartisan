import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import {
  RefreshCw,
  Monitor,
  Users,
  FileText,
  Flame,
  Headphones,
  DollarSign,
  Pencil,
  Flag,
  CalendarDays,
  Upload,
  UserCheck,
  BarChart2,
  ClipboardList,
  User,
  Bus,
  Home,
  BookOpen,
  Award,
  Mail,
  ListChecks,
  Users2,
  List,
  Database,
  Printer,
  Receipt,
  MessageSquare,
  Wallet,
  CreditCard,
  Palette,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: RefreshCw,
    title: "Regular free\nupdates",
    description: "Regular updates are available to download for free.",
  },
  {
    icon: Monitor,
    title: "Responsive\nuser interface",
    description: "Smart school will over all kinds of devices seamlessly.",
  },
  {
    icon: Users,
    title: "Multiuser\naccount system",
    description: "Access for admin, teacher, student and parent.",
  },
  {
    icon: FileText,
    title: "Export data\nin PDF",
    description: "Export report data in PDF.",
  },
  {
    icon: Flame,
    title: "Codeigniter\nframework",
    description: "Built on latest version (3.0.0) of Codeigniter php framework.",
  },
  {
    icon: Headphones,
    title: "Developer\nsupport ready",
    description: "Dedicated developer support is available any time.",
  },
  {
    icon: DollarSign,
    title: "Student fees\nmanagement",
    description: "Manage student fees very easily.",
  },
  {
    icon: Pencil,
    title: "Easy\ncustomization",
    description: "Easily customizable with the help of understandable documentation.",
  },
  {
    icon: Flag,
    title: "Multiple\nlanguage support",
    description: "Supports 21 different languages.",
  },
  {
    icon: CalendarDays,
    title: "Class routine\nschedule",
    description: "Very easy to create and manage class routine schedules.",
  },
  {
    icon: Upload,
    title: "Home work\ndocument",
    description: "Attach and download study documents.",
  },
  {
    icon: UserCheck,
    title: "Parent monitor\nchild activity",
    description: "Parent monitor all activities of his child.",
  },
  {
    icon: BarChart2,
    title: "Chart & Graph\nanalysis in fees",
    description: "Chart & graph representation of fees and expenses.",
  },
  {
    icon: ClipboardList,
    title: "Exam marks\nmanagement",
    description: "Manage exam marks of all student.",
  },
  {
    icon: User,
    title: "Profile\nsystem",
    description: "Edit profile settings as you wish.",
  },
  {
    icon: Bus,
    title: "Transport\nmanagement",
    description: "Transport management for all routes.",
  },
  {
    icon: Home,
    title: "Hostel\nmanagement",
    description: "Manage all hostels and their rooms.",
  },
  {
    icon: BookOpen,
    title: "Library\nmanagement",
    description: "Systematic management of all library books.",
  },
  {
    icon: Award,
    title: "Best quality\nat lowest price",
    description: "Best quality product offered at lowest price.",
  },
  {
    icon: Mail,
    title: "Internal\nmessaging",
    description: "Admin can send private messages to teacher, student and parent.",
  },
  {
    icon: ListChecks,
    title: "Daily\nattendance",
    description: "Managing daily attendance is now hassle free.",
  },
  {
    icon: Users2,
    title: "Sibling\nManagement",
    description: "Manage multiple children of single parent in one parent account.",
  },
  {
    icon: List,
    title: "Class\nSection",
    description: "Organize classes in multiple sections for an easier management.",
  },
  {
    icon: Database,
    title: "Database\nBackup / Restore",
    description: "Easily backup, restore the whole database.",
  },
  {
    icon: Printer,
    title: "Print\nRecords",
    description: "Take printout of every records.",
  },
  {
    icon: Receipt,
    title: "Accounting",
    description: "Trace student fees and expenses all at a place.",
  },
  {
    icon: MessageSquare,
    title: "SMS gateway\nintegration",
    description: "Get informed about student marks and events with SMS notifications.",
  },
  {
    icon: Wallet,
    title: "Manual\npayment",
    description: "Ability to take manual payments in cash, cheque, DD.",
  },
  {
    icon: CreditCard,
    title: "Online Paypal\npayment",
    description: "Parent can pay student fees from their parent account.",
  },
  {
    icon: Palette,
    title: "Aesthetically\ndesigned UI",
    description: "Aesthetically design user interface in HTML5, CSS3.",
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
          {["to", "Run", "Your", "School"].map((word, i) => (
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
          From admissions to graduation, School Artisan covers every aspect of
          school management—beautifully designed for the best user experience.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="features-grid max-w-8xl mx-auto bg-gray-50 rounded-3xl border border-gray-100 p-6 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {features.map((feature) => (
            <div key={feature.title} className="features-card flex flex-col gap-4">
              <feature.icon size={40} strokeWidth={1.5} className="text-gray-800" />
              <h3 className="text-lg lg:text-2xl font-medium text-gray-900 leading-snug whitespace-pre-line">
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
