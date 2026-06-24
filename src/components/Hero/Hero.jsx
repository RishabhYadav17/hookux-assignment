import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import BrandSlider from "../BrandSlider/BrandSlider";

function Hero() {
  return (
    <section id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
        flex
        items-center
        justify-center
      "
    >
      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          opacity-10
          bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      ></div>

      {/* Glow Effect */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-white
          opacity-5
          blur-[180px]
        "
      ></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          pt-20
          text-center
        "
      >
        {/* Rating */}
        <div className="flex justify-center gap-2 mb-6 text-yellow-400 text-xl">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        {/* Optional Review Text */}
        <p className="mb-6 text-sm text-gray-400">
          Trusted by brands worldwide
        </p>

        {/* Main Heading */}
        <h1
          className="
            mx-auto
            max-w-5xl
            text-5xl
            font-bold
            leading-[1.1]
            sm:text-6xl
            lg:text-7xl
          "
        >
          Transforming Ideas
          <br />
          Into Digital
          <br />
          Excellence
        </h1>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            text-gray-400
            md:text-xl
          "
        >
          We craft exceptional digital experiences that
          captivate, engage, and convert.
        </p>

        {/* CTA */}
        <button
          aria-label="Book a 15 minute call"
          className="
            mt-10
            rounded-2xl
            bg-white
            px-10
            py-5
            font-semibold
            text-black
            shadow-xl
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-2xl
          "
        >
          👋 Book a 15 Min Call
        </button>

        {/* Brand Slider */}
        <div className="mt-24 pb-10">
          <BrandSlider />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;