import { Progress } from "./ui/progress";

export const SavingCard = ({
  title,
  current,
  target,
  percentage,
  date,
  color
}) => {
  const colorMap = {
    indigo: "text-[#4745a4]",
    amber: "text-[#f9ba33]",
    emerald: "text-[#3bbb6e]"
  };
  const progressMap = {
    indigo: "[&>div]:bg-[#4745a4]",
    amber: "[&>div]:bg-[#f9ba33]",
    emerald: "[&>div]:bg-[#3bbb6e]"
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{title}</h3>
        <span className="text-xs text-gray-500">Target: {date}</span>
      </div>
      <div className="flex justify-between items-center my-2">
        <div className="flex items-baseline space-x-1">
          <span className="text-xl font-bold text-slate-900">
            ${current.toLocaleString()}
          </span>
          <span className="text-gray-400 text-xs">
            /${target.toLocaleString()}
          </span>
        </div>
        <div className={`text-right text-lg font-medium ${colorMap[color]}`}>
          {percentage}%
        </div>
      </div>
      <div className="">
        <Progress value={percentage} className={progressMap[color]} />
      </div>
    </div>
  );
};
