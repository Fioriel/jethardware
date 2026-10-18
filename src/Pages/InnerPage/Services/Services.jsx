import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { services, company } from "../../../data/company";

const Services = () => {
  return (
    <>
      <BreadCrumb
        title="Services"
        subtitle="Danao City counter"
        description="Delivery, pipe threading, and gutter bending, plus walk-in sales of hardware and electrical supplies."
        breadcrumb={[{ label: "Services" }]}
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1100px] gap-4 px-6 md:grid-cols-2">
          {services.map((item) => (
            <article key={item.title} className="border border-[#E6E6E6] p-6">
              <h2 className="font-Rajdhani text-3xl font-bold text-[#141414]">{item.title}</h2>
              <p className="mt-2 font-Nunito leading-relaxed text-[#5b6b82]">{item.desc}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-[1100px] flex-wrap gap-3 px-6">
          <a href={`tel:${company.phoneTel}`} className="inline-flex bg-[#C41230] px-7 py-3 font-Nunito font-semibold text-white">
            Call {company.phoneDisplay}
          </a>
          <Link to="/contact" className="inline-flex border border-[#141414] px-7 py-3 font-Nunito font-semibold text-[#141414]">
            See the address
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
