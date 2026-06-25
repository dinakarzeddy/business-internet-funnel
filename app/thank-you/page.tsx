import Link from 'next/link'

export const metadata = {
  title: 'Thank You | PrimeConnect Business Internet',
  description: 'Your business internet quote request has been submitted. Our team will contact you within 24 hours.',
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-5xl">✓</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Quote Request Submitted!
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Thank you for choosing PrimeConnect. Our business internet specialists will contact you within 24 hours to discuss the best solution for your business.
        </p>

        {/* What Happens Next */}
        <div className="bg-slate-900 rounded-2xl p-8 mb-8 text-left">
          <h2 className="text-xl font-bold mb-6 text-center">What Happens Next</h2>
          <div className="flex flex-col gap-5">
            {[
              {
                step: '1',
                title: 'Specialist reaches out',
                desc: 'A PrimeConnect business internet specialist will call you within 24 hours.',
              },
              {
                step: '2',
                title: 'Needs assessment',
                desc: 'We review your business needs, current setup, and recommend the best solution.',
              },
              {
                step: '3',
                title: 'Custom quote',
                desc: 'You receive a tailored quote with the best available providers in your area.',
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div>
                  <p className="font-bold mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-blue-600 rounded-2xl p-6 mb-8">
          <p className="font-medium mb-1">Have questions? Contact us directly.</p>
          <p className="text-blue-100 font-bold text-lg">contact@primeconnect.com</p>
        </div>

        {/* Back Button */}
        <Link
          href="/"
          className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all inline-block"
        >
          Back to PrimeConnect
        </Link>
      </div>
    </main>
  )
}