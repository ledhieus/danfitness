import { useEffect, useState } from "react";
import { getWorkout } from "../service/workout";
import { Link } from "react-router-dom";
import Product from "../components/Product";
const HomePage = () => {
  const [planWorkoutList, setPlanWorkoutList] = useState([]);
  const [activePlan, setActivePlan] = useState("body-weight")
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getWorkout(`?type=${activePlan}`);
      setPlanWorkoutList(data);
    };
    fetchApi();
  }, [activePlan]);
  return (
    <>
      <div className="mt-10">
        <div className="padding-layout">
          <div className="flex items-center mb-6 ">
            <div className="border flex-1 h-[1px] bg-black"></div>
            <p className="text-center font-bold lg:text-[40px] text-[32px] text-[#404040] mx-4">
              Lịch tập
            </p>
            <div className="border flex-1 h-[1px] bg-black"></div>
          </div>
          <div className="flex items-center md:text-[24px] text-[20px] text-[#404040] border-b mb-6  gap-4">
            <p className={`py-4 px-2 cursor-pointer ${activePlan === "body-weight" ? "border-b-black border-b-2": "text-[#737272c5]"}`} onClick={()=>setActivePlan("body-weight")}>Lịch tập tại nhà</p>
            <p className={`py-4 px-2 cursor-pointer ${activePlan === "gym" ? "border-b-black border-b-2": "text-[#737272c5]"}`} onClick={()=>setActivePlan("gym")}>Lịch tập Gym</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-y-3 lg:space-y-0 lg:gap-6 gap-2">
            {planWorkoutList.map((item) => (
              <Link to={`/lich-tap/${item.slug}`} key={item.id}>
                <div className="flex flex-col gap-2 shadow-md rounded-md">
                  <img src={item.banner} className=" rounded-md"/>
                  <div className="flex flex-col items-center space-y-2 lg:p-4 p-2">
                    <p className="uppercase text-[#404040] lg:text-[20px] text-[16px] font-medium">
                      {item.name}
                    </p>
                    <div className="flex items-center ">
                      <p className="lg:text-[18px] text-[15px] border-r px-2">Cấp độ: {item.level}</p>
                      <p className="lg:text-[18px] text-[15px] px-2">{item.daysPerWeek} buổi/tuần</p>
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
