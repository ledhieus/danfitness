import { useEffect, useState } from "react";
import { getMuscleList } from "../service/muscle";
import { Link } from "react-router-dom";

const ExercisePage = () => {
  const [muscleList, setMuscleList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getMuscleList("");
      setMuscleList(data);
    };
    fetchApi();
  }, []);
  return (
    <div className="padding-layout my-10">
      <div className="flex items-center mb-10 ">
        <div className="border flex-1 h-[1px] bg-black"></div>
        <p className="text-center font-bold lg:text-[40px] text-[32px] text-[#404040] mx-4">
          Các nhóm cơ
        </p>
        <div className="border flex-1 h-[1px] bg-black"></div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
        {muscleList &&
          muscleList.map((item) => (
            <Link key={item.id} to={`${item.slug}`}>
              <div className="cursor-pointer">
                <img src={item.img} className="" />
                <div className="text-center">
                  <p className="uppercase text-[#404040] lg:text-[26px] text-[20px]  font-medium">
                    {item.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ExercisePage;
