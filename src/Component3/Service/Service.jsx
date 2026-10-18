import ServiceCard from "./ServiceCard";
import { keyTopics } from "../../Shared/KeyTopics/keyTopics";

const Service = () => {
  return (
    <section className="relative z-10 border-y border-[#E6E6E6] bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h5 className="font-Rajdhani text-[13px] font-semibold tracking-[0.22em] text-[#C41230]">
              WHAT THE STORE CARRIES
            </h5>
            <h1 className="mt-3 font-Rajdhani text-[36px] font-bold leading-none text-[#141414] sm:text-[46px]">
              Departments
            </h1>
          </div>
          <p className="font-Nunito text-sm text-[#6b7c93]">{keyTopics.length} lines</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {keyTopics.map((item) => (
            <ServiceCard key={item.title} serviceTitle={item.title} description={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
