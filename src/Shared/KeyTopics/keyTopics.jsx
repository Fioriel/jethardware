import {
  LuBath,
  LuFish,
  LuHammer,
  LuLamp,
  LuLayers,
  LuRuler,
  LuTrees,
  LuWrench,
} from "react-icons/lu";
import { departments } from "../../data/company";

const icons = [LuLamp, LuHammer, LuWrench, LuRuler, LuTrees, LuLayers, LuBath, LuFish];

export const keyTopics = departments.map((item, index) => ({
  ...item,
  Icon: icons[index] || LuHammer,
}));

const sizes = {
  sm: { box: "h-7 w-7", icon: 14 },
  md: { box: "h-9 w-9", icon: 18 },
};

export const TopicMark = ({ title, size = "md" }) => {
  const topic = keyTopics.find((item) => item.title === title);
  if (!topic) return null;

  const Icon = topic.Icon;
  const spec = sizes[size] || sizes.md;

  return (
    <span
      className={`flex ${spec.box} shrink-0 items-center justify-center border border-[#E6E6E6] bg-white text-[#C41230]`}
      aria-hidden="true"
    >
      <Icon size={spec.icon} strokeWidth={1.6} />
    </span>
  );
};
