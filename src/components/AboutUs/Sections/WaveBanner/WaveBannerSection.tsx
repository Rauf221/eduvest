"use client";

// Artıq Image importuna ehtiyac yoxdur, əgər başqa yerdə işlətmirsənsə silə bilərsən.

export default function WaveBanner() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0008A4 35.1%, #030013 100%)" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[300px] object-cover object-top"
      >
        <source src="/videos/linearr.MP4" type="video/mp4" />
        Sizin brauzeriniz video teqini dəstəkləmir.
      </video>
    </section>
  );
}