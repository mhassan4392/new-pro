import { useRef, useEffect } from "react";
import DropdownProvider from "./DropdownContext";
import { AnimatePresence, motion } from "framer-motion";

import DropdownButton from "./DropdownButton";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "./DropdownMenuItem";

const Dropdown = ({
  children,
  className,
  hover,
  persistent,
  overlay,
  overlayClass = "",
  overlayOpacity = 0.5,
  ...rest
}) => {
  // close menu function
  let closeMenu;
  // dropdown ref
  const dropdown = useRef(null);

  useEffect(() => {
    // listen for outside click event to close menu
    window.addEventListener("click", (e) => {
      if (
        !persistent &&
        dropdown.current &&
        !dropdown.current.contains(e.target)
      ) {
        // close menu
        closeMenu(false);
      }
    });
  }, [persistent]);

  return (
    <DropdownProvider>
      {({ setOpen, open }) => {
        // set colse menu to setOpen to close the menu on outside click
        closeMenu = setOpen;
        return (
          <>
            <div
              ref={dropdown}
              onMouseEnter={() => hover && setOpen(true)}
              onMouseLeave={() => hover && setOpen(false)}
              className={["relative inline-block", className].join(" ")}
              {...rest}
            >
              {children}

              <AnimatePresence>
                {open && overlay && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: overlayOpacity }}
                    exit={{ opacity: 0 }}
                    className={`fixed inset-0 bg-black ${overlayClass}`}
                  ></motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        );
      }}
    </DropdownProvider>
  );
};

Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;

export default Dropdown;
