import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {

    return (
      <div className="bg-white shadow-lg rounded-md px-4 py-3 border border-gray-200 text-sm">
        <p className="font-medium text-pink-700 mb-0.5">{payload[0].name}</p>
        <p className="text-xs text-gray-700">
          Amount:{" "} <span className="text-gray-900 font-semibold">${payload[0].value}</span>
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
