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
        <title>School Artisan – Smart School Management Platform</title>
        <meta name="description" content="Streamline your school operations with School Artisan. Manage students, staff, fees, and more from one powerful platform." />
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
