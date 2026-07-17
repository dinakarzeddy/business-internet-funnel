import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | PrimeConnect",
  description: "PrimeConnect's privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Prime<span className="text-blue-500">Connect</span>
        </Link>
      </nav>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">1. Information We Collect</h2>
            <p>
              When you use PrimeConnect to compare business internet providers, we collect information
              you provide directly, including your name, business name, email address, phone number,
              ZIP code, city, employee count, and details about your current internet service. We also
              automatically collect technical information such as device type, browser, and referral
              source through analytics tools.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">2. How We Use Your Information</h2>
            <p>
              We use the information you provide to match you with relevant business internet providers,
              connect you with a specialist for a free consultation, and improve our services. We do not
              sell your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">3. Sharing Your Information</h2>
            <p>
              We may share your information with business internet providers or partners in order to
              generate quotes and connect you with service options relevant to your business needs. We
              may also share information with service providers who help us operate our website and
              communications (such as analytics and customer relationship tools).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">4. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies, including Google Analytics and Google Tag Manager,
              to understand how visitors use our site and to improve your experience. You can control
              cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">5. Data Security</h2>
            <p>
              We take reasonable measures to protect your information from unauthorized access, loss, or
              misuse. However, no method of transmission over the internet is completely secure, and we
              cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">6. Your Choices</h2>
            <p>
              You may contact us at any time to request access to, correction of, or deletion of your
              personal information, or to opt out of marketing communications.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a href="mailto:contact@primeconnectnow.com" className="text-blue-400 hover:text-blue-300">
                contact@primeconnectnow.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}