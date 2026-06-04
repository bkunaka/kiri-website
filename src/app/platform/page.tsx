export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-5xl font-bold text-yellow-500">
          The KIRI Platform
        </h1>

        <p className="mb-12 text-xl text-gray-300">
          Transaction Coordination Infrastructure for African Commerce.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-3xl font-bold text-yellow-500">
              What Makes KIRI Different?
            </h2>

            <p className="text-gray-300">
              Most platforms digitize individual transactions.
              KIRI coordinates entire ecosystems.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-bold text-yellow-500">
              Coordination Engine
            </h2>

            <ul className="space-y-2 text-gray-300">
              <li>• Participant onboarding</li>
              <li>• Identity and trust management</li>
              <li>• Transaction orchestration</li>
              <li>• Ecosystem intelligence</li>
              <li>• Governance and compliance</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-bold text-yellow-500">
              Platform Vision
            </h2>

            <p className="text-gray-300">
              To become Africa's leading transaction coordination
              infrastructure platform.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}