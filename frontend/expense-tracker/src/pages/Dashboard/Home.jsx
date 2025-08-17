import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import DashboardLayout from "../../Components/layouts/DasboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import  axiosInstance  from "../../utils/axiosInstance"; // ✅ Import this
import { API_PATHS } from "../../utils/apiPaths"; // ✅ Import this if defined
import InfoCard from "../../Components/Cards/InfoCard";
import {LuHandCoins,LuWalletMinimal} from "react-icons/lu";
import {IoMdCard} from "react-icons/io";
import { addThousandsSeparator } from "../../utils/helper";
import RecentTransactions from "../../Components/Dashboard/RecentTransaction";
import FinanceOverview from "../../Components/Dashboard/FinanceOverview";
import ExpenseTransactions from "../../Components/Dashboard/ExpenseTransaction";
import Last30DaysExpenses from "../../Components/Dashboard/Last30DaysExpense";
import RecentIncomeWithChart from "../../Components/Dashboard/RecentIncomeWithChart";
import RecentIncome from "../../Components/Dashboard/RecentIncome";
import CustomPieChart from "../../Components/Charts/CustomPieChart";
 

const Home = () => {
  useUserAuth();
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);

      if (response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InfoCard
         icon={<IoMdCard/>}
         label="Total Balance"
        value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
         color="bg-pink-500"/>
         <InfoCard
         icon={<LuWalletMinimal/>}
         label="Total Income"
        value={addThousandsSeparator(dashboardData?.totalIncome|| 0)}
         color="bg-blue-500"/>
        <InfoCard
         icon={<LuHandCoins/>}
         label="Total Expense"
        value={addThousandsSeparator(dashboardData?.totalExpense || 0)}
         color="bg-purple-500"/>


       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <RecentTransactions
            transactions={dashboardData?.recentTransactions}
            onSeeMore={() => navigate("/expense")}
            />

        <FinanceOverview
         totalBalance={dashboardData?.totalBalance || 0}
         totalIncome={dashboardData?.totalIncome || 0}
         totalExpense={dashboardData?.totalExpenses || 0}
         /> 
       <ExpenseTransactions
       transactions={dashboardData?.last30DaysExpenses?.transactions || []}
       onSeeMore={() => navigate("/expense")}
       />
      <Last30DaysExpenses
      data={dashboardData?.last30DaysExpenses?.transactions || []}
     />

     <RecentIncomeWithChart
  data={dashboardData?.last60DaysIncome?.transactions || []}
  totalIncome={dashboardData?.totalIncome || 0}
/>

     <RecentIncome
       transactions={dashboardData?.last60DaysIncome?.transactions?.slice(0,4) || []}
       onSeeMore={() => navigate("/income")}/>
       
       </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;

