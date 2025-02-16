/* eslint-disable react/prop-types */

const Filter = ({activePlan, setActivePlan}) => {
  return (
    <div className="flex items-center md:text-[24px] text-[20px] text-[#404040] border-b mb-6  gap-4">
      <p
        className={`py-4 px-2 cursor-pointer ${
          activePlan === "body-weight"
            ? "border-b-black border-b-2"
            : "text-[#737272c5]"
        }`}
        onClick={() => setActivePlan("body-weight")}
      >
        Lịch tập tại nhà
      </p>
      <p
        className={`py-4 px-2 cursor-pointer ${
          activePlan === "gym"
            ? "border-b-black border-b-2"
            : "text-[#737272c5]"
        }`}
        onClick={() => setActivePlan("gym")}
      >
        Lịch tập Gym
      </p>
    </div>
  );
};

export default Filter;
