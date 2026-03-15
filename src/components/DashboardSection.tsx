import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const MockupCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 ${className}`}
  >
    <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
      <div className="w-4 h-4 bg-gray-200 rounded" />
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center">
          <span className="text-white text-[8px]">1</span>
        </div>
        <div className="w-5 h-5 bg-teal-100 rounded-full" />
      </div>
    </div>
    {children}
  </div>
);

const InvoicesCard = () => (
  <MockupCard>
    <div className="p-3 text-[9px]">
      <div className="grid grid-cols-3 gap-2 text-blue-500 font-semibold border-b border-gray-100 pb-1 mb-2">
        <span>ID ↕</span><span>Date ↕</span><span>Due ↕</span>
      </div>
      {[
        ["INV-000053", "18-12-2024", "18-12-2024"],
        ["INV-000008", "21-10-2024", "26-10-2024"],
        ["INV-000007", "21-10-2024", "28-10-2024"],
      ].map((r, i) => (
        <div key={i} className="grid grid-cols-3 gap-2 py-1 border-b border-gray-50">
          <span className="text-blue-400 truncate">{r[0]}</span>
          <span className="text-gray-500">{r[1]}</span>
          <span className="text-gray-500">{r[2]}</span>
        </div>
      ))}
    </div>
  </MockupCard>
);

const ActivityCard = () => (
  <MockupCard>
    <div className="p-3">
      <p className="text-[9px] font-semibold text-gray-700 mb-2">Latest Activity</p>
      {[
        { label: "CRM", sub: "Changed task status (Task #11)", tag: "Completed", time: "1 week ago" },
        { label: "CRM", sub: "Changed task status (Task #10)", tag: "Awaiting Feedback", time: "2 weeks ago" },
        { label: "Customer", sub: "Refunded TikTok Campaign", tag: null, time: "3 months ago" },
      ].map((a, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-gray-200 shrink-0 mt-0.5 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gray-400" />
          </div>
          <div>
            <p className="text-[8px] font-semibold text-blue-500">
              {a.label} <span className="text-gray-400 font-normal">{a.time}</span>
            </p>
            <p className="text-[8px] text-gray-600">{a.sub}</p>
            {a.tag && (
              <span className="text-[8px] text-gray-500">
                <strong>Status:</strong> {a.tag}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </MockupCard>
);

const StatsCard = () => (
  <MockupCard>
    <div className="p-3 flex flex-col gap-2.5">
      {[
        { value: "1", label: "Projects Completed", bar: "bg-teal-400", iconBg: "bg-teal-100", dot: "bg-teal-400" },
        { value: "$0.00", label: "Invoices Due", bar: "bg-orange-400", iconBg: "bg-orange-100", dot: "bg-orange-400" },
        { value: "$0.00", label: "Invoices Overdue", bar: "bg-red-400", iconBg: "bg-red-100", dot: "bg-red-400" },
      ].map((s, i) => (
        <div key={i} className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-800">{s.value}</p>
            <p className="text-[9px] text-gray-400">{s.label}</p>
            <div className={`h-0.5 w-16 ${s.bar} mt-1 rounded-full`} />
          </div>
          <div className={`w-7 h-7 ${s.iconBg} rounded-lg flex items-center justify-center`}>
            <div className={`w-3 h-3 ${s.dot} rounded-sm`} />
          </div>
        </div>
      ))}
    </div>
  </MockupCard>
);

const CustomersCard = () => (
  <MockupCard>
    <div className="p-3 text-[9px]">
      <div className="grid grid-cols-2 gap-2 text-blue-500 font-semibold border-b border-gray-100 pb-1 mb-2">
        <span>Name ↕</span><span>Client ↕</span>
      </div>
      {[
        ["Customer One ★", "IBSPoint Sol..."],
        ["Customer Two", "IBSPoint Sol..."],
        ["TikTok Customer", "IBSPoint Sol..."],
      ].map((r, i) => (
        <div key={i} className="grid grid-cols-2 gap-2 py-1.5 border-b border-gray-50 items-center">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-100 rounded-full shrink-0" />
            <span className="text-gray-600 truncate">{r[0]}</span>
          </div>
          <span className="text-gray-400 truncate">{r[1]}</span>
        </div>
      ))}
    </div>
  </MockupCard>
);

const UserFormCard = () => (
  <MockupCard>
    <div className="p-3 text-[9px]">
      <p className="text-[10px] font-semibold text-gray-700 mb-2">Create A New User</p>
      {["First Name*", "Last Name*", "Email Address*"].map((f) => (
        <div key={f} className="mb-1.5">
          <p className="text-gray-500 mb-0.5">{f}</p>
          <div className="h-4 bg-gray-100 rounded border border-gray-200 w-full" />
        </div>
      ))}
      <div className="mb-1.5">
        <p className="text-gray-500 mb-0.5">Telephone</p>
        <div className="h-4 bg-gray-100 rounded border border-gray-200 w-full flex items-center px-1">
          <span className="text-[8px] text-gray-400">🇵🇰 +92 • 301 2345678</span>
        </div>
      </div>
    </div>
  </MockupCard>
);

const PhoneMockup = () => (
  <div className="relative w-56 h-[480px] bg-white rounded-[2.5rem] border-4 border-primary shadow-2xl overflow-hidden shrink-0">
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-full z-10" />
    <div className="absolute inset-0 bg-white overflow-y-auto pt-10 px-3 pb-3">
      <div className="flex items-center justify-between mb-3">
        <div className="w-4 h-4 bg-gray-300 rounded" />
        <div className="flex items-center gap-2">
          <div className="relative w-5 h-5">
            <div className="w-4 h-4 bg-gray-300 rounded-full" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
          </div>
          <div className="w-5 h-5 bg-teal-100 rounded-full" />
        </div>
      </div>
      <h3 className="text-sm font-semibold text-gray-900 mb-1">Ad details</h3>
      <p className="text-[9px] text-gray-600 mb-3">Use TikTok account to deliver Spark Ads</p>
      <div className="border border-blue-400 rounded-lg p-2 mb-2 bg-blue-50">
        <div className="flex items-center gap-1.5 mb-0.5">
          <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white ring-1 ring-blue-500" />
          <p className="text-[10px] font-semibold text-gray-800">Single video</p>
        </div>
        <p className="text-[8px] text-gray-500 ml-4">Create an ad with one video or multiple</p>
      </div>
      <div className="border border-gray-200 rounded-lg p-2 mb-3 bg-white">
        <div className="flex items-center gap-1.5 mb-0.5">
          <div className="w-3 h-3 rounded-full border border-gray-300" />
          <p className="text-[10px] font-semibold text-gray-800">Carousel Images</p>
        </div>
        <p className="text-[8px] text-gray-500 ml-4">1-35 images in a carousel</p>
      </div>
      <p className="text-[9px] text-gray-700 font-semibold mb-1">Video *</p>
      <div className="flex items-center gap-1 mb-3 border border-gray-300 rounded p-1">
        <div className="bg-gray-200 text-[8px] px-1.5 py-0.5 rounded">Choose File</div>
        <span className="text-[8px] text-gray-400">No file chosen</span>
      </div>
      <button className="w-full border border-gray-300 rounded text-[9px] py-1.5 text-gray-600 mb-3">
        Choose from library
      </button>
      <p className="text-[9px] text-gray-700 font-semibold mb-1">Text</p>
      <div className="border border-gray-200 rounded p-1.5 mb-3">
        <p className="text-[8px] text-gray-300">Enter ad text</p>
      </div>
      <p className="text-[9px] text-gray-700 font-semibold mb-1">Call to action *</p>
      <div className="border border-gray-200 rounded p-1.5 mb-3 flex items-center justify-between">
        <p className="text-[9px] text-gray-600">Apply Now</p>
        <span className="text-gray-400 text-[10px]">▾</span>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 bg-blue-500 text-white text-[9px] py-1.5 rounded-md font-semibold">
          Save as Draft
        </button>
        <button className="flex-1 bg-red-500 text-white text-[9px] py-1.5 rounded-md font-semibold">
          Publish
        </button>
      </div>
    </div>
  </div>
);

// ── Card sets — each array is duplicated inside the column for seamless loop ──
const leftColA = [CustomersCard, StatsCard, ActivityCard, InvoicesCard];
const leftColB = [ActivityCard, UserFormCard, InvoicesCard, StatsCard];
const rightColA = [InvoicesCard, ActivityCard, StatsCard, UserFormCard];
const rightColB = [StatsCard, CustomersCard, ActivityCard, InvoicesCard];

export default function DashboardSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading entrance
      gsap.from(".dash-word", {
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

      // Phone entrance
      gsap.from(".dash-phone", {
        scale: 0.9,
        opacity: 0,
        duration: 0.9,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".dash-sticky",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Side columns fade in
      gsap.from(".dash-side", {
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".dash-sticky",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black w-full">
      {/* Heading */}
      
      <div className="text-center pt-20 pb-10 px-6">
        <h2 className="text-3xl lg:text-4xl font-medium text-white">
          {["Your", "Dashboard,"].map((word, i) => (
            <span
              key={i}
              className="dash-word text-white inline-block"
              style={{ marginRight: "0.25em" }}
            >
              {word}
            </span>
          ))}{" "}
          {["Anywhere", "You", "Go"].map((word, i) => (
            <span
              key={i}
              className="dash-word inline-block"
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
      </div>

      {/* Scroll area — tall so phone stays sticky while user scrolls */}
      <div className="relative" style={{ height: "220vh" }}>
        <div
          className="dash-sticky sticky top-0 h-screen overflow-hidden flex items-center justify-center gap-4"
        >
          {/* Top + bottom fade to black */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, #000 0%, transparent 18%, transparent 82%, #000 100%)",
            }}
          />

          {/* ── LEFT SIDE ── */}
          <div className="dash-side hidden lg:flex gap-3 shrink-0">
            {/* Col A — scrolls UP */}
            <div style={{ animation: "scrollUp 14s linear infinite", willChange: "transform" }}>
              <div className="flex flex-col gap-3 w-52">
                {[...leftColA, ...leftColA].map((Card, i) => (
                  <Card key={i} />
                ))}
              </div>
            </div>
            {/* Col B — scrolls DOWN */}
            <div style={{ animation: "scrollDown 18s linear infinite", willChange: "transform" }}>
              <div className="flex flex-col gap-3 w-52">
                {[...leftColB, ...leftColB].map((Card, i) => (
                  <Card key={i} />
                ))}
              </div>
            </div>
          </div>

          {/* ── CENTER PHONE (sticky) ── */}
          <div className="dash-phone relative z-20 shrink-0">
            <PhoneMockup />
          </div>

          {/* ── RIGHT SIDE ── */}
          <div className="dash-side hidden lg:flex gap-3 shrink-0">
            {/* Col A — scrolls DOWN */}
            <div style={{ animation: "scrollDown 16s linear infinite", willChange: "transform" }}>
              <div className="flex flex-col gap-3 w-52">
                {[...rightColA, ...rightColA].map((Card, i) => (
                  <Card key={i} />
                ))}
              </div>
            </div>
            {/* Col B — scrolls UP */}
            <div style={{ animation: "scrollUp 20s linear infinite", willChange: "transform" }}>
              <div className="flex flex-col gap-3 w-52">
                {[...rightColB, ...rightColB].map((Card, i) => (
                  <Card key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-10" />
    </section>
  );
}
