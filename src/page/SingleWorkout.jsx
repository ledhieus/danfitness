import { useEffect, useMemo, useState } from "react";
import CartItem from "../components/CartItem";
import { getSingleWorkout } from "../service/singleWorkout";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";

const SingleWorkout = () => {
  const [allSingleWorkout, setAllSingleWorkout] = useState([]);
  const [activePlan, setActivePlan] = useState("body-weight")
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getSingleWorkout(``);
      setAllSingleWorkout(data);
    };
    fetchApi();
  }, [activePlan]);
  const activeSingleWorkout = useMemo(() => {
      return allSingleWorkout.filter((item) => item.type === activePlan);
    }, [activePlan, allSingleWorkout]);
  return (
    <div className="padding-layout">
      <Filter activePlan={activePlan} setActivePlan={setActivePlan}/>
      <div className="grid lg:grid-cols-4 lg:gap-8 md:gap-6 md:grid-cols-3 grid-cols-2 gap-2 h-fit">
        {activeSingleWorkout?.map((item) => (
          <Link to={`/buoi-tap/${item.slug}`} key={item.id} className="">
            <CartItem
              banner={item.banner}
              name={item.name}
              level={item.level}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SingleWorkout;
