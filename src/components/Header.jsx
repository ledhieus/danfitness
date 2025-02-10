import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white shadow-lg">
      <div className="padding-layout flex justify-between items-center">
        <Link to={"/"}>
          {" "}
          <p className="py-4 font-bold text-[#404040] lg:text-[34px] text-[28px]">
            DanFitness
          </p>
        </Link>
        <div className="flex items-center font-medium lg:text-[20px] text-[17px] text-[#404040] lg:gap-4 gap-1">
          <Link to={"/"}><p className="px-2 cursor-pointer">Trang chủ</p></Link>
          <Link to={"/bai-tap"}><p className="px-2 cursor-pointer">Bài tập</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
