import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-white mb-4">
              Prime<span className="text-blue-500">Connect</span>
            </div>
            <p className="text-sm leading-relaxed">
              Helping Oklahoma businesses compare and connect with the right
              internet provider — fiber, wireless, VoIP, and broadband
              solutions.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-bold mb-4">Locations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/oklahoma-city-business-internet" className="hover:text-blue-500 transition-colors">
                  Oklahoma City
                </Link>
              </li>
              <li>
                <Link href="/tulsa-business-internet" className="hover:text-blue-500 transition-colors">
                  Tulsa
                </Link>
              </li>
              <li>
                <Link href="/edmond-business-internet" className="hover:text-blue-500 transition-colors">
                  Edmond
                </Link>
              </li>
              <li>
                <Link href="/norman-business-internet" className="hover:text-blue-500 transition-colors">
                  Norman
                </Link>
              </li>
              <li>
                <Link href="/broken-arrow-business-internet" className="hover:text-blue-500 transition-colors">
                  Broken Arrow
                </Link>
              </li>
              <li>
                <Link href="/lawton-business-internet" className="hover:text-blue-500 transition-colors">
                  Lawton
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-blue-500 transition-colors">
                  View All Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#questionnaire" className="hover:text-blue-500 transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-blue-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Oklahoma City, OK</li>
              <li>
                <a href="tel:4054089927" className="hover:text-blue-500 transition-colors">
                  (405) 408-9927
                </a>
              </li>
              <li>
                <a href="mailto:contact@primeconnectnow.com" className="hover:text-blue-500 transition-colors">
                  contact@primeconnectnow.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} PrimeConnect. All rights reserved.</p>
          <p>Serving businesses across Oklahoma City, Tulsa, and beyond.</p>
        </div>
      </div>
    </footer>
  );
}