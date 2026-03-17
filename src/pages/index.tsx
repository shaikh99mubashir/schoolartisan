import Head from "next/head";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlatformSection from "@/components/PlatformSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DashboardSection from "@/components/DashboardSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          School Artisan – School Management System & School Website Solutions
        </title>
        <meta
          name="description"
          content="School Artisan is an all-in-one school management system and website solution for schools. Manage attendance, fees, exams, results and parent communication from one simple dashboard."
        />
        <meta
          name="keywords"
          content="school management system, school ERP, school software, school website, online fees, student attendance, exam management, result management"
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="School Artisan – Smart School Management System" />
        <meta property="og:description" content="Digitize your school with a modern School ERP: attendance, fees, exams, report cards and parent app – all in one place." />
        <meta property="og:url" content="https://schoolartisan.com/" />
        <meta property="og:image" content="https://schoolartisan.vercel.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://schoolartisan.vercel.app/og-image.png" />
        <meta name="twitter:title" content="School Artisan – Smart School Management System" />
        <meta name="twitter:description" content="Digitize your school with a modern School ERP: attendance, fees, exams, report cards and parent app – all in one place." />
      </Head>
      <main className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <PlatformSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <DashboardSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
