import { useState } from "react";
import bluebg from "../../../assets/images/common/blue-bg.png";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const Service = ({ service }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 opacity-75 flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${bluebg})` }}
          >
            <motion.h3
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-[40px] text-white font-medium mb-4"
            >
              {service.title}
            </motion.h3>
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center flex-wrap px-8 space-x-4 text-white"
            >
              {service.links.map((link, i) => (
                <NavLink key={i} to={link.link}>
                  {link.text}
                </NavLink>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <img src={service.image} alt="" />
    </div>
  );
};

export default Service;
