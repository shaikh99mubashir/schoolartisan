import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – School Artisan</title>
        <meta
          name="description"
          content="Read the Privacy Policy for School Artisan, the school management system and website solution. Learn how we collect, use and protect school and student data."
        />
        <meta name="robots" content="noindex,follow" />
      </Head>
      <main className="min-h-screen bg-white flex flex-col">
        <Header />
        <section className="w-full max-w-4xl mx-auto px-6 lg:px-0 py-16">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="space-y-6 text-sm leading-relaxed text-gray-700">
            <p>
              This Privacy Policy explains how School Artisan (&quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) collects, uses and protects
              information when schools, staff, parents and students use our
              school management system, website and related services
              (&quot;Services&quot;).
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              1. Information We Collect
            </h2>
            <p>
              We only collect information that is necessary to operate the
              school management platform and provide our Services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>School information</strong> – school name, address,
                contact details, logo and branding.
              </li>
              <li>
                <strong>Staff information</strong> – names, contact details,
                roles and login credentials.
              </li>
              <li>
                <strong>Student information</strong> – names, contact details,
                admission details, classes, sections, attendance, exam and
                academic records.
              </li>
              <li>
                <strong>Parent / guardian information</strong> – names, contact
                numbers, email addresses and relationship to students.
              </li>
              <li>
                <strong>Fee and billing information</strong> – fee structure,
                payments, due amounts and receipts. We do not store full
                payment card details on our own servers.
              </li>
              <li>
                <strong>Usage data</strong> – login activity, device
                information, IP address and basic analytics to improve the
                product and security.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              2. How We Use Information
            </h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage the School Artisan platform and features.</li>
              <li>
                Enable schools to manage admissions, attendance, fees, exams and
                communication.
              </li>
              <li>
                Create secure accounts and authenticate access for staff,
                parents and students.
              </li>
              <li>
                Send notifications related to attendance, fees, announcements,
                homework and results.
              </li>
              <li>
                Monitor performance, troubleshoot issues and improve our
                Services.
              </li>
              <li>
                Comply with legal requirements and protect the rights and safety
                of students, schools and our platform.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              3. Data Security
            </h2>
            <p>
              We implement reasonable technical and organizational measures to
              protect data against unauthorized access, loss, misuse or
              disclosure. This includes secure connections (HTTPS), role-based
              access control and regular monitoring of our systems. However, no
              method of transmission over the internet is 100% secure, and we
              cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              4. Data Sharing
            </h2>
            <p>
              We do not sell school, staff, parent or student data to third
              parties. We may share data only in the following limited cases:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                With trusted service providers (such as hosting, messaging or
                payment partners) who process data on our behalf under strict
                agreements.
              </li>
              <li>
                When required by law, regulation, court order or government
                request.
              </li>
              <li>
                To protect the safety, rights or property of students, schools
                or our platform.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              5. Data Retention
            </h2>
            <p>
              We retain data for as long as a school has an active agreement
              with us or as required to provide the Services. After termination,
              data may be archived or securely deleted in accordance with our
              retention policies and any applicable legal requirements.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              6. Your Rights
            </h2>
            <p>
              Depending on your relationship with the school and local
              regulations, you may have rights to access, update or request
              deletion of certain personal data. In such cases, please contact
              your school administration first—they manage and control the data
              within the system. We will cooperate with schools to support
              valid requests.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              7. Children&apos;s Data
            </h2>
            <p>
              Our platform is used by schools to manage student information.
              Student data is provided and controlled by the school and is used
              strictly for educational and administrative purposes. We do not
              knowingly collect information directly from children without
              school or parental involvement.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we do,
              we will update the &quot;Last updated&quot; date at the top of
              this page. We encourage you to review this page periodically to
              stay informed about how we protect your information.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how we
              handle data, you can contact us through the School Artisan
              website&apos;s contact options or via the details shared in your
              service agreement.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

