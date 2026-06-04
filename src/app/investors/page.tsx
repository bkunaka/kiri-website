export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-5xl font-bold text-yellow-500">
          Investors
        </h1>

        <p className="mb-12 text-xl text-gray-300">
          Investing in Africa's Transaction Coordination Infrastructure.
        </p>

        <div className="space-y-12">

          <section>
            <h2 className="mb-4 text-3xl font-bold text-yellow-500">
              Investment Thesis
            </h2>

            <p className="text-gray-300">
              Africa's next digital transformation opportunity is not
              connectivity. It is coordination.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-bold text-yellow-500">
              Why KIRI?
            </h2>

            <ul className="space-y-2 text-gray-300">
              <li>• Infrastructure positioning</li>
              <li>• Large market opportunity</li>
              <li>• Scalable economics</li>
              <li>• Strong governance</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-bold text-yellow-500">
              Funding Objective
            </h2>

            <p className="text-gray-300">
              Accelerate platform development, ecosystem activation,
              and operational readiness.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}