import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getWorkout } from "../service/workout";
import { useParams } from "react-router-dom";
import { useModelContext } from "../context/ModelProvider";
import Product from "../components/Product";
const WorkoutPlanPage = () => {
  const [workout, setWorkout] = useState([]);
  const {slugPlan} = useParams()
  const { setisShowing, setContent } = useModelContext();
  const week = [1, 2, 3, 4, 5, 6, 7];
  const day = workout[0]?.plan.map((item) => item.day);
  const [dayActive, setDayActive] = useState(1);
  const planActive = workout[0]?.plan.filter((item) => item.day === dayActive);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getWorkout(`?slug=${slugPlan}`);
      setWorkout(data);
    };
    fetchApi();
  }, [slugPlan]);
  return (
    <div className="mt-10">
      <div className="padding-layout">
        <div className="flex items-center mb-10">
          <div className="border flex-1 h-[1px] bg-black"></div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-center font-bold text-[40px] text-[#404040] mx-4">
              {workout[0]?.name}
            </p>
            <p className="text-[22px] bg-[#404040] text-white w-fit px-6 rounded-sm">{workout[0]?.week} Tuần</p>
          </div>
          <div className="border flex-1 h-[1px] bg-black"></div>
        </div>
        <div>
          <p className="bg-black font-medium text-white text=[24px] uppercase text-center py-1">
            Kế hoạch {workout[0]?.daysPerWeek} buổi/tuần
          </p>
          <div className="grid grid-cols-7 border-l border-b">
            {week.map((item, index) => (
              <div
                key={index}
                className={`border-r flex flex-col items-center hover:bg-[#eee] space-y-2 py-4 cursor-pointer ${
                  item === dayActive ? "bg-[#eee]" : ""
                }`}
                onClick={() => setDayActive(item)}
              >
                {day?.includes(item) ? (
                  <>
                    <img src="/icon1.png" className="w-[70px]" />
                    <p className="px-1 rounded-md bg-[#cb1313] text-white font-medium w-fit">
                      Ngày {item}
                    </p>
                    <p className="text-[#404040] uppercase font-medium">
                      Toàn thân
                    </p>
                  </>
                ) : (
                  <>
                    <img src="/icon2.png" className="w-[70px]" />
                    <p className="px-1 rounded-md bg-[#cb1313] text-white font-medium w-fit">
                      Ngày {item}
                    </p>
                    <p className="text-[#404040] uppercase font-medium">Nghỉ</p>
                  </>
                )}
              </div>
            ))}
          </div>
          <div>
            {planActive?.length >0 ? (
              planActive[0]?.exercise.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b py-4"
                >
                  <div>
                    <p className="text-[#cb1313] font-medium uppercase">
                      Bài {index + 1}
                    </p>
                    <p className="uppercase font-medium text-[20px]">
                      {item.name}
                    </p>
                    <div className="flex items-center gap-3 text-[#cb1313] hover:text-slate-600 cursor-pointer" onClick={()=> {setisShowing(true), setContent(<img src={item.gif}/>)}}>
                      <p>Xem chi tiết </p>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </div>
                  <div className="w-[150px]">
                    <img src={item.gif} className="w-full" />
                  </div>
                  <div className="flex text-[#404040] text-center">
                    <div className="px-4">
                      <p className="text-[26px]">{item.set}</p>
                      <p className="text-slate-400">Set</p>
                    </div>
                    <div className="px-4 border-x">
                      <p className="text-[26px]">{item.reps}</p>
                      <p className="text-slate-400">Reps</p>
                    </div>
                    <div className="px-4">
                      <p className="text-[26px]">{item.rest}</p>
                      <p className="text-slate-400">Nghỉ</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
               <div className="flex items-center justify-center m-10">
               <img src="https://res.cloudinary.com/dd7rhfqp8/image/upload/v1739150600/restday_izbmyk.jpg" />
               </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Product/>
    </div>
  );
};

export default WorkoutPlanPage;
