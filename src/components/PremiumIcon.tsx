"use client";

import Image from "next/image";

interface PremiumIconProps {
  icon: string;
  title: string;
  left: string;
  top: string;
  animationDelay?: string;
}

export default function PremiumIcon({
  icon,
  title,
  left,
  top,
  animationDelay = "0s",
}: PremiumIconProps) {
  return (
    <div
      className="group absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left,
        top,
      }}
    >
      {/* ===========================================
          LOCAL GLOW
      ============================================ */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-32
          w-32
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-yellow-500/10
          blur-2xl
          animate-nodeGlow
        "
        style={{
          animationDelay,
        }}
      />

      {/* ===========================================
          ACTIVITY DOTS
      ============================================ */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-24
          w-24
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <span
          className="absolute left-1 top-8 h-2 w-2 rounded-full bg-yellow-400 animate-pulse"
          style={{ animationDelay }}
        />

        <span
          className="absolute right-2 top-2 h-2 w-2 rounded-full bg-yellow-400 animate-pulse"
          style={{ animationDelay: `calc(${animationDelay} + .6s)` }}
        />

        <span
          className="absolute bottom-3 left-5 h-2 w-2 rounded-full bg-yellow-400 animate-pulse"
          style={{ animationDelay: `calc(${animationDelay} + 1.2s)` }}
        />

        <span
          className="absolute bottom-2 right-5 h-2 w-2 rounded-full bg-yellow-400 animate-pulse"
          style={{ animationDelay: `calc(${animationDelay} + 1.8s)` }}
        />
      </div>

      {/* ===========================================
          PREMIUM ICON
      ============================================ */}

      <div
        className="
          relative
          flex
          h-20
          w-20
          items-center
          justify-center
          animate-nodeFloat
          transition-transform
          duration-500
          group-hover:scale-110
        "
        style={{
          animationDelay,
        }}
      >
        <Image
          src={icon}
          alt={title}
          width={82}
          height={82}
          className="
            h-full
            w-full
            object-contain
            drop-shadow-[0_0_25px_rgba(234,179,8,0.75)]
          "
        />
      </div>

      {/* ===========================================
          PERMANENT LABEL
      ============================================ */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-full
          mt-2
          -translate-x-1/2
        "
      >
        <p
          className="
            whitespace-nowrap
            text-xs
            font-medium
            tracking-[0.14em]
            text-yellow-400
            drop-shadow-[0_0_12px_rgba(234,179,8,0.85)]
          "
        >
          {title}
        </p>
      </div>
    </div>
  );
}