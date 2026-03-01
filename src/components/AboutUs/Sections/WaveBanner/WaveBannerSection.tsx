"use client";

import Image from "next/image";

export default function WaveBanner() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0008A4 35.1%, #030013 100%)" }}
    >
      <Image
        src="/images/Wave.png"
        alt="Wave"
        width={1440}
        height={200}
        className="w-full object-cover object-top"
        priority
      />
    </section>
  );
}