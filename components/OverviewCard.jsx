import { MoveRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";

export const OverviewCard = ({ title, value, change, icon, color, active }) => {
  const colorClass = {
    blue: "bg-blue-200 text-blue-600",
    green: "bg-[#407da3] text-[#31d4a3]",
    red: "bg-red-200 text-red-600",
    yellow: "bg-yellow-200 text-yellow-600"
  };
  return (
    <div
      className={`${
        active ? "bg-[#4645a3]" : "bg-white"
      } rounded-lg p-5 border`}
    >
      <div className={`${active ? "text-white" : ""} flex  gap-2`}>
        <Image src={icon} height="100%" width="100%" alt={title} />
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-medium ">{title}</h3>
          <div className="flex items-center gap-1">
            <div className={`p-0.5 rounded-sm ${colorClass[color]}`}>
              <MoveUpRight size={12} />
            </div>
            <p className="text-xs text-gray-400">
              <span>{change}%</span> compared with last month
            </p>
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      <div
        className={`${
          active ? "text-white" : ""
        } flex  items-center justify-between`}
      >
        <div className="text-2xl font-semibold">{value}</div>
        <button>
          <MoveRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
