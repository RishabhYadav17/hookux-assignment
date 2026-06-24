import { motion } from "framer-motion";

function FloatingTestimonial({
  review,
  name,
  x,
  y,
  rotate,
}) {
  return (
    <motion.div
      initial={{
        x: 0,
        y: 0,
        rotate: 0,
        scale: 0.5,
        opacity: 0,
      }}
      whileInView={{
        x,
        y,
        rotate,
        scale: 1,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
      animate={{
        y: [y, y - 10, y],
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
      }}
      className="
        absolute
        w-[280px]
        rounded-2xl
        border
        border-gray-700
        bg-[#111]
        p-5
        shadow-2xl
        text-white
      "
    >
      <p className="text-gray-300 mb-4">
        "{review}"
      </p>

      <div className="font-semibold">
        {name}
      </div>
    </motion.div>
  );
}

export default FloatingTestimonial;