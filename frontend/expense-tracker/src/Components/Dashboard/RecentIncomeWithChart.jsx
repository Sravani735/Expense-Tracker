import React, { useEffect, useState } from "react";
import CustomPieChart from "../../Components/Charts/CustomPieChart";

const COLORS = ["#f445c5ff", "#b073e5ff", "#FF8042", "#0088FE"];

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const [chartData, setChartData] = useState([]);

  
  const prepareChartData = () => {
     console.log("Incoming income data", data);
    const dataArr = data?.map((item) => ({
      name: item?.source,
      amount: item?.amount,
    }));
    
    setChartData(dataArr);
     console.log("Pie chart data", dataArr);
  };

  useEffect(() => {
    prepareChartData();
     
    return () => {};
  }, [data]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 60 Days Income</h5>
      </div>

      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={`$${totalIncome}`}
        showTextAnchor
        colors={COLORS}
      />
    </div>
  );
};

export default RecentIncomeWithChart;

