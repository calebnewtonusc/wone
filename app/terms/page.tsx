import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Wone",
  description: "Terms and conditions for using the Wone platform.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-10 transition-colors"
        >
          ← Back to Wone
        </Link>

        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-400">Last updated: February 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Acceptance of Terms</h2>
            <p>
              By accessing or using the Wone platform, website, or any related services (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.
            </p>
            <p className="mt-3">
              These terms apply to all users, including founders, investors, advisors, and any other visitors to the platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Description of Service</h2>
            <p>
              Wone is a startup acceleration platform designed for Southern California founders. The Service includes tools for fundraising campaign management, investor matching, advisor sessions, grant discovery, and related features.
            </p>
            <p className="mt-3">
              During the beta period, the Service is provided free of charge. Paid plans will be introduced at general availability, subject to pricing displayed on the platform at that time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">User Accounts &amp; Eligibility</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You must be at least 18 years old to use the Service.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You agree to provide accurate and current information when creating an account or startup profile.</li>
              <li>One account per person or legal entity; you may not create accounts on behalf of others without authorization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Use the Service for any unlawful purpose or in violation of these Terms.</li>
              <li>Post false, misleading, or fraudulent information about yourself, your startup, or your fundraising status.</li>
              <li>Attempt to circumvent any platform security measures or access controls.</li>
              <li>Scrape, copy, or systematically extract investor or advisor data from the platform.</li>
              <li>Use the Service to harass, spam, or solicit other users outside of the platform&apos;s intended communication channels.</li>
              <li>Engage in any activity that disrupts or degrades the performance of the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Intellectual Property</h2>
            <p>
              The Wone name, logo, platform design, and proprietary tools are owned by Wone and protected by applicable intellectual property laws. You may not use our branding or content without written permission.
            </p>
            <p className="mt-3">
              You retain ownership of the content you submit to Wone (pitch decks, metrics, descriptions). By submitting content, you grant Wone a limited, non-exclusive license to display and process that content for the purposes of providing the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">No Financial or Legal Advice</h2>
            <p>
              Wone provides tools and information to support your fundraising journey, but nothing on the platform constitutes financial, legal, investment, or tax advice. Fundraising scorecards, investor matches, and analytics are provided for informational purposes only. Always consult qualified professionals before making financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Disclaimers &amp; Limitation of Liability</h2>
            <p>
              The Service is provided &quot;as is&quot; without warranties of any kind, express or implied. Wone does not guarantee that the Service will be error-free, uninterrupted, or that any particular fundraising outcome will be achieved through use of the platform.
            </p>
            <p className="mt-3">
              To the maximum extent permitted by law, Wone shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Termination</h2>
            <p>
              Wone reserves the right to suspend or terminate your account at any time for violations of these Terms or for any other reason at our discretion. You may delete your account at any time by contacting <a href="mailto:hello@woneportal.com" className="text-blue-600 hover:underline">hello@woneportal.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of California, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Los Angeles County, California.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Changes to These Terms</h2>
            <p>
              We may revise these Terms at any time. Continued use of the Service after changes are posted constitutes your acceptance of the revised Terms. We will provide notice of material changes via email to registered users.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Contact</h2>
            <p>
              Questions about these Terms? Email us at{" "}
              <a href="mailto:hello@woneportal.com" className="text-blue-600 hover:underline">
                hello@woneportal.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
