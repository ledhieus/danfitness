import { useEffect, useMemo, useState } from "react";
import { getWorkout } from "../service/workout";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import CartItem from "../components/CartItem";
import Filter from "../components/Filter";
import SingleWorkout from "./SingleWorkout";
const HomePage = () => {
  // const [planWorkoutList, setPlanWorkoutList] = useState([]);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const data = await getWorkout(`?type=${activePlan}`);
  //     setPlanWorkoutList(data);
  //   };
  //   fetchApi();
  // }, [activePlan]);
  const [activePlan, setActivePlan] = useState("body-weight");
  const [planWorkoutList, setPlanWorkoutList] = useState([]);
  // const [planActive, setPlanActive] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getWorkout(``);
      setPlanWorkoutList(data);
    };
    fetchApi();
  }, []);
  const planActive = useMemo(() => {
    return planWorkoutList.filter((item) => item.type === activePlan);
  }, [activePlan, planWorkoutList]);
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
          <Filter activePlan={activePlan} setActivePlan={setActivePlan} />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-y-3 lg:space-y-0 lg:gap-6 gap-2">
            {planActive.map((item) => (
              <Link to={`/lich-tap/${item.slug}`} key={item.id}>
                <CartItem
                  banner={item.banner}
                  name={item.name}
                  level={item.level}
                  daysPerWeek={item.daysPerWeek}
                  goal={item.goal}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="padding-layout mt-10">
      <div className=" flex items-center mb-6 ">
        <div className="border flex-1 h-[1px] bg-black"></div>
        <p className="text-center font-bold lg:text-[40px] text-[32px] text-[#404040] mx-4">
          Buổi tập đơn
        </p>
        <div className="border flex-1 h-[1px] bg-black"></div>
      </div>
      </div>
      <SingleWorkout />
      <Product />
    </>
  );
};

export default HomePage;
