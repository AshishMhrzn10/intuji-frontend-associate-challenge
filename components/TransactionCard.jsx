export const TransactionCard = ({ name, date, amount, status, icon }) => {
  return (
    <div className="flex items-center py-2 px-1">
      <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-lg">{name}</h4>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <div className="text-right">
        <div className="font-bold text-lg">${amount}</div>
        <p className="text-xs text-emerald-500">{status}</p>
      </div>
    </div>
  );
};
