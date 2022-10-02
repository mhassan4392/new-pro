import { NavLink } from "react-router-dom";
import info1 from "../../../assets/images/home/info1.png";
import info2 from "../../../assets/images/home/info2.png";
import info3 from "../../../assets/images/home/info3.png";
import info4 from "../../../assets/images/home/info4.png";
import info5 from "../../../assets/images/home/info5.png";
import Hover from "../../Hover";
import "./info.css";
const HomeInfo = () => {
  const infos = [
    { title: "关注我们", image: info1, link: "#" },
    { title: "索要报价", image: info2, link: "#" },
    { title: "我要咨询", image: info3, link: "#" },
    { title: "找到我们", image: info4, link: "#" },
    { title: "投诉建议", image: info5, link: "#" },
  ];
  return (
    <>
      <div className="border-t border-b py-10 mt-20 mb-5">
        <div className="flex items-center justify-between container mx-auto">
          <div className="flex items-center justify-center space-x-5">
            {infos.map((info, i) => (
              <NavLink
                to={info.link}
                key={i}
                className="flex flex-col items-center justify-center"
              >
                <Hover className="flex flex-col items-center justify-center">
                  {({ hover }) => (
                    <>
                      <div className="h-24 w-24 border rounded-full flex items-center justify-center mb-2">
                        <img
                          src={info.image}
                          className={`transition-all duration-500 transform ${
                            hover ? "info-icon" : ""
                          } `}
                          alt=""
                        />
                      </div>
                      <p>{info.title}</p>
                    </>
                  )}
                </Hover>
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-5">
            <div>
              <h3 className="text-[40px] font-medium">400-6446-365</h3>
              <p className="indent-5 text-gray-500">
                也许您需要专业的服务，欢迎来电咨询
              </p>
            </div>
            <div>
              <h3 className="text-[40px] font-medium">010-64928252</h3>
              <p className="indent-5 text-gray-500">
                您的需求，是我们前进最大的动力
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-5 flex">
        <span className="shrink-0 mr-3">友情链接： &nbsp;</span>
        <div className="flex items-center flex-wrap">
          {Array.from({ length: 15 }).map((i, a) => (
            <NavLink key={a} to="#" className="mr-3 mb-1">
              天津网站建设
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeInfo;
