import { useState } from "react";
import float1 from "../../../assets/images/common/float-1.gif";
import float2 from "../../../assets/images/common/float-2.png";
import float3 from "../../../assets/images/common/float-3.jpg";
import float4 from "../../../assets/images/common/float-4.png";
const FloatingIcons = () => {
  const [show, setShow] = useState(false);
  const [icons] = useState([
    { text: "text 1", image: float1 },
    { text: "text 2", image: float2, qrcode: true },
    { text: "text 3", image: float3, qrcode: true },
    { text: "text 4", image: float4 },
  ]);
  return (
    <div
      className={`fixed z-10 ${
        show ? "right-0" : "-right-24"
      } top-[23%] text-white font-medium transition-all duration-300 ease-linear`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {icons.map((icon, i) => (
        <div
          key={i}
          className="bg-primary py-2 px-4 rounded-l-xl mb-2 h-[110px] flex flex-col items-center justify-center"
        >
          <img
            src={icon.image}
            className={icon.qrcode ? "h-20" : "h-14"}
            alt=""
          />
          <p>{icon.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
