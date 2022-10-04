const HameBurger = ({ toggle, lineClasses, className, ...rest }) => {
  return (
    <div
      className={[
        "flex flex-col space-y-1 cursor-pointer w-6 justify-center",
        className,
      ].join(" ")}
      {...rest}
    >
      <span
        className={`${
          toggle ? "rotate-45 origin-center translate-y-1.5" : ""
        } bg-black h-0.5 transform transition-all duration-500 ease-in-out rounded-lg ${lineClasses}`}
      ></span>
      <span
        className={`${
          toggle ? "w-0" : "w-full"
        } bg-black h-0.5 transform transition-all duration-500 ease-in-out rounded-lg ${lineClasses}`}
      ></span>
      <span
        className={`${
          toggle ? "-rotate-45 origin-center -translate-y-1.5" : ""
        } bg-black h-0.5 transform transition-all duration-500 ease-in-out rounded-lg ${lineClasses}`}
      ></span>
    </div>
  );
};

export default HameBurger;
