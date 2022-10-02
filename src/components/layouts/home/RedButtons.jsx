import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import fu from "../../../assets/images/common/fu.png";

const RedButtons = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* top button */}
      <div
        className="w-10 h-4 bg-red-700 shadow-lg fixed top-0 left-[48%] z-10"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      ></div>

      {/* right button */}
      <div
        className="w-10 h-4 bg-red-700 shadow-lg fixed right-0 top-[48%] z-10"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      ></div>

      {/* bottom button */}
      <div
        className="w-10 h-4 bg-red-700 shadow-lg fixed bottom-0 left-[48%] z-10"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      ></div>

      {/* left button */}
      <div
        className="w-10 h-4 bg-red-700 shadow-lg fixed left-0 top-[48%] z-10"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      ></div>

      {/* fu images */}
      <AnimatePresence>
        {show && (
          <>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={fu}
              className="fixed left-20 top-[40%] z-10"
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={fu}
              className="fixed right-20 top-[40%] z-10"
              alt=""
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default RedButtons;
