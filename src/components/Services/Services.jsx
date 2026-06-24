import FloatingCard from "../FloatingCard/FloatingCard";
import { services } from "../../data/services";
import { motion } from "framer-motion";
function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-black py-32">

      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-10
          bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          right-20
          top-40
          h-[400px]
          w-[400px]
          rounded-full
          bg-white
          opacity-5
          blur-[140px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* Left */}
          <div>

            <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="
    inline-block
    border
    border-gray-700
    rounded-full
    px-6
    py-2
    text-white
    mb-8
  "
>
  Services
</motion.div>

           <motion.h2
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="
    text-6xl
    md:text-7xl
    font-bold
    text-white
    leading-none
  "
>
  Premium
  <br />
  Services
</motion.h2>

          </div>

          {/* Right */}
          <div className="relative h-[600px]">

            {services.map((service) => (
              <FloatingCard
                key={service.id}
                {...service}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;