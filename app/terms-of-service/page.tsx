import Link from "next/link";

export const metadata = {
  title: "Terms of Service | PrimeConnect",
  description: "PrimeConnect's terms of service and conditions of use.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Prime<span className="text-blue-500">Connect</span>
        </Link>
      </nav>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-slate-400 text-sm mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using PrimeConnect, you agree to be bound by these Terms of Service. If you
              do not agree, please do not use our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">2. Description of Service</h2>
            <p>
              PrimeConnect helps businesses compare and connect with business internet providers in
              Oklahoma, including fiber, cable, wireless, and VoIP solutions. We are not an internet
              service provider ourselves — we connect you with providers and specialists who can offer
              service in your area.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">3. No Guarantee of Service or Pricing</h2>
            <p>
              Pricing, speeds, and availability shown on this site — including in our savings calculator
              and comparison tools — are estimates based on typical market rates and are not guaranteed
              quotes. Actual pricing and availability depend on your specific location and the provider's
              current offerings, and will be confirmed during your consultation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">4. Your Responsibilities</h2>
            <p>
              You agree to provide accurate information when using our forms and tools. You agree not to
              use this website for any unlawful purpose or in a way that could damage, disable, or impair
              the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">5. Third-Party Providers</h2>
            <p>
              PrimeConnect connects you with third-party internet service providers. We are not
              responsible for the products, services, contracts, or actions of those providers. Any
              agreement you enter into with a provider is solely between you and that provider.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">6. Limitation of Liability</h2>
            <p>
              PrimeConnect provides this website and its tools on an "as is" basis. We are not liable for
              any indirect, incidental, or consequential damages arising from your use of this site or
              reliance on information provided through it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">7. Changes to These Terms</h2>
            <p>
              We may update these Terms of Service from time to time. Continued use of the site after
              changes are posted constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">8. Contact Us</h2>
            <p>
              Questions about these Terms? Reach us at{" "}
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