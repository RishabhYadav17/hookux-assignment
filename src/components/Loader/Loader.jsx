import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="
        fixed
        inset-0
        z-[999]
        flex
        flex-col
        items-center
        justify-center
        bg-black
        text-white
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          w-64
          h-64
          bg-white
          opacity-10
          blur-[120px]
          rounded-full
        "
      />

      {/* Logo */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          text-6xl
          md:text-8xl
          font-bold
          tracking-[0.25em]
        "
      >
        HOOKUX
      </motion.h1>

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
          mt-8
          text-gray-400
          tracking-widest
          uppercase
        "
      >
        Loading...
      </motion.p>
    </motion.div>
  );
}

export default Loader;