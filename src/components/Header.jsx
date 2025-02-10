import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white shadow-lg">
      <div className="padding-layout flex justify-between items-center">
        <Link to={"/"}>
          {" "}
          <p className="py-4 font-bold text-[#404040] text-[34px]">
            DanFitness
          </p>
        </Link>
        <div className="flex items-center font-medium text-[20px] text-[#404040] gap-4">
          <Link to={"/"}><p className="px-2 cursor-pointer">Trang chủ</p></Link>
          <Link to={"/bai-tap"}><p className="px-2 cursor-pointer">Bài tập</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
