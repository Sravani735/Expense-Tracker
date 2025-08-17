import React, { useContext } from "react";
import { UserContext } from "../../Context/userContext"; // Adjusted to match your context folder
import Navbar from "../../Components/layouts/Navbar";       // Adjust if path is different
import SideMenu from "../../Components/layouts/SideMenu";   // Adjust if path is different

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar activeMenu={activeMenu} />

      {user &&(
        <div className="flex">
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} />
          </div>
          <div className="grow mx-5">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
