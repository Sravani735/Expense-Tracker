import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaMoneyBillAlt,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";
import { UserContext } from "../../Context/userContext";
import CharAvatar from "../Cards/CharAvatar";

const SIDE_MENU_DATA = [
  { label: "Dashboard", path: "/dashboard", icon: FaHome },
  { label: "Income", path: "/income", icon: FaMoneyBillAlt },
  { label: "Expense", path: "/expense", icon: FaChartLine },
  { label: "Logout", path: "logout", icon: FaSignOutAlt },
];

const SideMenu = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path) => {
    if (path === "logout") {
      localStorage.clear();
      clearUser();
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200 p-5 sticky top-[61px]">
      {/* User Info */}
      <div className="flex flex-col items-center gap-3 mt-3 mb-6">
        {user?.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt={user.fullName}
            className="w-20 h-20 rounded-full object-cover shadow"
          />
        ) : (
          <CharAvatar name={user?.fullName} className="w-20 h-20 text-xl" />
        )}
        <h5 className="text-center font-semibold text-gray-800">
          {user?.fullName || ""}
        </h5>
      </div>

      {/* Navigation */}
      {SIDE_MENU_DATA.map((item, idx) => {
        const isActive = location.pathname.startsWith(item.path);
        return (
          <button
            key={`menu_${idx}`}
            onClick={() => handleClick(item.path)}
            className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-2 transition-all duration-150 ${
              isActive && item.path !== "logout"
                ? "bg-pink-500 text-white shadow"
                : "text-gray-700 hover:bg-pink-100"
            }`}
          >
            <item.icon className="text-lg" />
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default SideMenu;

