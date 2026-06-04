import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-black text-white">
<nav className="fixed top-0 z-50 w-full border-b border-yellow-500/20 bg-black/90 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
    <Image
  src="/logo.png"
  alt="KIRI"
  width={120}
  height={40}
  priority
/>

    <div className="flex gap-6 text-sm">
  <Link href="/platform" className="hover:text-yellow-500">
    Platform
  </Link>

  <Link href="/leadership" className="hover:text-yellow-500">
    Leadership
  </Link>

  <Link href="/investors" className="hover:text-yellow-500">
    Investors
  </Link>

  <Link href="/contact" className="hover:text-yellow-500">
    Contact
  </Link>
</div>
  </div>
</nav>
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
<div className="mb-8">
<Image
  src="/logo.png"
  alt="KIRI"
  width={500}
  height={180}
  priority
  className="w-full max-w-lg"
/>
</div>

        <h2 className="mb-6 text-4xl font-semibold">
          Coordinating Africa&apos;s Digital Economy
        </h2>

        <p className="max-w-3xl text-xl text-gray-300">
          Building Africa&apos;s Next Generation Transaction Infrastructure
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black">
            Explore Platform
          </button>

          <button className="rounded-lg border border-yellow-500 px-6 py-3 text-yellow-500">
            Partner With Us
          </button>
        </div>
      </section>

      {/* Challenge */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-8 text-4xl font-bold text-yellow-500">
          The Challenge
        </h2>

        <p className="text-xl leading-relaxed text-gray-300">
          Africa&apos;s economic activity continues to grow, yet much of it
          remains fragmented across disconnected systems, operators,
          merchants, logistics providers, and service ecosystems.
        </p>
      </section>

      {/* Solution */}
      <section className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-4xl font-bold text-yellow-500">
            Introducing KIRI
          </h2>

          <p className="text-xl leading-relaxed text-gray-300">
            KIRI provides the transaction coordination infrastructure that
            connects participants, transactions, services, and intelligence
            into unified digital ecosystems.
          </p>
        </div>
      </section>

      {/* Ecosystems */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-center text-4xl font-bold text-yellow-500">
          Ecosystems Powered By KIRI
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-yellow-500 p-6">
            <h3 className="mb-4 text-2xl font-bold">
              Transportation
            </h3>
            <p className="text-gray-300">
              Passenger mobility, ticketing, route intelligence and operator management.
            </p>
          </div>

          <div className="rounded-xl border border-yellow-500 p-6">
            <h3 className="mb-4 text-2xl font-bold">
              Logistics
            </h3>
            <p className="text-gray-300">
              Freight coordination, cargo visibility and supply chain participation.
            </p>
          </div>

          <div className="rounded-xl border border-yellow-500 p-6">
            <h3 className="mb-4 text-2xl font-bold">
              Commerce
            </h3>
            <p className="text-gray-300">
              Merchants, suppliers and buyers connected through trusted infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-yellow-500">
            Leadership
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-bold">Basil Kunaka</h3>
              <p className="text-yellow-500">Founder & CEO</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Derek Kunaka</h3>
              <p className="text-yellow-500">Chief Operating Officer</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Dr Matthews T. Kunaka</h3>
              <p className="text-yellow-500">CFO & Governance Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-yellow-500 py-10 text-center">
        <h3 className="text-2xl font-bold text-yellow-500">
          KIRI
        </h3>

        <p className="mt-4 text-gray-400">
          Coordinating Africa&apos;s Digital Economy
        </p>
      </footer>

    </main>
  );
}