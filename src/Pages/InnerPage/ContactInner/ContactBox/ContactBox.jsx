import { company } from "../../../../data/company";

const ContactBox = () => {
  return (
    <section className="bg-white">
      <div className="grid border-b border-[#E6E6E6] sm:grid-cols-3">
        {[
          ["Store", "Danao City, Cebu"],
          ["Hours", "Open daily"],
          ["Delivery", "Available — call ahead"],
        ].map(([label, value]) => (
          <div key={label} className="border-b border-[#E6E6E6] px-6 py-6 sm:border-b-0 sm:border-r sm:last:border-r-0">
            <p className="font-Nunito text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C41230]">{label}</p>
            <p className="mt-2 font-Rajdhani text-2xl font-bold text-[#141414]">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 border-b border-[#E6E6E6] px-6 py-8 lg:grid-cols-2">
        <div>
          <p className="font-Nunito text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5C6370]">Address</p>
          {company.addressLines.map((line) => (
            <p key={line} className="font-Rajdhani text-2xl font-bold text-[#141414]">
              {line}
            </p>
          ))}
          <p className="mt-4 font-Nunito text-sm text-[#5C6370]">Listed contact: {company.contactPerson}</p>
        </div>
        <div className="space-y-3">
          {company.phones.map((phone) => (
            <a key={phone.value} href={phone.href} className="flex items-center justify-between border border-[#E6E6E6] px-4 py-3">
              <span className="font-Nunito text-sm text-[#5C6370]">{phone.label}</span>
              <span className="font-Rajdhani text-xl font-bold text-[#141414]">{phone.value}</span>
            </a>
          ))}
          <a href={`mailto:${company.email}`} className="block font-Nunito text-[#C41230]">
            {company.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;
