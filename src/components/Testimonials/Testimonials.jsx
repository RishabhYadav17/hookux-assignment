import { FaStar } from "react-icons/fa";
import { testimonials } from "../../data/testimonials";
import FloatingTestimonial from "../FloatingTestimonial/FloatingTestimonial";
import { motion } from "framer-motion";
function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-black
        py-40
      "
    >
      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-10
          bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      <div className="relative h-[700px]">

        {/* Center Content */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            text-center
            z-20
          "
        >
          <div className="mb-4 text-yellow-400 flex gap-2 justify-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="
    text-5xl
    md:text-6xl
    font-bold
    text-white
  "
>
  What Clients Say
</motion.h2>
        </div>

        {/* Scattered Cards */}
        <div className="
          absolute
          left-1/2
          top-1/2
          scale-[0.5]
          sm:scale-[0.7]
          lg:scale-100
        ">
          {testimonials.map((testimonial) => (
            <FloatingTestimonial
              key={testimonial.id}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;