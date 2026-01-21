import ServiceForm from "@/components/ServiceForm";

export default function Home() {
  return (
    <main className="bg-[#f6f1ea] min-h-screen">
      {/* Header */}
      <header className="bg-[#f6f1ea]">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="text-lg font-semibold">
            <span className="text-[#b65c3a]">PS</span>{" "}
            <span className="text-gray-800">Civil Engineer</span>
          </div>

          <div className="text-2xl">☰</div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="relative h-[320px] md:h-[420px]">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/images/hero-desktop.jpg"
              />
              <img
                src="/images/hero-mobile.jpg"
                alt="Phoolchand Saini - Civil Engineer"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </picture>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <h1 className="text-2xl md:text-4xl font-bold">
                Phoolchand Saini,
                <br />
                Your Local Civil Engineer
              </h1>
              <p className="mt-2 text-sm md:text-base">
                Reliable Civil Engineering, Repair & Consultancy Services
              </p>

              <a
                href="#contact"
                className="mt-4 inline-block bg-[#b65c3a] px-5 py-3 rounded-lg text-sm font-medium w-fit"
              >
                Request Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 mt-10">
        <h2 className="text-center text-2xl font-semibold mb-6">What I Do</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "All Civil Consultancy",
            "All Civil Repairing",
            "Rewiring",
            "Water Proofing",
            "Dismantling",
            "Sanitary and Light Repairing",
            "Core Cutting",
            "Labor Transport",
          ].map((service) => (
            <div
              key={service}
              className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#f6f1ea] flex items-center justify-center text-[#b65c3a] font-bold">
                ✓
              </div>
              <div>
                <p className="font-medium text-gray-800">{service}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 mt-12 pb-16">
        <div className="bg-[#e9f2fb] rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Contact Me
          </h2>

          <div className="max-w-xl mx-auto">
            <ServiceForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f6f1ea] border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
          <p>📞 +91 63768 50258</p>
          <p>✉️ Phoolchands008@gmail.com</p>
          <p className="mt-2">© {new Date().getFullYear()} Phoolchand Saini</p>
        </div>
      </footer>
    </main>
  );
}
