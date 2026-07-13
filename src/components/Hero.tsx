"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32 pb-24">

      {/* Video Background */}
      <div className="absolute inset-0">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

      </div>

      {/* Hero Content */}
        <div className="relative z-10 mx-auto flex max-w-6xl -translate-y-6 flex-col items-center px-6 text-center">

        {/* Logo */}
        <div className="mb-4 mt-8 md:mt-0">

          <Image
            src="/logo-transparent.png"
            alt="KIRI"
            width={180}
            height={80}
            priority
            className="w-auto"
          />

        </div>

        {/* Headline */}
        <h1
          className="
            max-w-5xl
            font-extrabold
            leading-[0.88]
            tracking-tight
            text-5xl
            md:text-7xl
          "
        >
          <span className="text-white">
            Coordinating
          </span>

          <br />

          <span className="text-yellow-500">
            Africa's Digital Economy
          </span>

          
          <span className="text-white">
          
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">

          KIRI is the transaction coordination infrastructure connecting 
          transportation, logistics, commerce, services, finance and 
          governance into one trusted digital ecosystem.
          
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <button
            className="
              rounded-xl
              bg-yellow-500
              px-10
              py-4
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-yellow-400
            "
          >
            Explore Platform
          </button>

          <button
            className="
              rounded-xl
              border
              border-yellow-500
              px-10
              py-4
              font-semibold
              text-yellow-500
              transition-all
              duration-300
              hover:bg-yellow-500/10
            "
          >
            Partner With KIRI
          </button>

        </div>

      </div>

    </section>
  );
}