import { motion } from "framer-motion";

// Polaroid-style framed photo with tape + subtle rotation.
export default function Polaroid({
  src,
  alt,
  rotate = 0,
  caption,
  className = "",
  style = {},
  testId,
  tape = true,
}) {
  return (
    <motion.figure
      data-testid={testId}
      initial={{ opacity: 0, y: 60, rotate: rotate * 1.6, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, rotate, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
      whileHover={{ rotate: 0, scale: 1.03, zIndex: 40 }}
      className={`relative bg-white p-2.5 pb-9 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.35)] ${className}`}
      style={{ ...style }}
    >
      {tape && (
        <span className="tape absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-16 rotate-[-3deg]" />
      )}
      <div className="overflow-hidden bg-[#e9e2d3]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ aspectRatio: "4 / 5" }}
        />
      </div>
      {caption && (
        <figcaption className="font-script text-2xl text-charcoal/80 text-center pt-1">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
