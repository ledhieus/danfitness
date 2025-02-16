import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="bg-white shadow-lg">
      <div className="padding-layout flex justify-between items-center">
        <Link to={"/"}>
          {" "}
          <p className="py-4 font-bold text-[#404040] lg:text-[34px] text-[28px]">
            DanFitness
          </p>
        </Link>
        <div className="md:flex items-center font-medium lg:text-[20px] text-[17px] text-[#404040] lg:gap-4 gap-1 hidden">
          {/* <Link to={"/"}><p className="px-2 cursor-pointer">Trang chủ</p></Link> */}
          <Link to={"/bai-tap"}>
            <p className="px-2 cursor-pointer">Danh sách bài tập</p>
          </Link>
          <Link to={"/buoi-tap"}>
            <p className="px-2 cursor-pointer">Buổi tập đơn</p>
          </Link>
        </div>
        <div className="md:hidden flex text-[20px] cursor-pointer">
          <FontAwesomeIcon icon={faBars} onClick={() => showDrawer()} />
        </div>
        <Drawer title="Danfitness" onClose={onClose} open={open}>
          <Link to={"/"} onClick={() => onClose()}>
            <p className="px-2 cursor-pointer text-[18px] py-2 border-b">
              Trang chủ
            </p>
          </Link>
          <Link to={"/bai-tap"} onClick={() => onClose()}>
            <p className="px-2 cursor-pointer text-[18px] py-2 border-b">
              Danh sách bài tập
            </p>
          </Link>
          <Link to={"/buoi-tap"} onClick={() => onClose()}>
            <p className="px-2 cursor-pointer text-[18px] py-2 border-b">
              Buổi tập đơn
            </p>
          </Link>
          <div className="flex items-center gap-2 py-4 text-[16px] hover:text-blue-700 cursor-pointer justify-center">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-700" />
            <p className="font-bold"> DanFitness - Lịch Tập</p>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
