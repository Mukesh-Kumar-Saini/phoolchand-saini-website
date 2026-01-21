import ServiceForm from "@/components/ServiceForm";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero */}
      <section className="text-center py-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Phoolchand Saini – Civil Engineer
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Reliable Civil Engineering, Repair & Consultancy Services
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-md"
        >
          Request Service
        </a>
      </section>

      {/* About */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-700 leading-relaxed">
          Phoolchand Saini is a professional civil engineer providing reliable
          consultancy, repairing, and construction-related services. With
          practical experience and a focus on quality work, he delivers
          cost-effective and durable solutions for residential and commercial
          needs.
        </p>
      </section>

      {/* Services */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Services</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <li key={service} className="bg-white p-4 rounded-md shadow-sm">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Placeholder */}
      <section id="contact" className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Request a Service</h2>
        <ServiceForm />
      </section>

      {/* Footer */}
      <footer className="border-t mt-10 pt-6 text-center text-sm text-gray-600">
        <p>Phone: +91 63768 50258</p>
        <p className="mt-2">© {new Date().getFullYear()} Phoolchand Saini</p>
      </footer>
    </main>
  );
}
