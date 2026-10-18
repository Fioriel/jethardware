import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { company } from "../../data/company";

const slides = [
  { src: "/images/hw-tools.jpg", alt: "Hand tools on a workbench" },
  { src: "/images/hw-electric.jpg", alt: "Electrical installation work" },
  { src: "/images/hw-build.jpg", alt: "Construction materials on a job site" },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const go = (step) => {
    setIndex((current) => (current + step + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden border-b border-[#E6E6E6] bg-white">
      <div className="absolute inset-0">
        {slides.map((slide, slideIndex) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-[18%] via-white via-[52%] to-white/10" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-[1280px] items-center px-6 py-16">
        <div className="max-w-[640px]">
          <p className="font-Nunito text-[12px] uppercase tracking-[0.28em] text-[#C41230]">
            Danao City, Cebu
          </p>
          <h1 className="mt-4 font-Rajdhani text-[44px] font-bold leading-[0.95] text-[#141414] sm:text-[62px]">
            New Jet Hardware & Electrical Supplies
          </h1>
          <h2 className="mt-5 max-w-[520px] font-Rajdhani text-[22px] font-medium leading-snug text-[#C41230] sm:text-[26px]">
            Construction, electrical, plumbing, lumber, tiles, and home improvement
          </h2>
          <p className="mt-4 font-Nunito text-sm tracking-wide text-[#5C6370]">
            Open daily · Deliveries available · Text or call {company.phoneDisplay}
          </p>
          <p className="mt-5 max-w-[520px] font-Nunito text-[16px] leading-relaxed text-[#5C6370]">
            {company.about}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex min-w-[170px] items-center justify-center bg-[#C41230] px-7 py-3.5 font-Nunito text-sm font-semibold text-white transition hover:bg-[#8E1020]"
            >
              Call the Store
            </a>
            <Link
              to="/about"
              className="inline-flex min-w-[170px] items-center justify-center border border-[#141414] bg-white px-7 py-3.5 font-Nunito text-sm font-semibold text-[#141414] transition hover:border-[#C41230] hover:text-[#C41230]"
            >
              About the Store
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-4">
        <div className="flex gap-2">
          {slides.map((slide, dot) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${dot + 1}`}
              onClick={() => setIndex(dot)}
              className={`h-[3px] transition-all ${
                dot === index ? "w-8 bg-[#C41230]" : "w-4 bg-white"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="flex h-10 w-10 items-center justify-center border border-white bg-white/80 text-[#141414] transition hover:border-[#C41230] hover:text-[#C41230]"
        >
          <HiOutlineChevronLeft className="text-xl" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className="flex h-10 w-10 items-center justify-center border border-white bg-white/80 text-[#141414] transition hover:border-[#C41230] hover:text-[#C41230]"
        >
          <HiOutlineChevronRight className="text-xl" />
        </button>
      </div>
    </section>
  );
};

export default Banner;
