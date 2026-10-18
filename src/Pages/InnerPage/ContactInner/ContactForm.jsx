import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa6";
import { company } from "../../../data/company";

const mailto = `mailto:${company.email}?subject=${encodeURIComponent("Message for New Jet Hardware")}`;

const ContactForm = () => {
  return (
    <div className="grid bg-white lg:grid-cols-[0.75fr_1.25fr]">
      <div className="flex flex-col justify-between bg-[#8E1020] px-6 py-12 text-white sm:px-10">
        <div>
          <p className="font-Nunito text-[12px] font-semibold uppercase tracking-[0.22em] text-white/70">
            Write to the store
          </p>
          <h2 className="mt-3 font-Rajdhani text-4xl font-bold leading-tight sm:text-5xl">
            Open your mail app
          </h2>
          <p className="mt-4 font-Nunito leading-relaxed text-white/80">
            Tap email and your mail program opens with a message already addressed to the store.
          </p>
        </div>
        <p className="mt-10 font-Nunito text-sm text-white/75">
          {company.addressOneLine}
        </p>
      </div>

      <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-10">
        <a
          href={mailto}
          className="flex items-center justify-between gap-4 border border-[#E6E6E6] bg-[#C41230] px-6 py-6 text-white transition hover:bg-[#8E1020]"
        >
          <span>
            <span className="block font-Nunito text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
              Email
            </span>
            <span className="mt-1 block font-Rajdhani text-3xl font-bold">{company.email}</span>
          </span>
          <HiOutlineMail className="shrink-0 text-3xl" />
        </a>

        <a
          href={`tel:${company.phoneTel}`}
          className="flex items-center justify-between gap-4 border border-[#E6E6E6] px-6 py-6 transition hover:border-[#C41230]"
        >
          <span>
            <span className="block font-Nunito text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C41230]">
              Text or call
            </span>
            <span className="mt-1 block font-Rajdhani text-3xl font-bold text-[#141414]">
              {company.phoneDisplay}
            </span>
          </span>
          <HiOutlinePhone className="shrink-0 text-3xl text-[#C41230]" />
        </a>

        <a
          href={company.facebook}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between gap-4 border border-[#E6E6E6] px-6 py-6 transition hover:border-[#C41230]"
        >
          <span>
            <span className="block font-Nunito text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C41230]">
              Facebook
            </span>
            <span className="mt-1 block font-Rajdhani text-3xl font-bold text-[#141414]">
              facebook.com/jethardware
            </span>
          </span>
          <FaFacebookF className="shrink-0 text-2xl text-[#C41230]" />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
