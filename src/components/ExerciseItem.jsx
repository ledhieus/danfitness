/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useModelContext } from "../context/ModelProvider";

const ExerciseItem = ({ item, index }) => {
  const { setisShowing, setContent } = useModelContext();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border-b py-4">
      <div className="lg:w-[350px] w-[250px]">
        <p className="text-[#cb1313] font-medium uppercase">Bài {index + 1}</p>
        <p className="uppercase font-medium text-[20px]">{item.name}</p>
        <div
          className="flex items-center gap-3 text-[#cb1313] hover:text-slate-600 cursor-pointer"
          onClick={() => {
            setisShowing(true);
            setContent(<img src={item.gif} />);
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
  );
};

export default ExerciseItem;
