import { reviews, company } from "../../data/company";

const TeamMember = () => {
  return (
    <section className="bg-white pb-20 pt-16">
      <div className="Container">
        <div className="mb-12 text-center">
          <p className="font-Nunito text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C41230]">
            Public notes
          </p>
          <h2 className="mt-2 font-Rajdhani text-[36px] font-bold text-[#141414] sm:text-[44px]">
            What customers have said
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-Nunito text-[#5b6b82]">
            Published rating {company.rating} out of 5 from {company.ratingCount} reviews.
            Listed contact: {company.contactPerson}.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review.quote} className="border border-[#E6E6E6] bg-white p-6">
              <p className="font-Rajdhani text-[24px] font-semibold leading-snug text-[#141414]">
                “{review.quote}”
              </p>
              <footer className="mt-4 font-Nunito text-sm text-[#6b7c93]">{review.note}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
