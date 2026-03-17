import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms &amp; Conditions – School Artisan</title>
        <meta name="description" content="Read the Terms and Conditions for using School Artisan, the school management system and website solution for schools and educational institutions." />
        <meta name="robots" content="noindex,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms & Conditions – School Artisan" />
        <meta property="og:description" content="Terms and Conditions for using School Artisan school management system and website solution." />
        <meta property="og:url" content="https://schoolartisan.com/terms-and-conditions" />
      </Head>
      <main className="min-h-screen bg-white flex flex-col">
        <Header />
        <section className="w-full max-w-4xl mx-auto px-6 lg:px-0 py-16">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="space-y-6 text-sm leading-relaxed text-gray-700">
            <p>
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your use
              of the School Artisan school management system, website and
              related services (&quot;Services&quot;). By accessing or using
              the Services, you agree to be bound by these Terms on behalf of
              your school or institution.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              1. Use of the Services
            </h2>
            <p>
              The Services are provided to schools, educational institutions and
              their authorized staff, parents and students. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use the platform only for legitimate educational and
                administrative purposes.
              </li>
              <li>
                Ensure that login credentials are kept confidential and not
                shared with unauthorized persons.
              </li>
              <li>
                Provide accurate information and keep school, staff and student
                data up to date.
              </li>
              <li>
                Not misuse the system for any illegal, harmful or abusive
                activity.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              2. School Responsibilities
            </h2>
            <p>
              The school or institution is responsible for how the platform is
              used internally, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Appointing administrators who manage users, permissions and
                access rights.
              </li>
              <li>
                Informing staff and parents about how their data is used in line
                with the school&apos;s own policies.
              </li>
              <li>
                Reviewing data entered into the system and ensuring compliance
                with applicable education and data protection laws.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              3. Our Responsibilities
            </h2>
            <p>
              We will provide access to the School Artisan platform according to
              the features and service levels agreed with your school. This
              includes hosting, maintenance, security measures and reasonable
              technical support during the subscription period.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              4. Subscription, Fees and Payment
            </h2>
            <p>
              School Artisan is typically offered on a subscription basis. Fees,
              billing cycles and payment terms are defined in your proposal,
              invoice or service agreement. Unless otherwise stated:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Subscription fees are payable in advance for the selected
                billing period.
              </li>
              <li>
                Late or missed payments may result in temporary suspension of
                access to the Services.
              </li>
              <li>
                Taxes, if applicable, are the responsibility of the subscribing
                institution.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              5. Intellectual Property
            </h2>
            <p>
              All software, interfaces, designs, logos and documentation related
              to School Artisan are owned or licensed by us. Schools receive a
              limited, non-exclusive, non-transferable right to use the platform
              during the subscription term. You may not copy, modify, resell or
              reverse-engineer the platform.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              6. Data Ownership
            </h2>
            <p>
              The school remains the owner of the data it enters into the
              system, including student and staff information. We process and
              store this data only to provide the Services, as described in our
              Privacy Policy. Upon written request and subject to technical
              feasibility, certain data may be exported at the end of the
              service term.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              7. Service Availability
            </h2>
            <p>
              We aim to keep the platform available with minimal interruptions,
              but occasional downtime may occur due to maintenance, upgrades or
              factors beyond our control (such as internet or infrastructure
              issues). We are not liable for any loss resulting from reasonable
              downtime, though we will take steps to restore service as quickly
              as possible.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              8. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, we are not responsible for
              indirect, incidental or consequential damages arising from the use
              of the Services. Our total liability in connection with any claim
              is limited to the amount of fees paid by the school for the
              Service period in which the claim arose.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              9. Suspension or Termination
            </h2>
            <p>
              We may suspend or terminate access to the Services if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                There is a serious or repeated breach of these Terms or
                applicable laws.
              </li>
              <li>
                Subscription fees remain unpaid after the due date and
                reasonable reminders.
              </li>
              <li>
                Continued use of the platform poses a security or misuse risk.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              10. Changes to These Terms
            </h2>
            <p>
              We may revise these Terms from time to time. When we make
              material changes, we will update this page and, where appropriate,
              inform schools via email or in-app notices. Continued use of the
              Services after changes take effect will constitute acceptance of
              the updated Terms.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              11. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws applicable in the region or
              country specified in your service agreement or invoice, without
              regard to conflict of law principles.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
              12. Contact
            </h2>
            <p>
              If you have any questions about these Terms &amp; Conditions,
              please contact us using the details provided in your School
              Artisan agreement or through the contact options available on our
              website.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

