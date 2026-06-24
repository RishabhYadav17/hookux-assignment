import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonials";
import FloatingTestimonial from "../FloatingTestimonial/FloatingTestimonial";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-black
        py-32
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

      {/* ================= MOBILE ================= */}
      <div className="relative lg:hidden h-[700px]">

  {/* Center */}
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
    <div className="mb-4 flex justify-center gap-2 text-yellow-400">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>

    <h2 className="text-4xl font-bold text-white">
      What Clients Say
    </h2>
  </div>

  {testimonials.map((testimonial) => (
    <MobileTestimonial
      key={testimonial.id}
      {...testimonial}
    />
  ))}
</div>

      {/* ================= DESKTOP ================= */}
      <div className="relative hidden lg:block h-[700px]">

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
          <div className="mb-4 flex justify-center gap-2 text-yellow-400">
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

        {/* Scatter Animation */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
          "
        >
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