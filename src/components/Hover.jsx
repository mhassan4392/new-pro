import { useState } from "react";
const Hover = ({ children, ...rest }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {typeof children == "function" ? children({ hover }) : children}
    </div>
  );
};

export default Hover;
