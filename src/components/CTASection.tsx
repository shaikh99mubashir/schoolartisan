import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const MiniPhone = () => (
  <div className="w-44 h-80 bg-white rounded-[2rem] border-4 border-primary shadow-xl overflow-hidden shrink-0">
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-gray-800 rounded-full z-10" />
    <div className="pt-7 px-3 pb-3 h-full flex flex-col gap-2 relative">
      <div className="flex items-center justify-between mb-1">
        <div className="w-3 h-3 bg-gray-300 rounded" />
        <div className="flex gap-1">
          <div className="w-4 h-4 bg-blue-300 rounded-full" />
          <div className="w-4 h-4 bg-teal-100 rounded-full" />
        </div>
      </div>
      <p className="text-[9px] font-semibold text-gray-800">Student Dashboard</p>
      <div className="w-7 h-3 bg-gray-300 rounded-full" />
      <p className="text-[7px] text-gray-500">Class X-A · Roll No. 0023 · Session 2025</p>
      <div className="border border-blue-400 rounded-lg p-1.5 bg-blue-50">
        <div className="flex items-center gap-1 mb-0.5">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <p className="text-[8px] font-semibold text-gray-800">Attendance: 96%</p>
        </div>
        <p className="text-[7px] text-gray-500 ml-3">Present 48 / 50 days this month</p>
      </div>
      <div className="border border-gray-200 rounded-lg p-1.5">
        <div className="flex items-center gap-1 mb-0.5">
          <div className="w-2 h-2 rounded-full border border-gray-300" />
          <p className="text-[8px] font-semibold text-gray-800">Upcoming Exam</p>
        </div>
        <p className="text-[7px] text-gray-500 ml-3">Mathematics — Tomorrow 10:00 AM</p>
      </div>
      <p className="text-[8px] text-gray-700 font-semibold mt-1">Homework Due</p>
      <div className="flex items-center gap-1 border border-gray-200 rounded p-1">
        <span className="text-[7px] bg-orange-100 text-orange-600 px-1 py-0.5 rounded">Physics</span>
        <span className="text-[7px] text-gray-400">Chapter 5 Notes</span>
      </div>
      <div className="border border-gray-200 rounded p-1 text-center">
        <p className="text-[8px] text-gray-500">View All Assignments</p>
      </div>
      <p className="text-[8px] text-gray-700 font-semibold">Fee Status</p>
      <div className="border border-green-200 rounded p-1">
        <p className="text-[7px] text-green-600 font-semibold">Paid ✓ — November 2025</p>
      </div>
    </div>
  </div>
);

const MiniDashboard = () => (
  <div className="w-72 h-72 bg-white rounded-2xl border-4 border-gray-800 shadow-xl overflow-hidden shrink-0">
    <div className="bg-gray-900 h-6 flex items-center justify-center">
      <div className="w-14 h-2 bg-gray-700 rounded-full" />
    </div>
    <div className="flex h-full">
      <div className="w-28 bg-white border-r border-gray-100 py-2 px-2 flex flex-col gap-1">
        <div className="flex items-center gap-1 mb-2">
          <div className="w-5 h-5 rounded-full bg-yellow-400" />
          <div>
            <p className="text-[7px] font-semibold text-gray-800">ALRAED</p>
            <p className="text-[5px] text-gray-400">وجهتك نحو الريادة</p>
          </div>
        </div>
        {["Dashboard", "Students", "Attendance", "Examinations", "Fee Management", "E-Learning", "Library", "Transport", "Staff", "Reports"].map((item) => (
          <div key={item} className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[7px] ${item === "Students" ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-400"}`}>
            <div className={`w-2 h-2 rounded-sm ${item === "Students" ? "bg-blue-400" : "bg-gray-200"}`} />
            {item}
          </div>
        ))}
      </div>
      <div className="flex-1 bg-gray-50 p-2">
        <p className="text-blue-500 text-[8px] font-semibold">Student Management</p>
        <p className="text-[6px] text-gray-400 mb-1">DASHBOARD › STUDENTS</p>
        <p className="text-[7px] text-green-600 mb-2">All enrolled students — Session 2025</p>
        <div className="grid grid-cols-3 gap-1 mb-2">
          {[["1,240","Total Students"],["96.4%","Attendance"],["₨2.4L","Fee Collected"]].map(([v,l]) => (
            <div key={l}>
              <p className="text-[8px] font-semibold text-gray-800">{v}</p>
              <p className="text-[6px] text-gray-400">{l}</p>
              <div className="h-0.5 bg-blue-300 rounded-full mt-0.5" />
            </div>
          ))}
        </div>
        <div className="bg-white rounded border border-gray-100">
          <div className="grid grid-cols-4 px-1.5 py-1 border-b border-gray-100">
            {["Name","Class","Attend.","Fee"].map(h => <p key={h} className="text-[6px] text-blue-400">{h}</p>)}
          </div>
          {[["Ahmed Raza","Class X-A","96%","Paid"],["Sara Malik","Class IX-B","88%","Due"],["Usman Ali","Class X-A","100%","Paid"]].map((r,i) => (
            <div key={i} className="grid grid-cols-4 px-1.5 py-1 border-b border-gray-50">
              {r.map((c,j) => <p key={j} className={`text-[6px] truncate ${j===0?"text-blue-400":"text-gray-500"}`}>{c}</p>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-phone", {
        x: -60,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-word", {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-content", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-dashboard", {
        x: 60,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full py-16 px-6 lg:px-12 bg-gray-50 relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle, #c4c4c4 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 lg:gap-8">
        {/* Left Phone */}
        <div className="cta-phone hidden lg:block relative shrink-0">
          <MiniPhone />
        </div>

        {/* Center Text */}
        <div className="flex flex-col items-center text-center gap-6 flex-1 max-w-lg mx-auto">
          <h2 className="text-3xl lg:text-5xl font-medium leading-tight">
            {["See", "Your", "School", "Transform"].map((word, i) => (
              <span
                key={i}
                className="cta-word inline-block"
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
          </h2>
          <p className="cta-content text-gray-600 text-sm leading-relaxed">
            <strong>Experience the full power of School Artisan.</strong> Get a
            personalized walkthrough of how to{" "}
            <strong>
              manage students, automate attendance, collect fees, and run
              exams effortlessly
            </strong>
            —with zero technical expertise required.
          </p>
          <a
            href="/contact"
            className="cta-content bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-3.5 rounded-full transition-colors text-sm inline-flex items-center justify-center"
          >
            Request a Free Demo
          </a>
        </div>

        {/* Right Dashboard */}
        <div className="cta-dashboard hidden lg:block relative shrink-0">
          <MiniDashboard />
        </div>
      </div>
    </section>
  );
}
