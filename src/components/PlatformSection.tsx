import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Users, ShieldCheck, Globe, Smartphone } from "lucide-react";

export default function PlatformSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".platform-word", {
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

      gsap.from(".platform-fade", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".platform-dashboard", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".platform-dashboard",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".platform-card", {
        y: 50,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".platform-card",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Multi-Role Access",
      description:
        "Separate, secure portals for Admins, Teachers, Students, Parents, Accountants, and Librarians.",
      bg: "from-blue-50 to-blue-100",
      iconColor: "text-primary",
      icon: (<Users size={64} strokeWidth={1} />),
    },
    {
      title: "Secure & Reliable",
      description:
        "Role-based permissions, automated database backups, and enterprise-grade data security for your school.",
      bg: "from-blue-100 to-blue-200",
      iconColor: "text-blue-400",
      icon: (<ShieldCheck size={64} strokeWidth={1} />),
    },
    {
      title: "School Front Website",
      description:
        "A built-in public-facing school website for sharing news, announcements, and general information.",
      bg: "from-blue-100 via-blue-50 to-blue-200",
      iconColor: "text-primary",
      icon: (<Globe size={64} strokeWidth={1} />),
    },
    {
      title: "Mobile App Ready",
      description:
        "Students and parents can access timetables, homework, attendance, and exam results from their phones.",
      bg: "from-blue-50 via-blue-100 to-blue-200",
      iconColor: "text-blue-500",
      icon: (<Smartphone size={64} strokeWidth={1} />),
    },
  ];

  return (
    <section id="modules" ref={sectionRef} className="w-full py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-4xl lg:text-5xl font-medium leading-tight">
              <span className="platform-word text-primary inline-block">All-in-One</span>{" "}
              <span className="platform-word text-secondary inline-block">School Platform</span>
              <br />
              {["For", "Smarter", "Schools"].map((word, i) => (
                <span
                  key={i}
                  className="platform-word text-gray-900 inline-block"
                  style={{ marginRight: "0.25em" }}
                >
                  {word}
                </span>
              ))}
            </h2>
          </div>

          <p className="platform-fade text-gray-600 text-sm leading-relaxed max-w-sm">
            School Artisan is{" "}
            <strong>designed to empower school administrators, teachers, and parents</strong>{" "}
            by providing:
          </p>

          {/* Dashboard Mockup */}
          <div className="platform-dashboard relative mt-4 rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
            {/* Tablet top bar */}
            <div className="bg-gray-900 h-8 flex items-center justify-center rounded-t-2xl">
              <div className="w-20 h-3 bg-gray-700 rounded-full" />
            </div>

            <div className="flex h-80">
              {/* Sidebar */}
              <div className="w-36 bg-white border-r border-gray-100 flex flex-col py-3 px-3 gap-1 shrink-0">
                {/* Logo */}
                <div className="flex items-center gap-1.5 mb-3 px-1">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[8px] font-semibold text-gray-800 leading-none">ALRAED</p>
                    <p className="text-[6px] text-gray-400 leading-none">وجهتك نحو الريادة</p>
                  </div>
                </div>
                {[
                  "Dashboard",
                  "Students",
                  "Attendance",
                  "Examinations",
                  "Fee Management",
                  "E-Learning",
                  "Library",
                  "Transport",
                  "Staff",
                  "Reports",
                ].map((item) => (
                  <div
                    key={item}
                    className={`flex items-center gap-1.5 px-2 py-1 rounded text-[9px] ${
                      item === "Students"
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-sm ${
                        item === "Students" ? "bg-blue-400" : "bg-gray-200"
                      }`}
                    />
                    {item}
                    {item === "Fee Management" && (
                      <span className="ml-auto text-gray-300">›</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 bg-gray-50 p-4 flex flex-col gap-3 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-500 text-xs font-semibold">Student Management</p>
                    <p className="text-[9px] text-gray-400">DASHBOARD › STUDENTS</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-green-400" />
                    <div className="bg-gray-100 text-[8px] px-2 py-0.5 rounded">Session 2025–26</div>
                  </div>
                </div>

                <p className="text-[9px] text-green-600">Showing all enrolled students for current session</p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Total Students", value: "1,240" },
                    { label: "Present Today", value: "1,196" },
                    { label: "Fee Collected", value: "₨2.4L" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xs font-semibold text-gray-800">{stat.value}</p>
                      <p className="text-[8px] text-gray-400">{stat.label}</p>
                      <div className="h-0.5 mt-1 rounded-full bg-linear-to-r from-blue-400 to-blue-200" />
                    </div>
                  ))}
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg overflow-hidden border border-gray-100">
                  <div className="grid grid-cols-5 px-2 py-1 border-b border-gray-100">
                    {["Name", "Class", "Roll No.", "Attendance", "Fee Status"].map((h) => (
                      <p key={h} className="text-[8px] text-blue-400 font-medium">{h}</p>
                    ))}
                  </div>
                  {[
                    ["Ahmed Raza", "Class X-A", "0023", "96%", "Paid"],
                    ["Sara Malik", "Class IX-B", "0041", "88%", "Pending"],
                    ["Usman Ali", "Class X-A", "0024", "100%", "Paid"],
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-5 px-2 py-1.5 border-b border-gray-50">
                      {row.map((cell, j) => (
                        <p
                          key={j}
                          className={`text-[8px] truncate ${
                            j === 0 ? "text-blue-400" : "text-gray-500"
                          }`}
                        >
                          {cell}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Feature Cards */}
        <div className="flex flex-col gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`platform-card relative bg-linear-to-br ${feature.bg} rounded-2xl p-6 flex items-start justify-between gap-4 overflow-hidden`}
            >
              <div className="flex flex-col gap-3 max-w-[55%]">
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className={`${feature.iconColor} shrink-0`}>{feature.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
