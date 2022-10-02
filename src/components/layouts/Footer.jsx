import { NavLink } from "react-router-dom";
import bluebg from "../../assets/images/common/blue-bg.png";

const HomeFooter = () => {
  console.log(bluebg);
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

  const section2Links = [
    {
      title: "北京朝阳",
      linkTitle: "朝阳区惠新东街6号北京乡镇企业大厦9层",
      link: "#",
    },
    { title: "上海", linkTitle: "静安区新疆路518号", link: "#" },
    { title: "武汉", linkTitle: "珞瑜路阜华大厦", link: "#" },
    { title: "哈尔滨", linkTitle: "南岗区爱达尊御", link: "#" },
    { title: "东京", linkTitle: "江东区门前仲町1-7", link: "#" },
    { title: "成都", linkTitle: "武侯区国学巷37号", link: "#" },
    { title: "广州", linkTitle: "荔湾区陈家祠道48号", link: "#" },
    {
      title: "北京海淀",
      linkTitle: "海淀区清河小营桥东北角1号-2一层1027",
      link: "#",
    },
  ];
  return (
    <div style={{ background: `url(${bluebg})` }} className="text-white">
      <div className="py-10">
        <div className="container mx-auto flex justify-between space-x-10">
          <div className="shrink-0 flex space-x-10">
            {links.map((link, i) => (
              <div key={i}>
                <h3 className="text-3xl mb-2">{link.title}</h3>
                <div className="flex flex-col">
                  {link.links.map((lin, i) => (
                    <NavLink key={i} to={lin.link} className="mb-1">
                      {lin.text}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="shrink-0 max-w-md">
            <h3 className="text-3xl font-medium mb-2">关于我们</h3>
            <p>
              北京分形科技有限公司成立于2003年，是一家以AI为核心驱动力，提供网络品牌形象策划、AI网站建设以及AI人工智能解决方案的综合服务商。
            </p>
            <p>我们一直秉承的经营理念：责任、热情、品质、包容。</p>
            <p>
              主要业务范围：互联网应用开发（网站建设,电商系统,APP,小程序）AI人工智能行业解决方案（智慧博物馆,智慧医疗,智慧校园,智慧公园,智慧社区）IoT智能物联产品（智能步道,AR太极,智能分类垃圾桶,智能语音亭）网络代运营（互动营销,新媒体矩阵,线上活动策划,网络推广）
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 border-t">
        <div className="container mx-auto grid grid-cols-5 gap-8">
          {section2Links.map((link, i) => (
            <div key={i}>
              <h3 className="text-3xl font-medium mb-2">{link.title}</h3>
              <NavLink to={link.link}>{link.linkTitle}</NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t py-10">
        <p className="text-center">
          版权所有：北京分形科技有限公司 京ICP备05007162号-1
          京公网安备11010502032856号
        </p>
      </div>
    </div>
  );
};

export default HomeFooter;
