"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useEffect } from "react";
import type { SwiperRef } from "swiper/react";
import { Play, User } from "lucide-react";
import { gsap } from "@/lib/gsap";

// @ts-ignore
import "swiper/css";

const testimonials = [
  {
    quote:
      "School Artisan has transformed our entire school administration. Attendance, fees and exams are now managed in one place—we have reduced paperwork by almost 60%.",
    name: "Mrs. Rukhsana Tariq",
    role: "Principal, Al-Huda Public School",
    bgColor: "from-blue-100 to-blue-50",
  },
  {
    quote:
      "Parents now receive real-time updates through the portal. They no longer need to call the school separately for homework, exam dates or fee reminders.",
    name: "Sir Ahmed Khan",
    role: "Coordinator, The Knowledge School",
    bgColor: "from-blue-100 to-blue-200",
  },
  {
    quote:
      "Previously we relied on multiple registers, Excel files and manual slips for fees and accounts. With School Artisan, our finance reports are generated in seconds.",
    name: "Mrs. Mehwish Anwar",
    role: "Account Officer, City Grammar School",
    bgColor: "from-blue-50 to-blue-100",
  },
  {
    quote:
      "Implementation was smooth—the team trained our staff thoroughly. Within one week we moved from a manual system to a fully digital ERP without disruption.",
    name: "Sir Salman Iqbal",
    role: "Administrator, Allied School Campus",
    bgColor: "from-blue-100 to-blue-50",
  },
  {
    quote:
      "Our school website now looks professional—online admission forms, gallery and news updates have significantly increased new admission enquiries.",
    name: "Ms. Ayesha Noor",
    role: "Owner, Bright Future School",
    bgColor: "from-blue-100 to-blue-200",
  },
];

const avatarColors = [
  "bg-blue-600",
  "bg-blue-500",
  "bg-blue-400",
  "bg-blue-700",
  "bg-blue-400",
];

export default function TestimonialsSection() {
  const swiperRef = useRef<SwiperRef>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testi-word", {
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

      gsap.from(".testi-sub", {
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

      gsap.from(".testi-arrows", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".testi-slider", {
        y: 40,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testi-slider",
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="w-full py-20 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-medium leading-tight">
              {["Hear", "from", "Our"].map((word, i) => (
                <span
                  key={i}
                  className="testi-word text-gray-900 inline-block"
                  style={{ marginRight: "0.25em" }}
                >
                  {word}
                </span>
              ))}
              <br />
              <span className="testi-word text-primary inline-block" style={{ marginRight: "0.25em" }}>
                Successful
              </span>{" "}
              <span className="testi-word text-secondary inline-block">Clients</span>
            </h2>
            <p className="testi-sub mt-4 text-gray-500 text-sm max-w-sm leading-relaxed">
              See{" "}
              <span className="text-gray-700">
                why agencies, solo marketers, and brands choose{" "}
              </span>
              <strong>Smart Media</strong> to supercharge their ad performance.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="testi-arrows flex items-center gap-3 mt-2">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors font-semibold"
            >
              ‹
            </button>
            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors font-semibold"
            >
              ›
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="testi-slider">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              1024: { slidesPerView: 2.2, spaceBetween: 24 },
              1280: { slidesPerView: 2.5, spaceBetween: 24 },
            }}
            className="!overflow-visible"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-50 rounded-3xl overflow-hidden flex h-64 border border-gray-100 shadow-sm">
                  {/* Left: Quote + Person */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <p className="text-gray-800 text-sm leading-relaxed line-clamp-6 font-medium">
                      {t.quote}
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <div
                        className={`w-10 h-10 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-semibold text-sm shrink-0`}
                      >
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                        <p className="text-xs text-gray-400">{t.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Image placeholder */}
                  <div
                    className={`w-44 shrink-0 bg-linear-to-br ${t.bgColor} relative flex items-center justify-center`}
                  >
                    <div className="flex flex-col items-center gap-2 opacity-60">
                      <div
                        className={`w-16 h-16 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center`}
                      >
                        <User size={32} color="white" />
                      </div>
                      <div className="w-20 h-10 rounded-t-full bg-white/30" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                        <Play size={20} className="ml-0.5 fill-gray-700 text-gray-700" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
