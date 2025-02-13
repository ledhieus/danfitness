import { useEffect, useState } from "react";
import { getExerciseList } from "../service/exercise";
import { useParams } from "react-router-dom";
import { convertToVietnamese } from "../helper/convertVietnam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useModelContext } from "../context/ModelProvider";
import { getMuscleList } from "../service/muscle";
import Product from "../components/Product";

const EscerciseTargetPage = () => {
  const { slugExercise } = useParams();
  const [exerciseList, setExerciseList] = useState([]);
  const { setisShowing, setContent } = useModelContext();
  const [idMuscle, setIdMuscle] = useState("");
  const [activeType, setActiveType] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const listType = [
    {
      id: "all",
      name: "Tất cả",
    },
    {
      id: "gym",
      name: "Gym",
    },
    {
      id: "home",
      name: "Tại nhà",
    },
  ];
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getMuscleList(`?slug=${slugExercise}`);
      setIdMuscle(data[0]?.id);
      setExerciseList(data);
    };
    fetchApi();
  }, [slugExercise]);

  useEffect(() => {
    if (idMuscle === "") return;
    let type = "";
    if (activeType === "gym") {
      type = "gym";
    } else if (activeType === "home") {
      type = "home";
    }
    const fetchApi = async () => {
      setIsLoading(true);
      try {
        const data = await getExerciseList(
          `?muschleId=${idMuscle}&${type === "" ? "" : `type=${type}&type=all`}`
        );
        setExerciseList(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setIsLoading(false); // Kết thúc tải
      }
    };
    fetchApi();
  }, [slugExercise, idMuscle, activeType]);
  return (
    <div className="padding-layout mt-10">
      {isLoading ? (
        <p className="text-center text-[18px]">Đang tải...</p>
      ) : (
        <div>
          <div className="flex items-center mb-10 ">
            <div className="border flex-1 h-[1px] bg-black"></div>
            <p className="text-center font-bold lg:text-[40px] text-[32px] text-[#404040] mx-4 uppercase">
              {convertToVietnamese(slugExercise)}
            </p>
            <div className="border flex-1 h-[1px] bg-black"></div>
          </div>
          <div className="flex gap-6 lg:text-[26px] text-[22px] text-[#404040] border-b">
            {listType.map((item) => (
              <p
                key={item.id}
                className={`py-4 cursor-pointer ${
                  item.id === activeType
                    ? "border-b-2 border-b-black"
                    : "text-[#737272c5]"
                }`}
                onClick={() => setActiveType(item.id)}
              >
                {item.name}
              </p>
            ))}
          </div>
          <div>
            {exerciseList.length > 0 ? (
              exerciseList.map((item) => (
                <div
                  key={item.id}
                  className="border-b flex md:flex-row flex-col items-center md:justify-between py-4"
                >
                  <div className="lg:w-[350px] w-[250px]">
                    <p className="font-medium uppercase">{item.name}</p>
                    <p className="text-[#5a5a5a]">
                      <span className="font-medium text-[#404040]">
                        Nhóm cơ chính:{" "}
                      </span>
                      {item.primary}
                    </p>
                  </div>
                  <div className="w-[120px]">
                    <img src={item.img} className="w-full" />
                  </div>
                  <div
                    className="flex items-center gap-2 cursor-pointer bg-[#CB1313] hover:bg-[#e84545] text-white px-2 py-1 rounded-md w-fit"
                    onClick={() => {
                      setisShowing(true), setContent(<img src={item.img} />);
                    }}
                  >
                    <p>Xem chi tiết</p>
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-[18px]">Không có bài tập</p>
            )}
            <div></div>
          </div>
          <Product />
        </div>
      )}
    </div>
  );
};

export default EscerciseTargetPage;
