import Image from "next/image";

// Official "GREAT ESCAPE" wordmark + "Get. Set. Game." tagline.
// Extracted from the venue's promo artwork via scripts/extract-logo.js
// (transparent PNG so it sits cleanly on cream / coloured backgrounds).
export default function Logo({ className = "h-9 w-auto", priority = false }) {
  return (
    <Image
      src="/logo.png"
      alt="The Great Escape — Get. Set. Game."
      width={560}
      height={264}
      priority={priority}
      sizes="200px"
      className={className}
    />
  );
}
