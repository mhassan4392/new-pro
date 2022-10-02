import { useEffect, useState } from "react";
import { Modal } from "../../modal";
import bluebg from "../../../assets/images/common/blue-bg.png";
import { IoClose } from "react-icons/io5";
const StartModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);
  return (
    <Modal
      open={open}
      onOutsideClick={() => setOpen(false)}
      style={{ backgroundImage: `url(${bluebg})` }}
    >
      <Modal.Body className="relative">
        <IoClose
          className="text-3xl text-white absolute right-2 top-2 font-bold cursor-pointer"
          onClick={() => setOpen(false)}
        />
        <h1 className="text-[50px] font-medium text-white text-center mt-3">
          您需要 AI+互联网
        </h1>
        <h1 className="text-[50px] font-medium text-white text-center mt-3">
          顾问提供专业咨询
        </h1>
        <div className="flex items-center justify-center space-x-4 px-8 py-3">
          <div className="grow text-white border-white border-2 py-1 rounded-lg flex items-center justify-center text-lg cursor-pointer">
            残忍拒绝
          </div>
          <div className="grow text-primary bg-white border-white border-2 py-1 rounded-lg flex items-center justify-center text-lg cursor-pointer">
            立即咨询
          </div>
        </div>
        <div
          className="text-white text-center"
          style={{ lineHeight: "1.75rem" }}
        >
          <div>
            AI人工智能 · VR · AR · 智慧博物馆 · 智慧公园 · 景区 · 文创 · 动画
          </div>
          <div>
            高端网站建设 · 小程序 · APP · 微信 · H5 · 游戏 · 电商 · 年度运营
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default StartModal;
