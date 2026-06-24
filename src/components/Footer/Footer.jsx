import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer  id="contact" className="relative overflow-hidden  bg-[#0b0b0b] text-white">

      {/* Glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          h-[300px]
          w-[700px]
          rounded-full
          bg-white
          opacity-5
          blur-[160px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">

        {/* Top */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="
                text-5xl
                md:text-7xl
                font-bold
                leading-tight
              "
            >
              Get Started
              <br />
              With HookUX
            </h2>

            <button
              className="
                mt-10
                bg-white
                text-black
                px-12
                py-5
                rounded-2xl
                font-semibold
                text-2xl
                shadow-xl
                hover:scale-105
                transition
              "
            >
              Book a Call
            </button>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-12
            "
          >
            {/* Company */}
            <div>
              <h3 className="text-3xl font-bold mb-8">
                Company
              </h3>

              <ul className="space-y-5 text-gray-300">
                <li>Work</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-3xl font-bold mb-8">
                Socials
              </h3>

              <ul className="space-y-5 text-gray-300">
                <li className="flex items-center gap-3">
                  <FaInstagram />
                  Instagram
                </li>

                <li className="flex items-center gap-3">
                  <FaXTwitter />
                  X
                </li>

                <li className="flex items-center gap-3">
                  <FaFacebook />
                  Facebook
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-3xl font-bold mb-8">
                Contact
              </h3>

              <ul className="space-y-5 text-gray-300">
                <li className="flex gap-3">
                  <FaLocationDot />
                  Sheridan, Wyoming
                </li>

                <li className="flex gap-3">
                  <FaPhone />
                  +1 251-260-1918
                </li>

                <li className="flex gap-3">
                  <MdEmail />
                  contact@hookux.com
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Huge Background Text */}
        <div className="overflow-hidden mt-24">
  <motion.div
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      flex
      w-max
      whitespace-nowrap
      text-[150px]
      md:text-[250px]
      font-bold
      text-white
      leading-none
    "
  >
    {[...Array(10)].map((_, index) => (
      <span
        key={index}
        className="mr-20"
      >
        HOOKUX
      </span>
    ))}
  </motion.div>
</div>
      </div>
    </footer>
  );
}

export default Footer;