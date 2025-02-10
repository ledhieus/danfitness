import { useEffect, useState } from "react";
import { getWorkout } from "../service/workout";
import { Link } from "react-router-dom";
import Product from "../components/Product";
const HomePage = () => {
  const [planWorkoutList, setPlanWorkoutList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getWorkout("");
      setPlanWorkoutList(data);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className="mt-10">
        <div className="padding-layout">
          <div className="flex items-center mb-10 ">
            <div className="border flex-1 h-[1px] bg-black"></div>
            <p className="text-center font-bold text-[40px] text-[#404040] mx-4">
              Lịch tập
            </p>
            <div className="border flex-1 h-[1px] bg-black"></div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {planWorkoutList.map((item) => (
              <Link to={`/lich-tap/${item.slug}`} key={item.id}>
                <div className="flex flex-col gap-2 shadow-md rounded-md">
                  <img src={item.banner} className=" rounded-md"/>
                  <div className="flex flex-col items-center space-y-2 pb-4">
                    <p className="uppercase text-[#404040] text-[20px] font-medium">
                      {item.name}
                    </p>
                    <div className="flex items-center">
                      <p className="text-[18px] border-r px-2">Cấp độ: {item.level}</p>
                      <p className="text-[18px] px-2">{item.daysPerWeek} buổi/tuần</p>
                    </div>
                    <p className="text-[#cb1313]">{item.goal}</p>
                    <p className="px-2 py-1 bg-[#cb1313] w-fit text-white hover:bg-[#e84545] cursor-pointer rounded-sm">
                      Xem chi tiết
                    </p>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </div>
      <Product/>
    </>
  );
};

export default HomePage;
