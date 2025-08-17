import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { prepareExpenseLineChartData } from "../../utils/helper";
import CustomBarChart from "../Charts/CustomBarChart"; // assuming you're using the custom bar chart
import CustomLineChart from "../../Components/Charts/CustomLineChart";
const ExpenseOverview = ({ transactions, onExpenseIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseLineChartData(transactions);
    setChartData(result);
  }, [transactions]);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h5 className="text-lg font-semibold">Expense Overview</h5>
          <p className="text-gray-500 text-sm">
            Track your spending trends over time and gain insights into where your money goes.
          </p>
        </div>
        <button
          className="card-btn flex items-center gap-2 text-pink-500 hover:text-pink-700"
          onClick={onExpenseIncome}
        >
          <LuPlus className="text-base" />
          Add Expense
        </button>
      </div>

      <div className="mt-6">
        <CustomLineChart data={chartData} />
      </div>
    </div>
  );
};

export default ExpenseOverview;
