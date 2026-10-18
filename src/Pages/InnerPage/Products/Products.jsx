import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { departments } from "../../../data/company";

const Products = () => {
  return (
    <>
      <BreadCrumb
        title="Departments"
        subtitle="New Jet Hardware & Electrical Supplies"
        description="Construction supplies, electrical supplies, hardware, plumbing, fishing supplies, lumber, moldings, tiles, chandeliers, and bathroom fixtures."
        breadcrumb={[{ label: "Products" }]}
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1100px] gap-4 px-6 md:grid-cols-2">
          {departments.map((item) => (
            <article key={item.title} className="border border-[#E6E6E6] p-6">
              <h2 className="font-Rajdhani text-3xl font-bold text-[#141414]">{item.title}</h2>
              <p className="mt-2 font-Nunito leading-relaxed text-[#5b6b82]">{item.desc}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-[1100px] px-6">
          <Link to="/quote" className="inline-flex bg-[#C41230] px-7 py-3 font-Nunito font-semibold text-white">
            Ask if an item is in stock
          </Link>
        </div>
      </section>
    </>
  );
};

export default Products;
