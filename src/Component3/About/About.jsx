import { Link } from "react-router-dom";
import { HiOutlineCog, HiOutlineHome, HiOutlineLightningBolt, HiOutlineTruck } from "react-icons/hi";
import { company } from "../../data/company";

const points = [
  {
    icon: HiOutlineLightningBolt,
    title: "Electrical & Lighting",
    desc: "Electrical supplies and lighting, including chandeliers, for homes and small projects.",
  },
  {
    icon: HiOutlineHome,
    title: "Build & Finish",
    desc: "Construction supplies, lumber, moldings, tiles, and bathroom fixtures.",
  },
  {
    icon: HiOutlineCog,
    title: "Shop Services",
    desc: "Pipe threading and gutter bending are available along with the counter sales.",
  },
  {
    icon: HiOutlineTruck,
    title: "Local Delivery",
    desc: "The store publicly offers deliveries. Text or call before you need the materials on site.",
  },
];

const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src="/images/hw-build.jpg"
            alt="Construction materials"
            className="h-52 w-full object-cover sm:h-64 lg:h-auto lg:aspect-[4/5] lg:max-h-[560px]"
          />
        </div>

        <div className="lg:col-span-7">
          <p className="font-Nunito text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C41230]">
            About the store
          </p>
          <h2 className="mt-3 font-Rajdhani text-[34px] font-bold leading-tight text-[#141414] sm:text-[42px]">
            A Danao City hardware counter for{" "}
            <span className="text-[#C41230]">build, repair, and electrical work</span>
          </h2>
          <p className="mt-4 font-Nunito leading-relaxed text-[#5b6b82]">
            {company.about} Public directories have listed the business since {company.listedSince}.
            The published contact person is {company.contactPerson}.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="border border-[#E6E6E6] bg-white p-5">
                  <Icon className="text-2xl text-[#C41230]" />
                  <h3 className="mt-3 font-Rajdhani text-[18px] font-bold text-[#141414]">
                    {point.title}
                  </h3>
                  <p className="mt-1 font-Nunito text-[14px] leading-relaxed text-[#5b6b82]">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="mt-8 inline-flex bg-[#C41230] px-7 py-3 font-Nunito font-semibold text-white transition hover:bg-[#8E1020]"
          >
            Contact the Store
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
