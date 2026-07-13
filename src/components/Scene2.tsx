"use client";

import AfricaNodes from "./AfricaNodes";

export default function Scene2() {
  return (
    <section
      id="scene2"
      className="
        relative
        isolate
        h-[calc(100svh-76px)]
        min-h-[620px]
        overflow-hidden
        bg-black
      "
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/scene2-background.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-black/48" />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/80
          via-black/10
          to-black/75
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.70)_100%)]
        "
      />

      {/* Scene Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-7xl
          flex-col
          items-center
          px-5
          pb-4
          pt-5
          text-center
          sm:px-8
          md:pb-5
          md:pt-6
        "
      >
        {/* Heading */}
        <header className="shrink-0">
          <h2
            className="
              mx-auto
              max-w-5xl
              text-3xl
              font-extrabold
              leading-[1.02]
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Africa has{" "}
            <span className="text-yellow-500">
              already digitized.
            </span>
          </h2>

          <div className="mt-3 space-y-1">
            <p className="text-base text-gray-200 sm:text-lg md:text-xl">
              Every sector is becoming digital.
            </p>

            <p className="text-base text-gray-300 sm:text-lg md:text-xl">
              Yet every sector still operates{" "}
              <span className="font-semibold text-yellow-500">
                independently.
              </span>
            </p>
          </div>
        </header>

        {/* Africa Ecosystem Nodes */}
        <div
          className="
            relative
            mt-2
            h-[250px]
            w-full
            max-w-5xl
            shrink-0
            sm:h-[270px]
            md:mt-3
            md:h-[285px]
            lg:h-[280px]
          "
        >
          <AfricaNodes />
        </div>

        {/* Cinematic Punchline */}
        <div
          className="
            relative
            z-20
            -mt-10
            w-full
            max-w-3xl
            shrink-0
            overflow-hidden
            rounded-2xl
            border
            border-yellow-500/30
            bg-black/70
            px-5
            py-3
            text-center
            shadow-[0_0_35px_rgba(234,179,8,0.10)]
            backdrop-blur-md
            sm:px-8
            md:rounded-3xl
            md:px-10
            md:py-4
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-x-1/4
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-yellow-400
              to-transparent
            "
          />

          <p className="text-base font-light tracking-wide text-gray-100 sm:text-lg md:text-2xl">
            Africa has built digital systems.
          </p>

          <div
            className="
              mx-auto
              my-2
              h-px
              w-24
              bg-gradient-to-r
              from-transparent
              via-yellow-500
              to-transparent
              md:w-32
            "
          />

          <p className="text-xl font-extrabold leading-tight text-yellow-500 sm:text-2xl md:text-4xl">
            But not a digital economy.
          </p>
        </div>
      </div>
    </section>
  );
}