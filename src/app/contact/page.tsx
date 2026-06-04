export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-5xl font-bold text-yellow-500">
          Contact KIRI
        </h1>

        <p className="mb-12 text-gray-300">
          Let's build the future of African commerce together.
        </p>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded border border-yellow-500 bg-black p-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded border border-yellow-500 bg-black p-4"
          />

          <input
            type="text"
            placeholder="Organisation"
            className="w-full rounded border border-yellow-500 bg-black p-4"
          />

          <textarea
            placeholder="Message"
            rows={6}
            className="w-full rounded border border-yellow-500 bg-black p-4"
          />

          <button
            type="submit"
            className="rounded bg-yellow-500 px-8 py-3 font-bold text-black"
          >
            Send Message
          </button>

        </form>
      </div>
    </main>
  );
}