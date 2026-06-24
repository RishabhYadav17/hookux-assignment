import { motion } from "framer-motion";

function MobileTestimonial({
  review,
  name,
  mobileY,
}) {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        y: mobileY,
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
      }}
      animate={{
        y: [mobileY, mobileY - 10, mobileY],
      }}
      className="
        absolute
        left-1/2
        -translate-x-1/2
        w-[280px]
        rounded-2xl
        border
        border-gray-800
        bg-[#111]
        p-5
        text-white
      "
    >
      <p className="text-gray-300 mb-4">
        "{review}"
      </p>

      <h4 className="font-semibold">
        {name}
      </h4>
    </motion.div>
  );
}

export default MobileTestimonial;