export default function Scene2() {
  const sectors = [
    ["🚌", "Transportation"],
    ["🛍️", "Commerce"],
    ["💳", "Payments"],
    ["🏛️", "Government"],
    ["✚", "Healthcare"],
    ["🌱", "Agriculture"],
    ["🎓", "Education"],
  ];

  return (
    <section className="relative isolate overflow-hidden">

      {/* =======================================================
          VIDEO BACKGROUND
      ======================================================= */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/scene2-background.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />

      {/* =======================================================
          CONTENT
      ======================================================= */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-16 text-center">

        {/* Heading */}

        <h2 className="max-w-5xl text-4xl font-bold leading-tight md:text-6xl">

          <span className="text-white">
            Africa has
          </span>{" "}

          <span className="text-yellow-500">
            already digitized...
          </span>

        </h2>

        {/* Supporting Text */}

        <div className="mt-6 space-y-2">

          <p className="text-lg text-gray-200 md:text-2xl">
            Every sector is becoming digital.
          </p>

          <p className="text-lg text-gray-300 md:text-2xl">

            Yet every sector still operates{" "}

            <span className="font-semibold text-yellow-500">
              independently.
            </span>

          </p>

        </div>

        {/* =======================================================
            DIGITAL ECOSYSTEMS
        ======================================================= */}

        <div className="mt-12 grid w-full max-w-6xl grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">

          {sectors.map(([icon, title]) => (

            <div
              key={title}
              className="flex flex-col items-center"
            >

              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-yellow-500
                  bg-black/45
                  text-4xl
                  shadow-[0_0_25px_rgba(255,184,0,0.45)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:shadow-[0_0_45px_rgba(255,184,0,0.75)]
                "
              >

                {icon}

              </div>

              <p className="mt-3 text-sm text-white">

                {title}

              </p>

            </div>

          ))}

        </div>

        {/* =======================================================
            CONCLUSION
        ======================================================= */}

        <div
          className="
            mt-12
            w-full
            max-w-4xl
            rounded-3xl
            border
            border-yellow-500/30
            bg-black/60
            px-8
            py-7
            backdrop-blur-md
          "
        >

          <p className="text-xl text-white md:text-3xl">

            Africa has built digital systems.

          </p>

          <p className="mt-3 text-2xl font-bold text-yellow-500 md:text-4xl">

            It has not yet built a digital economy.

          </p>

        </div>

      </div>

    </section>
  );
}