import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
return ( <main className="bg-black text-white">

```
<Navbar />

{/* Hero */}
<section className="relative flex min-h-[120vh] items-center justify-center pt-16 pb-20">

  {/* Video Background */}
  <div className="absolute inset-0 overflow-hidden">

    <video
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full object-cover"
    >
      <source
        src="/hero-background.mp4"
        type="video/mp4"
      />
    </video>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/70" />

  </div>

  {/* Hero Content */}
  <div className="relative z-10 mx-auto max-w-6xl px-6 text-center -mt-24">

    {/* Logo */}
    <div className="mb-4 flex justify-center">

      <Image
        src="/logo-transparent.png"
        alt="KIRI"
        width={220}
        height={80}
        priority
        className="w-auto"
      />

    </div>

    {/* Headline */}
    <h1 className="mb-3 text-4xl font-bold leading-[0.95] md:text-6xl">

      Africa&apos;s Transactioin

      <br />

      Coordination Infrastructure

    </h1>

    {/* Description */}
    <p className="mx-auto max-w-3xl text-base text-gray-300 md:text-lg">

      The trusted digital infrastructure connecting transportation, 
      logistics, commerce, services, financial participation and 
      governance into one coordinated ecosystem.
      
    </p>

    {/* Buttons */}
    <div className="mt-6 flex flex-wrap justify-center gap-4">

      <button
        className="
          rounded-lg
          bg-yellow-500
          px-8
          py-4
          font-semibold
          text-black
          transition
          hover:scale-105
        "
      >
        Explore Platform
      </button>

      <button
        className="
          rounded-lg
          border
          border-yellow-500
          px-8
          py-4
          text-yellow-500
          transition
          hover:bg-yellow-500/10
        "
      >
        Partner With KIRI
      </button>

    </div>

   {/* Operational Verticals Label */}
<div className="mt-6 mb-1">

  <p className="text-xs uppercase tracking-[0.4em] text-yellow-500/70">
    Operational Verticals
  </p>

</div>

    {/* Operational Verticals Grid */}
    <div className="mx-auto mt-0 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">

      {/* Transportation */}
      <div
        className="
    relative
    overflow-hidden
    rounded-xl
    border
    border-yellow-500/40
    bg-black/60
    p-2
    backdrop-blur-sm
    shadow-[0_0_15px_rgba(234,179,8,0.15)]
    transition-all
    duration-300
    hover:border-yellow-400
    hover:bg-black/70
    hover:shadow-[0_0_35px_rgba(234,179,8,0.45)]
    before:absolute
    before:inset-0
    before:rounded-xl
    before:bg-gradient-to-r
    before:from-yellow-500/0
    before:via-yellow-500/5
    before:to-yellow-500/0
    before:opacity-0
    before:transition-opacity
    before:duration-300
    hover:before:opacity-100        
    "
      >
        <h3 className="text-base font-semibold text-yellow-400">
          Transportation
        </h3>

        <p className="mt-1 text-xs text-gray-400">
          Passenger mobility coordination.
        </p>
      </div>

      {/* Logistics */}
      <div
        className="
    relative
    overflow-hidden
    rounded-xl
    border
    border-yellow-500/40
    bg-black/60
    p-2
    backdrop-blur-sm
    shadow-[0_0_15px_rgba(234,179,8,0.15)]
    transition-all
    duration-300
    hover:border-yellow-400
    hover:bg-black/70
    hover:shadow-[0_0_35px_rgba(234,179,8,0.45)]
    before:absolute
    before:inset-0
    before:rounded-xl
    before:bg-gradient-to-r
    before:from-yellow-500/0
    before:via-yellow-500/5
    before:to-yellow-500/0
    before:opacity-0
    before:transition-opacity
    before:duration-300
    hover:before:opacity-100        
        "
      >
        <h3 className="text-base font-semibold text-yellow-400">
          Logistics
        </h3>

        <p className="mt-1 text-xs text-gray-400">
          Freight movement and fulfillment.
        </p>
      </div>

      {/* Commerce */}
      <div
        className="
    relative
    overflow-hidden
    rounded-xl
    border
    border-yellow-500/40
    bg-black/60
    p-2
    backdrop-blur-sm
    shadow-[0_0_15px_rgba(234,179,8,0.15)]
    transition-all
    duration-300
    hover:border-yellow-400
    hover:bg-black/70
    hover:shadow-[0_0_35px_rgba(234,179,8,0.45)]
    before:absolute
    before:inset-0
    before:rounded-xl
    before:bg-gradient-to-r
    before:from-yellow-500/0
    before:via-yellow-500/5
    before:to-yellow-500/0
    before:opacity-0
    before:transition-opacity
    before:duration-300
    hover:before:opacity-100        
        "
      >
        <h3 className="text-base font-semibold text-yellow-400">
          Commerce
        </h3>

        <p className="mt-1 text-xs text-gray-400">
          Merchant ecosystems and marketplaces.
        </p>
      </div>

      {/* Services */}
      <div
        className="
    relative
    overflow-hidden
    rounded-xl
    border
    border-yellow-500/40
    bg-black/60
    p-2
    backdrop-blur-sm
    shadow-[0_0_15px_rgba(234,179,8,0.15)]
    transition-all
    duration-300
    hover:border-yellow-400
    hover:bg-black/70
    hover:shadow-[0_0_35px_rgba(234,179,8,0.45)]
    before:absolute
    before:inset-0
    before:rounded-xl
    before:bg-gradient-to-r
    before:from-yellow-500/0
    before:via-yellow-500/5
    before:to-yellow-500/0
    before:opacity-0
    before:transition-opacity
    before:duration-300
    hover:before:opacity-100        
        "
      >
        <h3 className="text-base font-semibold text-yellow-400">
          Services
        </h3>

        <p className="mt-1 text-xs text-gray-400">
          Service provider participation.
        </p>
      </div>

      {/* Financial Participation */}
      <div
        className="
          rounded-xl    relative
    overflow-hidden
    rounded-xl
    border
    border-yellow-500/40
    bg-black/60
    p-2
    backdrop-blur-sm
    shadow-[0_0_15px_rgba(234,179,8,0.15)]
    transition-all
    duration-300
    hover:border-yellow-400
    hover:bg-black/70
    hover:shadow-[0_0_35px_rgba(234,179,8,0.45)]
    before:absolute
    before:inset-0
    before:rounded-xl
    before:bg-gradient-to-r
    before:from-yellow-500/0
    before:via-yellow-500/5
    before:to-yellow-500/0
    before:opacity-0
    before:transition-opacity
    before:duration-300
    hover:before:opacity-100        
        "
      >
        <h3 className="text-base font-semibold text-yellow-400">
          Financial Participation
        </h3>

        <p className="mt-1 text-xs text-gray-400">
          Transactions, payments and settlements.
        </p>
      </div>

      {/* Governance */}
      <div
        className="
              relative
    overflow-hidden
    rounded-xl
    border
    border-yellow-500/40
    bg-black/60
    p-2
    backdrop-blur-sm
    shadow-[0_0_15px_rgba(234,179,8,0.15)]
    transition-all
    duration-300
    hover:border-yellow-400
    hover:bg-black/70
    hover:shadow-[0_0_35px_rgba(234,179,8,0.45)]
    before:absolute
    before:inset-0
    before:rounded-xl
    before:bg-gradient-to-r
    before:from-yellow-500/0
    before:via-yellow-500/5
    before:to-yellow-500/0
    before:opacity-0
    before:transition-opacity
    before:duration-300
    hover:before:opacity-100        
        "
      >
        <h3 className="text-base font-semibold text-yellow-400">
          Governance
        </h3>

        <p className="mt-1 text-xs text-gray-400">
          Economic intelligence, trust and coordination.
        </p>
      </div>

    </div>

  </div>

</section>

{/* =======================================================
    SCENE 2 — AFRICA HAS ALREADY DIGITIZED
======================================================= */}

<section className="relative isolate overflow-hidden">

  {/* Background */}

  <div
    className="absolute inset-0 bg-cover bg-center brightness-[0.45]"
    style={{
      backgroundImage: "url('/scene2-background.png')",
    }}
  />

  {/* Blur + Dark Overlay */}

  <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />

  {/* Content */}

  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">

    {/* Heading */}

    <h2 className="max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">

      Africa has{" "}

      <span className="text-yellow-500">
        already digitized...
      </span>

    </h2>

    {/* Supporting Text */}

    <div className="mt-8 space-y-3">

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

    {/* Ecosystem Icons */}

    <div className="mt-16 grid w-full max-w-6xl grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">

      {[
        ["🚌","Transportation"],
        ["🛍️","Commerce"],
        ["💳","Payments"],
        ["🏛️","Government"],
        ["✚","Healthcare"],
        ["🌱","Agriculture"],
        ["🎓","Education"],
      ].map(([icon,title]) => (

        <div
          key={title}
          className="flex flex-col items-center"
        >

          <div
            className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            border
            border-yellow-500
            bg-black/50
            text-5xl
            shadow-[0_0_35px_rgba(255,184,0,0.45)]
            backdrop-blur
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-[0_0_55px_rgba(255,184,0,0.8)]
          "
          >

            {icon}

          </div>

          <p className="mt-4 text-sm text-white md:text-base">

            {title}

          </p>

        </div>

      ))}

    </div>

    {/* Closing Statement */}

    <div
      className="
      mt-16
      w-full
      max-w-4xl
      rounded-3xl
      border
      border-yellow-500/30
      bg-black/60
      px-8
      py-8
      backdrop-blur-md
    "
    >

      <p className="text-2xl text-white md:text-4xl">

        Africa has built digital systems.

      </p>

      <p className="mt-4 text-3xl font-bold text-yellow-500 md:text-5xl">

        It has not yet built a digital economy.

      </p>

    </div>

  </div>

</section>

 {/* The Coordination Gap */}

<section className="relative overflow-hidden py-28">

  {/* Video Background */}
  <div className="absolute inset-0">

    <video
      autoPlay
      muted
      loop
      playsInline
      className="
      h-full
      w-full
      object-cover
      scale-125
      blur-sm
      "
    >
      <source
        src="/fragmented-network.mp4"
        type="video/mp4"
      />
    </video>

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/80" />

  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

    <h2 className="mb-12 text-5xl font-bold text-yellow-500">

      Africa's Coordination Gap

    </h2>

    <div className="mx-auto max-w-5xl space-y-6 text-xl text-gray-200">

      <p>
        Transportation platforms coordinate individual networks.
      </p>

      <p>
        Logistics providers coordinate individual operations.
      </p>

      <p>
        Merchants operate across disconnected marketplaces.
      </p>

      <p>
        Financial participation remains fragmented across ecosystems.
      </p>

      <p>
        Governments lack comprehensive visibility across economic activity.
      </p>

      <div className="pt-8">

        <p className="text-2xl font-semibold text-white">
          Africa has successfully digitized many sectors.
        </p>

        <p className="mt-4 text-3xl font-bold text-yellow-500">
          What remains missing is coordination between them.
        </p>

      </div>

    </div>

  </div>

</section>

  {/* Introducing KIRI */}

<section className="relative overflow-hidden py-24">

  {/* Video Background */}
  <div className="absolute inset-0">

    <video
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full object-cover"
    >
      <source
        src="/kiri-ecosystem.mp4"
        type="video/mp4"
      />
    </video>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/85" />

  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

    {/* Glass Panel */}
    <div>

      <h2 className="mb-2 text-5xl font-bold text-yellow-500">
        Introducing KIRI
      </h2>

      <p className="mb-6 text-2xl text-white">
        Transaction Coordination Infrastructure For Africa
      </p>

      <div className="mx-auto max-w-3xl">

        <p className="text-2xl leading-relaxed text-gray-300">
          Just as roads coordinate movement and
          telecommunications networks coordinate information,
          KIRI coordinates transactions, participants,
          services, intelligence and governance across
          Africa's digital economy.
        </p>

        <div className="mt-8">

          <h3 className="text-3xl font-bold text-white">
            KIRI is Transaction Coordination Infrastructure.
          </h3>

          <p className="mt-4 text-xl text-gray-400">
            The coordination layer connecting Africa's
            transportation, logistics, commerce, services,
            financial participation and governance ecosystems.
          </p>

        </div>

        <div className="mt-10">

          <p className="text-3xl font-semibold text-white">
            Africa's next phase of digital transformation
            is not digitization.
          </p>

          <p className="mt-4 text-4xl font-bold text-yellow-500">
            It is coordination.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* Why KIRI Is Different */}

<section className="bg-zinc-950 py-16">

  <div className="mx-auto max-w-7xl px-6">

    <h2 className="text-center text-4xl font-bold text-yellow-500">
      Why KIRI Is Different
    </h2>

    <p className="mx-auto mt-4 max-w-4xl text-center text-lg text-gray-300">
      KIRI is not another marketplace, mobility platform,
      payment system or super app.
      It is the infrastructure layer that connects them.
    </p>

    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div className="
  rounded-2xl
  border border-yellow-500/30
  bg-black/40
  p-6
  min-h-[170px]
">
  <h3 className="text-xl font-bold text-yellow-500">
    Unified Identity
  </h3>

  <p className="mt-3 text-sm leading-relaxed text-gray-400">
    A trusted digital identity framework connecting
    individuals, businesses, institutions and governments.
  </p>
</div>
<div className="
  rounded-2xl
  border border-yellow-500/30
  bg-black/40
  p-6
  min-h-[170px]
 ">
  <h3 className="text-xl font-bold text-yellow-500">
    Transaction Visibility
  </h3>

  <p className="mt-3 text-sm leading-relaxed text-gray-400">
    Real-time visibility across transactions,
    services, logistics and ecosystem activity.
  </p>
</div>
<div className="
  rounded-2xl
  border border-yellow-500/30
  bg-black/40
  p-6
  min-h-[170px]
">
  <h3 className="text-xl font-bold text-yellow-500">
    Embedded Financial Participation
  </h3>

  <p className="mt-3 text-sm leading-relaxed text-gray-400">
    Payments, settlements, financing and
    economic participation built directly into transactions.
  </p>
</div>
<div className="
  rounded-2xl
  border border-yellow-500/30
  bg-black/40
  p-6
  min-h-[170px]
">
  <h3 className="text-xl font-bold text-yellow-500">
    AI Intelligence Layer
  </h3>

  <p className="mt-3 text-sm leading-relaxed text-gray-400">
    Transforming transaction data into
    operational intelligence and predictive insights.
  </p>
</div>
<div className="
  rounded-2xl
  border border-yellow-500/30
  bg-black/40
  p-6
  min-h-[170px]
">
  <h3 className="text-xl font-bold text-yellow-500">
    Governance Layer
  </h3>

  <p className="mt-3 text-sm leading-relaxed text-gray-400">
    Enabling transparency, compliance,
    accountability and trusted participation.
  </p>
</div>
<div className="
  rounded-2xl
  border border-yellow-500/30
  bg-black/40
  p-6
  min-h-[170px]
">
  <h3 className="text-xl font-bold text-yellow-500">
    Network Effects Engine
  </h3>

  <p className="mt-3 text-sm leading-relaxed text-gray-400">
    Every participant strengthens the value,
    intelligence and reach of the ecosystem.
  </p>
</div>
    </div>

  </div>

</section>

  {/* A Coordinated Digital Economy */}

<section className="bg-black py-28">

  <div className="mx-auto max-w-7xl px-6">


    {/* Ecosystem Visual */}

    <div className="mt-16">

      <img
        src="/coordinated-digital-economy.png"
        alt="A Coordinated Digital Economy"
        className="
          mx-auto
          w-full
          max-w-6xl
          rounded-2xl
          border
          border-yellow-500/20
          shadow-[0_0_40px_rgba(234,179,8,0.15)]
        "
      />

    </div>

  </div>

</section>
</main>
);
}
