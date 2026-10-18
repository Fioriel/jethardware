import { company } from "../../data/company";

const AudienceStats = () => {
  return (
    <section className="bg-white py-20">
      <div className="Container">
        <div className="mb-12 max-w-3xl">
          <p className="font-Nunito text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C41230]">
            Visit the counter
          </p>
          <h2 className="mt-2 font-Rajdhani text-[36px] font-bold text-[#141414] sm:text-[42px]">
            Hours, phones, and location
          </h2>
          <p className="mt-4 font-Nunito text-lg text-[#5b6b82]">{company.addressOneLine}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="border border-[#E6E6E6] p-7">
            <h3 className="font-Rajdhani text-2xl font-bold text-[#141414]">Opening hours</h3>
            <ul className="mt-5 divide-y divide-[#E6E6E6]">
              {company.hours.map((row) => (
                <li key={row.day} className="flex items-center justify-between py-3 font-Nunito text-sm">
                  <span className="text-[#141414]">{row.day}</span>
                  <span className="text-[#5b6b82]">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[#E6E6E6] p-7">
            <h3 className="font-Rajdhani text-2xl font-bold text-[#141414]">Contact numbers</h3>
            <ul className="mt-5 space-y-3">
              {company.phones.map((phone) => (
                <li key={phone.value} className="flex items-center justify-between gap-4 font-Nunito text-sm">
                  <span className="text-[#5b6b82]">{phone.label}</span>
                  <a href={phone.href} className="font-semibold text-[#C41230]">
                    {phone.value}
                  </a>
                </li>
              ))}
            </ul>
            <a href={`mailto:${company.email}`} className="mt-6 inline-block font-Nunito text-sm text-[#C41230]">
              {company.email}
            </a>
            <p className="mt-4 font-Nunito text-sm text-[#5b6b82]">
              Facebook:{" "}
              <a href={company.facebook} className="text-[#C41230]" target="_blank" rel="noreferrer">
                facebook.com/jethardware
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden border border-[#E6E6E6]">
          <iframe
            title="Map of New Jet Hardware & Electrical Supplies"
            src={company.mapEmbed}
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default AudienceStats;
