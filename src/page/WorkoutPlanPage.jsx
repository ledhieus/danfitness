import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getWorkout } from "../service/workout";
import { useParams } from "react-router-dom";
import { useModelContext } from "../context/ModelProvider";
import Product from "../components/Product";
const WorkoutPlanPage = () => {
  const [workout, setWorkout] = useState([]);
  const { slugPlan } = useParams();
  const { setisShowing, setContent } = useModelContext();
  const week = [1, 2, 3, 4, 5, 6, 7];
  const days = workout[0]?.plan.map((item) => {
    const day = item.day;
    const target = item.target;
    return { day, target };
  });
  console.log(days);
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
    <div className="lg:mt-10 mt-[-10px]">
      <div className="padding-layout">
        <div className="bg-[url('https://res.cloudinary.com/dd7rhfqp8/image/upload/v1739198624/Th%C3%AAm_ti%C3%AAu_%C4%91%E1%BB%81_ph%E1%BB%A5_ihnlkr.png')] mb-4">
          <div className="py-4 text-white flex  items-center md:justify-center justify-between space-y-2">
            <div className="flex flex-col items-center space-y-2 px-2 md:px-0">
              <p className="uppercase lg:text-[32px] md:text-[28px] text-[22px] font-medium">
                Lịch tập cá nhân
              </p>
              <p className="lg:text-[24px] text-[16px] text-center">
                {" "}
                Lịch tập được thiết kế riêng phù hợp với trình độ và thời gian
                của bạn
              </p>
              <p className=" lg:text-[16px] text-[12px]  text-black w-fit bg-white rounded-lg px-1">
                100K/2 tháng
              </p>
              <a href="m.me/100504566338813" target="_blank">
                <p className="px-2 py-1 bg-[#cb1313] hover:bg-[#e47979] lg:text-[22px] text-[14px] text-white cursor-pointer rounded-md font-medium">
                  Đăng ký Ngay
                </p>
              </a>
            </div>
            <div className="h-full hidden sm:block">
              <img
                src="https://res.cloudinary.com/dd7rhfqp8/image/upload/v1739201820/L%C6%AFNG_2_nbcbl1.png"
                className="lg:h-[250px] h-[200px] object-cover"
              />
            </div>
          </div>
          <div></div>
        </div>

        <div className="flex items-center mb-10">
          <div className="border flex-1 h-[1px] bg-black"></div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-center font-bold lg:text-[40px] text-[30px] text-[#404040] mx-4">
              {workout[0]?.name}
            </p>
            <p className="text-[22px] bg-[#404040] text-white w-fit px-6 rounded-sm">
              {workout[0]?.week} Tuần
            </p>
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
                className={`border-r flex flex-col items-center hover:bg-[#eee] space-y-2 md:py-4 py-1 cursor-pointer ${
                  item === dayActive ? "bg-[#eee]" : ""
                }`}
                onClick={() => setDayActive(item)}
              >
                {days?.some((i) => i.day === item) ? (
                  <>
                    <img
                      src="https://res.cloudinary.com/dd7rhfqp8/image/upload/v1739182044/icon1_cnrjzr.png"
                      className="lg:w-[70px] md:w-[50px] w-[40px]"
                    />
                    <p className="p-1 rounded-md bg-[#cb1313] text-white font-medium w-fit md:text-[16px] text-[13px]">
                      Ngày {item}
                    </p>
                    <p className="text-[#404040] md:uppercase font-medium  md:text-[16px] text-[14px] text-center">
                      {days.find((i) => i.day === item)?.target}
                    </p>
                  </>
                ) : (
                  <>
                    <img
                      src="https://res.cloudinary.com/dd7rhfqp8/image/upload/v1739182044/icon2_bl8g2c.png"
                      className="lg:w-[70px] md:w-[50px] w-[40px]"
                    />
                    <p className="p-1 rounded-md bg-[#cb1313] text-white font-medium w-fit  md:text-[16px] text-[13px]">
                      Ngày {item}
                    </p>
                    <p className="text-[#404040] md:uppercase font-medium md:text-[16px] text-[14px]">
                      Nghỉ
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
          <div>
            {planActive?.length > 0 ? (
              planActive[0]?.exercise.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center justify-between border-b py-4"
                >
                  <div>
                    <p className="text-[#cb1313] font-medium uppercase">
                      Bài {index + 1}
                    </p>
                    <p className="uppercase font-medium text-[20px]">
                      {item.name}
                    </p>
                    <div
                      className="flex items-center gap-3 text-[#cb1313] hover:text-slate-600 cursor-pointer"
                      onClick={() => {
                        setisShowing(true), setContent(<img src={item.gif} />);
                      }}
                    >
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
      <Product />
    </div>
  );
};

export default WorkoutPlanPage;
