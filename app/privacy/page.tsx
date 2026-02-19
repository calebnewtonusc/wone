import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${siteConfig.name}`,
  description: `How ${siteConfig.name} collects, uses, and protects your data.`,
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-10 transition-colors"
        >
          ← Back to {siteConfig.name}
        </Link>

        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400">Last updated: February 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Overview</h2>
            <p>
              {siteConfig.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy of founders, investors, and all users who interact with the {siteConfig.name} platform. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
            </p>
            <p className="mt-3">
              By using {siteConfig.name} — including our waitlist, website, and future platform features — you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Waitlist &amp; account data:</strong> Email address, name, and any optional information you provide when signing up.</li>
              <li><strong>Startup profile data:</strong> Pitch deck contents, traction metrics, funding targets, and team information you voluntarily provide on the platform.</li>
              <li><strong>Usage data:</strong> Pages visited, features used, time on site, and device/browser information collected automatically via analytics tools.</li>
              <li><strong>Communications:</strong> Messages you send us via the contact form or email.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To operate and improve the {siteConfig.name} platform and its features.</li>
              <li>To match founders with relevant investors and advisors.</li>
              <li>To send transactional emails, product updates, and waitlist notifications (you may opt out at any time).</li>
              <li>To analyze usage patterns and improve user experience.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share limited information with:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong>Investors and advisors on the platform</strong> — only the startup profile information you explicitly publish to the network.</li>
              <li><strong>Service providers</strong> — third-party tools we use to operate the platform (e.g., email delivery, analytics), under strict data processing agreements.</li>
              <li><strong>Legal authorities</strong> — when required by law or to protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by emailing{" "}
              <a href={`mailto:${siteConfig.email.privacy}`} className="text-blue-600 hover:underline">
                {siteConfig.email.privacy}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Object to or restrict certain processing.</li>
              <li>Data portability (receiving your data in a machine-readable format).</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${siteConfig.email.privacy}`} className="text-blue-600 hover:underline">
                {siteConfig.email.privacy}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Security</h2>
            <p>
              We implement industry-standard security measures to protect your data, including encrypted data transmission (TLS), access controls, and regular security reviews. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. We will notify registered users of material changes via email. Continued use of {siteConfig.name} after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Contact</h2>
            <p>
              For privacy-related questions or requests, contact us at{" "}
              <a href={`mailto:${siteConfig.email.privacy}`} className="text-blue-600 hover:underline">
                {siteConfig.email.privacy}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
