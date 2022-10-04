import { useRef, useState } from "react";

const MenuItem = ({ f, ...rest }) => {
  const height = useRef(null);
  const [hover, setHover] = useState(false);
  return (
    <div
      ref={height}
      {...rest}
      className={`flex flex-col lg:flex-row items-center p-5 relative h-48 cursor-pointer transition-all duration-500 footer-bg text-white ${
        hover ? "shadow-lg" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`relative border ${f.bg ? "bg-primary" : ""} ${
          !hover ? "border-gray-500" : "border-primary"
        } transition-all duration-500 p-3`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`relative w-full h-full flex items-center justify-center transform transition-all duration-500 ${
              hover ? "rotate-180 scale-125" : ""
            }`}
          >
            <div
              className={`absolute inset-0 ${
                !hover ? "rounded-full" : ""
              } border ${
                f.bg ? "border-gray-400" : "border-gray-500"
              } transition-all duration-500`}
            ></div>
            <div
              className={`absolute h-full w-[1px] ${
                f.bg ? "bg-gray-400" : "bg-gray-500"
              }`}
            ></div>
            <div
              className={`absolute w-full h-[1px] ${
                f.bg ? "bg-gray-400" : "bg-gray-500"
              }`}
            ></div>
          </div>
        </div>
        <img src={f.image} className="lg:w-32 w-20" alt="" />
      </div>
      <p className="text-sm sm:text-lg font-medium mb-2 lg:hidden mt-5">
        {f.text}
      </p>
      <div className="ml-4 hidden lg:block">
        <p className="text-2xl font-medium mb-2">{f.text}</p>
        <p>{f.desc}</p>
      </div>
    </div>
  );
};

export default MenuItem;
