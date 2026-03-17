import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "demo" as "demo" | "contact",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong");
      }
      setSuccess("Thank you! Your message has been sent. We usually reply within 24–48 hours.");
      setForm({ name: "", email: "", phone: "", type: "demo", message: "" });
    } catch (err: any) {
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us – School Artisan</title>
        <meta name="description" content="Contact School Artisan to book a live demo of the school management system or to ask any question about pricing, implementation and support." />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us – School Artisan" />
        <meta property="og:description" content="Book a live demo or ask about pricing, implementation and support for School Artisan school management system." />
        <meta property="og:url" content="https://schoolartisan.com/contact" />
        <meta name="twitter:title" content="Contact Us – School Artisan" />
        <meta name="twitter:description" content="Book a live demo or ask about pricing, implementation and support for School Artisan school management system." />
      </Head>
      <main className="min-h-screen bg-white flex flex-col">
        <Header />

        {/* Hero + Form section */}
        <section className="w-full max-w-6xl mx-auto px-6 lg:px-0 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
              Let&apos;s Talk...
              <br />
              <span className="text-primary">We&apos;re Here To Help You Digitize Your School.</span>
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              Have questions about School Artisan, want to{" "}
              <strong>book a live demo</strong>, or need details about pricing and implementation?
              Share a few details and our team will get in touch.
            </p>

            <div className="mt-2 rounded-2xl border border-gray-100 bg-gray-50 p-5 space-y-3 text-sm text-gray-700">
              <p className="font-semibold text-gray-900">How We Can Help</p>
              <ul className="space-y-2">
                <li>• Walk you through the School ERP dashboard.</li>
                <li>• Plan a step-by-step implementation for your school or group of schools.</li>
                <li>• Discuss website, parent portal and communication features.</li>
                <li>• Share pricing based on your student strength and required modules.</li>
              </ul>
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 lg:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4 text-sm text-gray-700">
              <div>
                <label className="block mb-1 font-medium">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-200 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-200 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Phone Number (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-200 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary"
                  placeholder="+92 301 2345678"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">I am interested in</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary bg-white"
                >
                  <option value="demo">Booking a demo</option>
                  <option value="contact">General contact / question</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-2xl border border-gray-200 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary resize-none"
                  placeholder="Tell us about your school, number of students, and what you would like to improve…"
                />
              </div>

              {success && (
                <p className="text-xs text-green-600 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                  {success}
                </p>
              )}
              {error && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold px-4 py-2.5 rounded-full transition-colors text-sm"
              >
                {submitting ? "Sending..." : "Submit"}
              </button>

              <p className="text-[11px] text-gray-400 mt-2">
                By submitting, you agree that we may contact you about School Artisan. We usually reply within
                24–48 hours. Messages are sent to{" "}
                <span className="font-medium text-gray-600">contact@techvocalz.com</span>.
              </p>
            </form>
          </div>
        </section>

        {/* Simple FAQ-style reassurance under contact */}
        <section className="w-full max-w-6xl mx-auto px-6 lg:px-0 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <p className="font-semibold mb-1">1:1 Onboarding Call</p>
              <p className="text-gray-600">
                Get a live walkthrough of the dashboard, modules and parent portal with our product specialist.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <p className="font-semibold mb-1">Implementation Plan</p>
              <p className="text-gray-600">
                We help you plan data migration, training and go-live for one or multiple campuses.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <p className="font-semibold mb-1">Support & Training</p>
              <p className="text-gray-600">
                Ongoing support via email, calls and remote sessions to keep your team confident on the system.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

