import { motion } from "framer-motion";

// Reusable scroll-reveal wrapper — gentle fade + drift up.
export default function Reveal({
  children,
  delay = 0,
  y = 40,
  className = "",
  as = "div",
  once = true,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
