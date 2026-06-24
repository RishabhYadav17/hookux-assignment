import { brands } from "../../data/brands";

function BrandSlider() {
  return (
    <div className="overflow-hidden py-6">
      <div className="brand-slider flex whitespace-nowrap">
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="
              mx-12
              text-sm
              md:text-base
              uppercase
              tracking-[0.25em]
              text-gray-500
              font-semibold
            "
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandSlider;