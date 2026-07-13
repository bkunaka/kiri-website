import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function CoordinatingPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-black text-white">
        <Navbar />
      {/* ======================================================
          BACKGROUND ARTWORK
      ====================================================== */}

      <Image
        src="/coordinating-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover object-center"
      />

      {/* ======================================================
          CINEMATIC OVERLAYS
      ====================================================== */}

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/90" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.82)_100%)]" />

      {/* Subtle warm illumination */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[130px]" />

      {/* ======================================================
          PAGE CONTENT
      ====================================================== */}

      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 py-16 sm:px-8">
        <div className="w-full max-w-4xl text-center">
          {/* KIRI Logo */}

          <div className="mb-6 flex justify-center">
            <Image
              src="/logo-transparent.png"
              alt="KIRI"
              width={210}
              height={80}
              priority
              className="h-auto w-[150px] object-contain sm:w-[180px] md:w-[210px]"
            />
          </div>

          {/* Status Indicator */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-70" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-yellow-500 shadow-[0_0_18px_rgba(234,179,8,0.95)]" />
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-yellow-400 sm:text-sm">
              Integration in progress
            </p>
          </div>

          {/* Main Panel */}

          <div className="relative overflow-hidden rounded-3xl border border-yellow-500/30 bg-black/65 px-6 py-9 shadow-[0_0_70px_rgba(234,179,8,0.13)] backdrop-blur-md sm:px-10 md:px-14 md:py-12">
            {/* Top gold line */}

            <div className="pointer-events-none absolute inset-x-1/4 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

            {/* Heading */}

            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-white sm:text-5xl md:text-7xl">
              Coordinating
              <span className="text-yellow-500">...</span>
            </h1>

            {/* Supporting Copy */}

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl md:text-2xl">
              This destination is currently being integrated into the{" "}
              <span className="font-semibold text-yellow-400">
                KIRI Platform.
              </span>
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              The platform is continuously expanding to coordinate new
              ecosystems, services and capabilities.
            </p>

            {/* Divider */}

            <div className="mx-auto my-7 h-px w-40 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

            {/* Brand Statement */}

            <p className="text-xl font-semibold leading-relaxed text-white sm:text-2xl md:text-3xl">
              Every connection strengthens
            </p>

            <p className="mt-1 text-2xl font-extrabold leading-tight text-yellow-500 sm:text-3xl md:text-4xl">
              Africa&apos;s digital economy.
            </p>

            {/* Action */}

            <div className="mt-9 flex justify-center">
              <Link
                href="/"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-yellow-500
                  bg-yellow-500
                  px-8
                  py-4
                  text-sm
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-yellow-400
                  hover:shadow-[0_0_35px_rgba(234,179,8,0.45)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-yellow-400
                  focus:ring-offset-2
                  focus:ring-offset-black
                "
              >
                Return to KIRI Home
              </Link>
            </div>
          </div>

          {/* Footer Note */}

          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-gray-500">
            KIRI Transaction Coordination Infrastructure
          </p>
        </div>
      </section>
    </main>
  );
}