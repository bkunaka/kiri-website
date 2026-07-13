"use client";

import { sectors } from "@/data/sectors";
import PremiumIcon from "./PremiumIcon";

export default function AfricaNodes() {
  return (
    <>
      {/* ============================
          Desktop Layout
      ============================ */}

      <div className="relative hidden h-full w-full md:block">
        {sectors.map((sector) => (
          <PremiumIcon
            key={sector.id}
            icon={sector.icon}
            title={sector.title}
            left={sector.desktop.left}
            top={sector.desktop.top}
            animationDelay={sector.animationDelay}
          />
        ))}
      </div>

      {/* ============================
          Mobile Layout
      ============================ */}

      <div className="relative block h-full w-full md:hidden">
        {sectors.map((sector) => (
          <PremiumIcon
            key={sector.id}
            icon={sector.icon}
            title={sector.title}
            left={sector.mobile.left}
            top={sector.mobile.top}
            animationDelay={sector.animationDelay}
          />
        ))}
      </div>
    </>
  );
}