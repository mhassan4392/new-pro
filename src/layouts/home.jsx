import { Outlet } from "react-router-dom";
import HomeFooter from "../components/layouts/Footer";
import FloatingIcons from "../components/layouts/home/FloatingIcons";
import HomeNavbar from "../components/layouts/home/Navbar";
import RedButtons from "../components/layouts/home/RedButtons";

const HomeLayout = () => {
  return (
    <div>
      <RedButtons />
      <FloatingIcons />
      <HomeNavbar />
      <Outlet />
      <HomeFooter />
    </div>
  );
};

export default HomeLayout;
