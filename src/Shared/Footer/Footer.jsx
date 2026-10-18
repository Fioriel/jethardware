import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { FiArrowRightCircle } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { company } from "../../data/company";

const Footer = () => {

  return (
    <footer className="relative z-10">
      <div className="relative overflow-hidden border-t border-[#E6E6E6] bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "Store", name: company.shortName, role: "Danao City, Cebu", email: company.email },
              { label: "Text or call", name: company.phoneDisplay, role: "Main mobile", email: company.phoneTel, tel: true },
              { label: "Landline", name: "(032) 343-0049", role: "Published store line", email: "+63323430049", tel: true },
              { label: "Contact person", name: company.contactPerson, role: "Listed contact", email: company.email },
            ].map((item) => (
              <div key={item.label} className="flex h-full flex-col border border-[#E6E6E6] bg-white p-5">
                <p className="font-Nunito text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C41230]">
                  {item.label}
                </p>
                <h4 className="mt-3 font-Rajdhani text-[22px] font-bold leading-none text-[#141414]">{item.name}</h4>
                <p className="mt-1 font-Nunito text-sm text-[#6b7c93]">{item.role}</p>
                <a
                  href={item.tel ? `tel:${item.email}` : `mailto:${item.email}`}
                  className="mt-4 inline-flex items-center gap-2 break-words font-Nunito text-sm text-[#C41230]"
                >
                  <HiOutlineMail className="shrink-0 text-base" />
                  {item.tel ? "Call now" : item.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white pt-28">
        <div className="Container">
          <div className="grid grid-cols-12 gap-y-7">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <Link to="/" className="flex items-center gap-3">
                <span className="h-12 w-28 overflow-hidden bg-[#e7f6fb]">
                  <img src="/images/jet-logo.jpg" draggable={false} alt="" className="h-full w-full object-cover object-top" />
                </span>
                <div className="leading-tight text-[#141414]">
                  <span className="block text-lg font-semibold">New Jet Hardware</span>
                  <span className="block text-sm opacity-70">& Electrical Supplies</span>
                </div>
              </Link>
              <p className="mb-8 mt-6 w-10/12 font-Nunito text-[#5b6b82]">{company.tagline}</p>
              <a href={`mailto:${company.email}`}>
                <button className="primary-btn">
                  Email the Store
                  <GoArrowRight size={22} />
                </button>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h4 className="mb-[33px] font-Rajdhani text-[28px] font-semibold text-[#141414]">Quick Links</h4>
              <ul>
                {[
                  { label: "Home", path: "/" },
                  { label: "About", path: "/about" },
                  { label: "Contact Us", path: "/contact" },
                ].map(({ label, path }) => (
                  <li key={label}>
                    <Link to={path}>
                      <button className="mb-5 flex items-center gap-2 font-Nunito text-[#4b5b73] hover:text-PrimaryColor-0">
                        <FiArrowRightCircle className="text-base text-PrimaryColor-0" />
                        {label}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-2">
              <h4 className="mb-[33px] font-Rajdhani text-[28px] font-semibold text-[#141414]">Legal</h4>
              <ul>
                {[
                  { label: "Terms & Conditions", path: "/terms?policy=termsGeneral" },
                  { label: "Privacy Policy", path: "/terms?policy=generalPrivacy" },
                  { label: "Store Conduct", path: "/terms?policy=codeOfConduct" },
                  { label: "Orders & Returns", path: "/terms?policy=returns" },
                  { label: "Cookie Policy", path: "/terms?policy=cookiePolicy" },
                ].map(({ label, path }) => (
                  <li key={label}>
                    <Link to={path}>
                      <button className="mb-5 flex items-center gap-2 font-Nunito text-[#4b5b73] hover:text-PrimaryColor-0">
                        <FiArrowRightCircle className="text-base text-PrimaryColor-0" />
                        {label}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h4 className="mb-[30px] font-Rajdhani text-[28px] font-semibold text-[#141414]">Email</h4>
              <p className="mb-[26px] font-Nunito text-[#5b6b82]">
                Messages open in your own mail app. The store address is {company.email}.
              </p>
              <a href={`mailto:${company.email}`} className="primary-btn w-fit">
                <HiOutlineMail className="text-xl" />
                {company.email}
              </a>
            </div>
          </div>

          <div className="mt-[108px] flex flex-col items-center justify-between border-t border-BorderColor-0 py-6 md:flex-row">
            <p className="text-center font-Nunito text-[#4b5b73] md:text-left">
              © {new Date().getFullYear()} {company.name} · All Rights Reserved
            </p>
            <a href={company.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <button className="primary-btn">
                <FaFacebookF />
              </button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
