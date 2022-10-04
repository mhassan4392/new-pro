import HomeLatestPost from "./Post";
import bluebg from "../../../assets/images/common/blue-bg.png";

const HomeLatestPosts = () => {
  const posts = [
    {
      title: "2022 IAI传鉴国际广告奖|分形科技蝉联两届UI设计金奖",
      desc: "近日“伊水智慧步道全民健身打卡活动暨洛阳青年风尚文体公园启动仪式”正式启动，标志着全民智慧健身进入快车道。北京分形科技和您去了解更多详情。",
      date: "2022.09.08",
      links: [
        { text: "医院", link: "#" },
        { text: "医院网站建设", link: "#" },
        { text: "网站建设", link: "#" },
        { text: "网站建设", link: "#" },
      ],
    },
    {
      title: "2022 IAI传鉴国际广告奖|分形科技蝉联两届UI设计金奖",
      desc: "近日“伊水智慧步道全民健身打卡活动暨洛阳青年风尚文体公园启动仪式”正式启动，标志着全民智慧健身进入快车道。北京分形科技和您去了解更多详情。",
      date: "2022.09.08",
      links: [
        { text: "医院", link: "#" },
        { text: "医院网站建设", link: "#" },
        { text: "网站建设", link: "#" },
        { text: "网站建设", link: "#" },
      ],
    },
    {
      title: "2022 IAI传鉴国际广告奖|分形科技蝉联两届UI设计金奖",
      desc: "近日“伊水智慧步道全民健身打卡活动暨洛阳青年风尚文体公园启动仪式”正式启动，标志着全民智慧健身进入快车道。北京分形科技和您去了解更多详情。",
      date: "2022.09.08",
      links: [
        { text: "医院", link: "#" },
        { text: "医院网站建设", link: "#" },
        { text: "网站建设", link: "#" },
        { text: "网站建设", link: "#" },
      ],
    },
    {
      title: "2022 IAI传鉴国际广告奖|分形科技蝉联两届UI设计金奖",
      desc: "近日“伊水智慧步道全民健身打卡活动暨洛阳青年风尚文体公园启动仪式”正式启动，标志着全民智慧健身进入快车道。北京分形科技和您去了解更多详情。",
      date: "2022.09.08",
      links: [
        { text: "医院", link: "#" },
        { text: "医院网站建设", link: "#" },
        { text: "网站建设", link: "#" },
        { text: "网站建设", link: "#" },
      ],
    },
    {
      title: "2022 IAI传鉴国际广告奖|分形科技蝉联两届UI设计金奖",
      desc: "近日“伊水智慧步道全民健身打卡活动暨洛阳青年风尚文体公园启动仪式”正式启动，标志着全民智慧健身进入快车道。北京分形科技和您去了解更多详情。",
      date: "2022.09.08",
      links: [
        { text: "医院", link: "#" },
        { text: "医院网站建设", link: "#" },
        { text: "网站建设", link: "#" },
        { text: "网站建设", link: "#" },
      ],
    },
    {
      title: "2022 IAI传鉴国际广告奖|分形科技蝉联两届UI设计金奖",
      desc: "近日“伊水智慧步道全民健身打卡活动暨洛阳青年风尚文体公园启动仪式”正式启动，标志着全民智慧健身进入快车道。北京分形科技和您去了解更多详情。",
      date: "2022.09.08",
      links: [
        { text: "医院", link: "#" },
        { text: "医院网站建设", link: "#" },
        { text: "网站建设", link: "#" },
        { text: "网站建设", link: "#" },
      ],
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <HomeLatestPost key={i} post={post} />
        ))}
      </div>

      <div className="flex items-center justify-center my-10">
        <div className="inline-block bg-transparent hover:bg-primary px-10 py-3 transition-all duration-300 border border-gray-800 hover:border-primary hover:text-white text-3xl font-medium rounded cursor-pointer">
          AI赋能 提升价值
        </div>
      </div>
    </div>
  );
};

export default HomeLatestPosts;
