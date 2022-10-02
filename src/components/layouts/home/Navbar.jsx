import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/common/logo.png";
import tel24 from "../../../assets/images/common/24-tel.png";
import { IoGridOutline, IoCopyOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
const HomeNavbar = () => {
  const [search, setSearch] = useState(false);
  const links = [
    { text: "AI网站建设", link: "#" },
    { text: "AI解决方案", link: "#" },
    { text: "案例", link: "#" },
    { text: "百科", link: "#" },
    { text: "我们", link: "#" },
  ];
  return (
    <div className="h-24 bg-white shadow-sm flex items-center px-8">
      <div className="w-1/3">
        <img src={logo} alt="" />
      </div>
      <div className="w-1/3">
        <div className="flex items-center justify-center text-2xl font-medium space-x-5">
          {links.map((link, i) => (
            <NavLink key={i} to={link.link}>
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-1/3">
        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-2">
            <img src={tel24} alt="" />
            <h3 className="text-2xl font-medium">400-6446-365</h3>
          </div>
          <div className="w-3"></div>
          <div className="flex items-center space-x-1">
            <IoGridOutline className="text-xl" />
            <p>服务</p>
          </div>
          <div className="w-1"></div>
          <div className="flex items-center space-x-1">
            <IoCopyOutline className="text-xl" />
            <p>北京</p>
          </div>
          <div className="w-3"></div>
          <div className="relative">
            <FaSearch
              className="text-xl cursor-pointer"
              onClick={() => setSearch(!search)}
            />

            <AnimatePresence>
              {search && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-0 top-16 bg-white flex items-center shadow-lg rounded-lg overflow-hidden p-2 z-10"
                >
                  <input
                    type="text"
                    placeholder="网站建设"
                    className="focus:outline-none focus:ring-0"
                  />
                  <FaSearch
                    className="text-lg cursor-pointer"
                    onClick={() => setSearch(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
