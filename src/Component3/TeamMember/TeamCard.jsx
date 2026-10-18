/* eslint-disable react/prop-types */

const TeamCard = ({ image, name, position, company }) => {
  return (
    <article className="overflow-hidden border border-[#E6E6E6] bg-white">
      <img
        src={image}
        alt={name}
        draggable="false"
        className="block aspect-[3/4] w-full object-cover object-center"
      />
      <div className="border-t border-[#E6E6E6] px-4 py-4">
        <h3 className="font-Rajdhani text-[20px] font-bold leading-tight text-[#141414]">
          {name}
        </h3>
        <p className="mt-1 font-Nunito text-[13px] leading-snug text-[#5b6b82]">
          {position}
        </p>
        {company ? (
          <p className="mt-3 font-Nunito text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1A3A8A]">
            {company}
          </p>
        ) : null}
      </div>
    </article>
  );
};

export default TeamCard;
