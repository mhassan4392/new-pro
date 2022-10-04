import navmenu1 from "../../../assets/images/common/navmenu1.png";
import navmenu2 from "../../../assets/images/common/navmenu2.png";
import navmenu3 from "../../../assets/images/common/navmenu3.png";
import navmenu4 from "../../../assets/images/common/navmenu4.png";
import { NavLink } from "react-router-dom";
import MenuItem from "./MenuItem";
import { AnimatePresence, motion } from "framer-motion";
const NavbarMenu = ({ open, setMenu, ...rest }) => {
  const features = [
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: navmenu1,
    },
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: navmenu2,
    },
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: navmenu3,
    },
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: navmenu4,
    },
  ];

  const links = [
    {
      title: "AI网站建设",
      links: [
        { text: "网站建设", link: "#" },
        { text: "官网 站群 门户 社区", link: "#" },
        { text: "电商网站建设", link: "#" },
        { text: "网络运营", link: "#" },
        { text: "代运营", link: "#" },
      ],
    },
    {
      title: "AI解决方案",
      links: [
        { text: "智慧博物馆解决方案", link: "#" },
        { text: "智慧公园解决方案", link: "#" },
        { text: "智慧医院解决方案", link: "#" },
        { text: "智慧学校解决方案", link: "#" },
        { text: "智慧社区解决方案", link: "#" },
        { text: "智慧景区解决方案", link: "#" },
        { text: "智慧票务解决方案", link: "#" },
        { text: "RPA解决方案", link: "#" },
        { text: "云展厅解决方案", link: "#" },
      ],
    },
    {
      title: "成功案例",
      links: [
        { text: "金融行业专题", link: "#" },
        { text: "医疗行业专题", link: "#" },
        { text: "地产行业专题", link: "#" },
        { text: "教育行业专题", link: "#" },
        { text: "博物馆专题", link: "#" },
        { text: "智慧公园专题", link: "#" },
      ],
    },
    {
      title: "建站百科",
      links: [
        { text: "网站建设", link: "#" },
        { text: "网络推广", link: "#" },
        { text: "运营维护", link: "#" },
      ],
    },
    {
      title: "走进分形",
      links: [
        { text: "媒体报道", link: "#" },
        { text: "加入分形", link: "#" },
      ],
    },
  ];
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onMouseEnter={() => setMenu(true)}
          onMouseLeave={() => setMenu(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute left-0 right-0 z-30"
        >
          <div className="footer-bg">
            <div className="grid grid-cols-4 container mx-auto">
              {features.map((f, i) => (
                <MenuItem f={f} key={i} />
              ))}
            </div>
          </div>
          <div className="bg-white py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 container mx-auto ">
              {links.map((link, i) => (
                <div
                  key={i}
                  className={`${i < links.length - 1 ? "border-r" : ""}`}
                >
                  <h3 className="text-3xl mb-5">{link.title}</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-1">
                    {link.links.map((lin, i) => (
                      <NavLink key={i} to={lin.link} className="mb-1">
                        {lin.text}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMenu;
