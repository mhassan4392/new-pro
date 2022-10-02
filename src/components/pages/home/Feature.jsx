import { useRef, useState } from "react";

const HomeFeature = ({ f, ...rest }) => {
  const height = useRef(null);
  const [hover, setHover] = useState(false);
  return (
    <div
      ref={height}
      {...rest}
      className={`flex items-center p-5 border relative h-48 cursor-pointer transition-all duration-500 ${
        hover ? "shadow-lg" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`absolute bottom-0 right-0 h-[1px] transition-all duration-500 bg-primary ${
          hover ? "w-full" : "w-0"
        }`}
      ></div>
      <div
        className={`absolute top-0 left-0 h-[1px] transition-all duration-500 bg-primary ${
          hover ? "w-full" : "w-0"
        }`}
      ></div>
      <div
        className={`absolute left-0 top-0 w-[1px] bg-primary transition-all duration-500`}
        style={{ height: hover ? height?.current?.clientHeight + "px" : "0" }}
      ></div>
      <div
        className={`absolute right-0 bottom-0 w-[1px] bg-primary transition-all duration-500`}
        style={{ height: hover ? height?.current?.clientHeight + "px" : "0" }}
      ></div>

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
        <img src={f.image} className="w-32" alt="" />
      </div>
      <div className="ml-4">
        <p className="text-2xl font-medium mb-2">{f.text}</p>
        <p>{f.desc}</p>
      </div>
    </div>
  );
};

export default HomeFeature;
