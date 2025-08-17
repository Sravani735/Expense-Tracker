import React from "react";
import CustomPieChart from "../Charts/CustomPieChart"; 
// Colors for the pie chart
const COLORS = ["#c5368eff", "blue", "purple"];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expenses", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];

  return (
    <div className="card p-4 shadow rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold">Financial Overview</h5>
      </div>

      
        <CustomPieChart
          data={balanceData}
          label="Total Balance"
          totalAmount={`$${totalBalance}`}
          colors={COLORS}
          showTextAnchor
        />
      </div>
  );
};

export default FinanceOverview;
