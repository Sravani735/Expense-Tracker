import React from "react";
import {
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2,
} from "react-icons/lu";

const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete,
}) => {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b">
      {/* Left Side: Icon + Label */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 text-lg font-semibold">
          {icon ? (
            typeof icon === "string" && icon.startsWith("http") ? (
              <img src={icon} alt={title} className="w-5 h-5" />
            ) : (
              icon
            )
          ) : (
            "Ψ"
          )}
        </div>

        {/* Title + Date */}
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-800">{title}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
      </div>

      {/* Right Side: Amount + Direction + Delete */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <span
            className={`text-sm font-semibold ${
              type === "income" ? "text-green-600" : "text-red-500"
            }`}
          >
            {type === "income" ? "+" : "-"}${amount}
          </span>
          {type === "income" ? (
            <LuTrendingUp className="text-green-600" size={16} />
          ) : (
            <LuTrendingDown className="text-red-500" size={16} />
          )}
        </div>

        {!hideDeleteBtn && (
          <button
            onClick={onDelete}
            className="text-gray-400 hover:text-red-600"
          >
            <LuTrash2 size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TransactionInfoCard;
