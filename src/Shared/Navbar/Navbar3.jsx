import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import { company } from "../../data/company";

const Logo = "/images/jet-logo.jpg";

const linkClass = ({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`;

const Navbar3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="h-[70px] lg:h-[112px]" />

      <header className="fixed top-0 left-0 z-[10000] w-full border-b border-[#E6E6E6] bg-white">
        <div className="hidden h-10 items-center justify-between bg-[#C41230] px-8 text-[12px] tracking-wide text-white lg:flex">
          <p>Open daily · Danao City, Cebu · Deliveries available</p>
          <a href={`tel:${company.phoneTel}`} className="hover:text-white/80">
            {company.phoneDisplay}
          </a>
        </div>

        <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-4 lg:h-[72px] lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3" onClick={closeNavbar}>
            <span className="h-11 w-24 shrink-0 overflow-hidden bg-[#e7f6fb]">
              <img
                src={Logo}
                alt="New Jet Hardware & Electrical Supplies logo"
                className="h-full w-full object-cover object-top"
                draggable="false"
              />
            </span>
            <span className="min-w-0 border-l border-[#E6E6E6] pl-3 uppercase leading-tight">
              <span className="block truncate text-[14px] font-semibold text-[#141414] lg:text-[15px]">
                New Jet Hardware
              </span>
              <span className="block truncate text-[11px] tracking-[0.14em] text-[#C41230]">
                & Electrical Supplies
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 text-[13px] font-medium uppercase tracking-[0.12em] text-[#141414] lg:flex">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
            <a
              href={`mailto:${company.email}`}
              className="ml-3 bg-[#C41230] px-5 py-3 text-[13px] tracking-[0.14em] text-white transition-colors hover:bg-[#8E1020]"
            >
              Email the Store
            </a>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center border border-[#E6E6E6] text-[#141414] lg:hidden"
          >
            <HiOutlineMenuAlt4 className="text-2xl" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[9999] bg-[#141414]/40 transition-opacity ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeNavbar}
      />

      <aside
        className={`fixed top-0 right-0 z-[10000] flex h-full w-[86%] max-w-[380px] flex-col bg-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between bg-[#C41230] px-5 py-5 text-white">
          <div>
            <p className="font-Rajdhani text-xl font-bold leading-none">Menu</p>
            <p className="mt-1 text-[12px] text-white/75">Danao City hardware store</p>
          </div>
          <button type="button" aria-label="Close menu" onClick={closeNavbar} className="text-white">
            <IoMdClose className="h-7 w-7" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-2 text-[16px] uppercase tracking-[0.08em] text-[#141414]">
          <NavLink to="/" end onClick={closeNavbar} className="block border-b border-[#E6E6E6] py-4">
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeNavbar} className="block border-b border-[#E6E6E6] py-4">
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeNavbar} className="block border-b border-[#E6E6E6] py-4">
            Contact
          </NavLink>
        </nav>

        <div className="border-t border-[#E6E6E6] p-6">
          <a
            href={`mailto:${company.email}`}
            onClick={closeNavbar}
            className="block bg-[#C41230] py-3 text-center text-[14px] font-semibold uppercase tracking-[0.14em] text-white"
          >
            Email the Store
          </a>
        </div>
      </aside>

      <style>{`
        .nav-link {
          display: inline-flex;
          align-items: center;
          height: 72px;
          padding: 0 0.85rem;
          transition: color 0.2s ease;
        }
        .nav-link:hover,
        .group:hover .nav-link,
        .nav-link.is-active,
        .group.is-active .nav-link {
          color: #C41230;
        }
        .nav-link.is-active,
        .group.is-active .nav-link {
          box-shadow: inset 0 -2px 0 #C41230;
        }
        .group { position: relative; }
        .group::after {
          content: "";
          position: absolute;
          left: 0;
          top: 100%;
          width: 100%;
          height: 10px;
        }
        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 230px;
          display: none;
          border: 1px solid #E6E6E6;
          background: #fff;
          padding: 0.5rem 0;
          z-index: 20;
        }
        .group:hover .dropdown { display: block; }
        .dropdown a {
          display: block;
          padding: 0.7rem 1rem;
          text-transform: none;
          letter-spacing: 0;
          color: #141414;
        }
        .dropdown a:hover { color: #C41230; }
      `}</style>
    </>
  );
};

export default Navbar3;
