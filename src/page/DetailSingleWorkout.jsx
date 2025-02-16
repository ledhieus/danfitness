import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleWorkout } from "../service/singleWorkout";
import MiniBanner from "../components/MiniBanner";
import Product from "../components/Product";
import ExerciseItem from "../components/ExerciseItem";
import CartItem from "../components/CartItem";

const DetailSingleWorkout = () => {
  const { slugDetail } = useParams();
  const [exerciseList, setExerciseList] = useState([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [success, setSuccess] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getSingleWorkout(`?slug=${slugDetail}`);
      const name = data[0]?.name;
      const exerciseList = data[0]?.exercise;
      setType(data[0]?.type);
      setExerciseList(exerciseList);
      setTitle(name);
    };
    fetchApi();
  }, [slugDetail]);
  useEffect(() => {
    if (type === "") return;
    const fetchApi = async () => {
      const data = await getSingleWorkout(`?type=${type}`);
      const successWorkout = data.filter((item) => item.slug !== slugDetail);
      setSuccess(successWorkout);
    };
    fetchApi();
  }, [type, slugDetail]);
  return (
    <div className="padding-layout">
      <MiniBanner />
      <div className="flex items-center m-10">
        <div className="border flex-1 h-[1px] bg-black"></div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center font-bold lg:text-[40px] text-[30px] text-[#404040] mx-4">
            {title}
          </p>
        </div>
        <div className="border flex-1 h-[1px] bg-black"></div>
      </div>
      <div>
        {exerciseList?.length > 0 &&
          exerciseList.map((item, index) => (
            <ExerciseItem key={item.id || index} item={item} index={index} />
          ))}
      </div>
      <div>
        <p className="py-6 text-[24px] font-medium">Bài viết liên quan</p>
        <div className="grid lg:grid-cols-4 lg:gap-8 md:gap-6 md:grid-cols-3 grid-cols-2 gap-2">
          {success.length > 0 &&
            success.map((item) => (
              <Link key={item.id} to={`/buoi-tap/${item.slug}`}>
                <CartItem key={item.id} banner={item.banner} name={item.name} />
              </Link>
            ))}
        </div>
      </div>
      <Product />
    </div>
  );
};

export default DetailSingleWorkout;
