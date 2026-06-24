import { motion } from "framer-motion";

function FloatingCard({
  title,
  rotate,
  top,
  left,
  duration,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}

      /* Continuous floating */
      animate={{
        y: [0, -15, 0],
      }}

      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      /* Hover effect */
      whileHover={{
        scale: 1.08,
        y: -25,
        rotate: 0,
        zIndex: 100,
      }}

      /* Dragging */
      drag
      dragElastic={0.3}
      dragMomentum={true}

      /* Return to original position */
      dragTransition={{
        bounceStiffness: 200,
        bounceDamping: 15,
      }}

      whileTap={{
        cursor: "grabbing",
        scale: 1.1,
      }}

      style={{
        top,
        left,
        rotate,
      }}

      className="
        absolute
        cursor-grab
        rounded-3xl
        border
        border-gray-700
        bg-[#111]
        px-8
        py-6
        text-3xl
        md:text-5xl
        font-bold
        text-white
        shadow-2xl
        backdrop-blur-sm
        select-none
      "
    >
      {title === "No Code Dev" ? (
        <div className="flex items-center gap-2">
          <span className=" px-3 py-1 rounded">
            No
          </span>
          <span>Code Dev</span>
        </div>
      ) : (
        title
      )}
    </motion.div>
  );
}

export default FloatingCard;