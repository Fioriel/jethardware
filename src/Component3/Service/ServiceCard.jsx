import { TopicMark } from "../../Shared/KeyTopics/keyTopics";

const ServiceCard = ({ serviceTitle, description }) => {
  return (
    <article className="group flex h-full items-start gap-4 border border-[#E6E6E6] bg-white p-5 transition duration-300 hover:border-[#C41230]">
      <TopicMark title={serviceTitle} />
      <div>
        <h3 className="font-Rajdhani text-[20px] font-semibold leading-snug text-[#141414]">
          {serviceTitle}
        </h3>
        {description && (
          <p className="mt-1 font-Nunito text-sm leading-relaxed text-[#5b6b82]">{description}</p>
        )}
      </div>
    </article>
  );
};

export default ServiceCard;
