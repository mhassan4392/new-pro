import f1 from "../../../assets/images/home/f1.png";
import f2 from "../../../assets/images/home/f2.png";
import f3 from "../../../assets/images/home/f3.png";
import f4 from "../../../assets/images/home/f4.png";
import f5 from "../../../assets/images/home/f5.png";
import f6 from "../../../assets/images/home/f6.png";
import f7 from "../../../assets/images/home/f7.png";
import f8 from "../../../assets/images/home/f8.png";
import f9 from "../../../assets/images/home/f9.png";
import f10 from "../../../assets/images/home/f10.png";
import f11 from "../../../assets/images/home/f11.png";
import HomeFeature from "./Feature";
const HomeFeatures = () => {
  const features1 = [
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: f1,
    },
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: f2,
    },
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: f3,
    },
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: f4,
    },
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: f5,
      bg: true,
    },
  ];

  const features2 = [
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: f6,
    },
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: f7,
    },
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: f8,
    },
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: f9,
    },
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: f10,
    },
    {
      text: "网站建设",
      desc: "建立稳健的地基，以承载企业网络品牌持续性发展",
      image: f11,
      bg: true,
    },
  ];
  return (
    <div className="container mx-auto py-8">
      <div className="flex">
        <div className="w-2/6 border rounded px-8 py-12 mr-5">
          <h3 className="text-[40px] font-semibold">AI网站建设</h3>
          <p>借AI之「势」，赋网站新「能」</p>
          <p>
            AI网站建设，将单纯内容维护与编辑升级为更高维度的「人机交互」，基于AI赋予网站更多职能，让网站完成从信息传达工具到辅助决策助手的进化。
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {features1.map((f, i) => (
            <HomeFeature f={f} key={i} />
          ))}
        </div>
      </div>

      <div className="flex mt-10">
        <div className="w-2/6 border rounded px-8 py-12 mr-5">
          <h3 className="text-[40px] font-semibold">AI解决方案</h3>
          <p>借AI之「势」，赋网站新「能」</p>
          <p>
            借助AI技术，打造全新互联网产品形态，让传统行业解决方案迸发出新的可能
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {features2.map((f, i) => (
            <HomeFeature f={f} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
