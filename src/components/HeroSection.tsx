import { useEffect, useRef } from "react";
import { Bell, User, Users, BookOpen, ClipboardCheck, BookCopy, Monitor, Download, GraduationCap, Video, CalendarDays, BookMarked, UserCheck, List, Calendar, FileText, Check } from "lucide-react";
import { gsap } from "@/lib/gsap";

// Schoolly app icon item
const AppIcon = ({
  bg,
  icon,
  label,
}: {
  bg: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex flex-col items-center gap-1">
    <div
      className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center shadow-sm`}
    >
      {icon}
    </div>
    <p className="text-[7px] text-gray-600 text-center leading-tight">{label}</p>
  </div>
);

const SchoollyPhoneMockup = () => (
  <div className="relative w-60 h-125 bg-white rounded-[2.8rem] border-[5px] border-gray-800 shadow-2xl overflow-hidden">
    {/* Notch */}
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-full z-10" />

    {/* Screen */}
    <div className="absolute inset-0 bg-white pt-10 overflow-hidden scrollbar-none">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
        {/* Hamburger */}
        <div className="flex flex-col gap-0.75 p-1">
          <div className="w-3.5 h-0.5 bg-gray-700 rounded-full" />
          <div className="w-3.5 h-0.5 bg-gray-700 rounded-full" />
          <div className="w-3.5 h-0.5 bg-gray-700 rounded-full" />
        </div>

        {/* Logo */}
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center">
            <GraduationCap size={14} color="white" />
          </div>
          <span
            className="text-[11px] font-extrabold"
            style={{ color: "#1e40af" }}
          >
            School Artisan
          </span>
        </div>

        {/* Bell */}
        <div className="w-6 h-6 flex items-center justify-center">
          <Bell size={16} color="#1f2937" />
        </div>
      </div>

      {/* Student Card */}
      <div className="mx-2.5 mt-2 bg-gray-50 rounded-xl px-3 py-2.5 flex items-center gap-2.5 border border-gray-100">
        <div className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
          <User size={20} color="#9ca3af" />
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-bold text-gray-800 leading-tight">Hello</p>
          <p className="text-[8px] text-gray-500">Admission No. 0001</p>
          <span className="inline-block mt-0.5 bg-gray-200 text-gray-700 text-[7px] px-2 py-0.5 rounded-full font-semibold">
            Class I (Section A)
          </span>
        </div>
        <div className="w-2 h-2 bg-green-500 rounded-full shrink-0" />
      </div>

      {/* E-Learning */}
      <div className="px-3 mt-3">
        <p className="text-[9px] font-bold text-gray-800 mb-2">E-Learning</p>
        <div className="grid grid-cols-4 gap-x-1 gap-y-2 mb-2">
          <AppIcon
            bg="bg-orange-100"
            label="Homework"
            icon={<BookOpen size={20} color="#f97316" />}
          />
          <AppIcon
            bg="bg-green-100"
            label="Daily Assignment"
            icon={<ClipboardCheck size={20} color="#22c55e" />}
          />
          <AppIcon
            bg="bg-blue-100"
            label="Lesson Plan"
            icon={<BookCopy size={20} color="#3b82f6" />}
          />
          <AppIcon
            bg="bg-sky-100"
            label="Online Exam"
            icon={<Monitor size={20} color="#0ea5e9" />}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-1 gap-y-2">
          <AppIcon
            bg="bg-gray-800"
            label="Download Center"
            icon={<Download size={20} color="white" />}
          />
          <AppIcon
            bg="bg-indigo-100"
            label="Online Course"
            icon={<GraduationCap size={20} color="#6366f1" />}
          />
          <AppIcon
            bg="bg-blue-600"
            label="Zoom Live Classes"
            icon={<Video size={20} color="white" />}
          />
          <AppIcon
            bg="bg-white border border-gray-200"
            label="Gmeet Live Classes"
            icon={<Video size={20} color="#4285F4" />}
          />
        </div>
      </div>

      {/* Academics */}
      <div className="px-3 mt-3 pb-4">
        <p className="text-[9px] font-bold text-gray-800 mb-2">Academics</p>
        <div className="grid grid-cols-4 gap-x-1 gap-y-2 mb-2">
          <AppIcon
            bg="bg-orange-100"
            label="Class Timetable"
            icon={<CalendarDays size={20} color="#f97316" />}
          />
          <AppIcon
            bg="bg-gray-800"
            label="Syllabus Status"
            icon={<BookMarked size={20} color="white" />}
          />
          <AppIcon
            bg="bg-blue-100"
            label="Attendance"
            icon={<UserCheck size={20} color="#3b82f6" />}
          />
          <AppIcon
            bg="bg-purple-100"
            label="Student Timeline"
            icon={<List size={20} color="#a855f7" />}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-1 gap-y-2">
          <AppIcon
            bg="bg-yellow-100"
            label="Behaviour Records"
            icon={<Calendar size={20} color="#eab308" />}
          />
          <AppIcon
            bg="bg-teal-100"
            label="Teacher Review"
            icon={<User size={20} color="#14b8a6" />}
          />
          <AppIcon
            bg="bg-red-100"
            label="Examination"
            icon={<FileText size={20} color="#ef4444" />}
          />
          <AppIcon
            bg="bg-sky-100"
            label="CBSE Examination"
            icon={<Monitor size={20} color="#0ea5e9" />}
          />
        </div>
      </div>
    </div>
  </div>
);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-word", {
        y: 70,
        opacity: 0,
        duration: 0.65,
        stagger: 0.05,
      })
        .from(
          ".hero-text",
          { y: 30, opacity: 0, duration: 0.7, stagger: 0.15 },
          "-=0.35"
        )
        .from(
          ".hero-btn",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        )
        .from(
          ".hero-phone",
          { x: 60, opacity: 0, duration: 0.9, ease: "power2.out" },
          "-=0.85"
        )
        .from(
          ".hero-card",
          { scale: 0.85, opacity: 0, duration: 0.5, stagger: 0.12 },
          "-=0.55"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-[88vh] flex items-center overflow-hidden bg-gray-50"
      style={{
        backgroundImage:
          "radial-gradient(circle, #c4c4c4 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16">
        {/* Left Content */}
        <div className="flex flex-col gap-6 z-10">
          <h1 className="text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-gray-900">
            {[
              "All-in-One",
              "School",
              "Management",
              "System",
              "For",
              "Modern",
              "Schools",
            ].map((word, i) => (
              <span
                key={i}
                className="hero-word inline-block"
                style={{ marginRight: "0.25em" }}
              >
                {word}
              </span>
            ))}
          </h1>

          <div className="flex flex-col gap-4">
            <p className="hero-text text-gray-700 text-sm leading-relaxed max-w-md">
              School Artisan is a modern <strong>School ERP and website solution</strong> that digitizes your entire campus—
              from admissions and student records to daily attendance, fees, exams and report cards, all in one dashboard.
            </p>
            <p className="hero-text text-gray-500 text-sm leading-relaxed max-w-md">
              Give principals, teachers and parents separate logins with
              <strong> transparent communication, real-time reports</strong> and
              a professional school website that strengthens your institution&apos;s image.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="/contact?type=demo"
              className="hero-btn bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm inline-flex items-center justify-center"
            >
              Request Free Demo
            </a>
            <a
              href="/contact?type=contact"
              className="hero-btn border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm inline-flex items-center justify-center"
            >
              Talk To Our Team
            </a>
          </div>

          <p className="hero-text text-gray-400 text-xs">
            Trusted by 50+ schools to simplify their day-to-day operations.
          </p>
        </div>

        {/* Right - Schoolly Phone Mockup */}
        <div className="hero-phone relative flex justify-center items-center z-10">
          {/* Floating Students Card */}
          <div className="hero-card absolute -left-2 top-1/4 bg-white rounded-2xl shadow-lg px-3 py-2.5 flex items-center gap-2.5 z-20 border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <Users size={16} color="#3b82f6" />
            </div>
            <div>
              <p className="text-[9px] text-gray-500">Total Students</p>
              <p className="text-xs font-bold text-gray-900">1,240</p>
            </div>
          </div>

          {/* Phone */}
          <SchoollyPhoneMockup />

          {/* Floating Attendance Card */}
          <div className="hero-card absolute -right-2 top-1/3 bg-white rounded-2xl shadow-lg px-3 py-2.5 flex items-center gap-2.5 z-20 border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <Check size={16} color="#22c55e" />
            </div>
            <div>
              <p className="text-[9px] text-gray-500">Attendance</p>
              <p className="text-xs font-bold text-gray-900">96.4%</p>
            </div>
          </div>

          {/* Floating Exam Card */}
          <div className="hero-card absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-3 z-20">
            <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
              <FileText size={16} color="white" />
            </div>
            <div>
              <p className="text-white font-semibold text-xs">Exam Today</p>
              <p className="text-blue-200 text-[9px]">Mathematics – 10:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
