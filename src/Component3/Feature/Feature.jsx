import { HiOutlineClock, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineTruck } from "react-icons/hi";
import { company } from "../../data/company";

const items = [
  {
    icon: HiOutlineLocationMarker,
    title: "Poblacion Store",
    desc: "Corner of Pio del Pilar and Severo Duterte Streets, Danao City, Cebu 6004.",
  },
  {
    icon: HiOutlineClock,
    title: "Open Daily",
    desc: "Monday to Saturday 7:00 AM – 6:00 PM. Sunday 7:00 AM – 5:00 PM.",
  },
  {
    icon: HiOutlineTruck,
    title: "Deliveries",
    desc: "Jet Hardware offers deliveries. Call or text the store to arrange one.",
  },
  {
    icon: HiOutlinePhone,
    title: "Text or Call",
    desc: `${company.phoneDisplay}. You can also email ${company.email}.`,
  },
];

const Feature = () => {
  return (
    <section className="relative z-20 border-y border-[#E6E6E6] bg-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`flex gap-4 px-6 py-7 ${
                index !== items.length - 1 ? "xl:border-r xl:border-[#E6E6E6]" : ""
              } ${index < 2 ? "sm:border-b sm:border-[#E6E6E6] xl:border-b-0" : ""}`}
            >
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-[#E6E6E6] text-[#C41230]">
                <Icon className="text-xl" />
              </span>
              <div>
                <p className="font-Nunito text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C41230]">
                  0{index + 1}
                </p>
                <h3 className="mt-1 font-Rajdhani text-[22px] font-bold text-[#141414]">
                  {item.title}
                </h3>
                <p className="mt-1 font-Nunito text-[14px] leading-relaxed text-[#5b6b82]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feature;
