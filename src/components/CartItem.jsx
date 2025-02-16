import { useState } from "react";

/* eslint-disable react/prop-types */
const CartItem = ({ banner, name, level, daysPerWeek = "", goal }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col gap-2 shadow-md rounded-md h-full">
      <div className="relative w-full  bg-gray-300 rounded-md overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        <img
          src={banner}
          className="rounded-md w-full h-full object-cover transition-opacity duration-300"
          onLoad={() => setIsLoading(false)}
          style={{ display: isLoading ? "none" : "block" }}
        />
      </div>
      <div className="flex flex-col items-center space-y-2 lg:p-4 p-2">
        <p className="uppercase text-[#404040] lg:text-[20px] text-[16px] font-medium">
          {name}
        </p>
        <div className="flex items-center ">
          <p
            className={`lg:text-[18px] text-[15px]  px-2 ${
              daysPerWeek === "" ? "" : `border-r`
            }`}
          >
            Cấp độ: {level}
          </p>
          {daysPerWeek === "" ? (
            <></>
          ) : (
            <>
              <p className="lg:text-[18px] text-[15px] px-2">
                {daysPerWeek} buổi/tuần
              </p>
            </>
          )}
        </div>
        <p className="text-[#cb1313]">{goal}</p>
        <p className="px-2 py-1 bg-[#cb1313] w-fit text-white hover:bg-[#e84545] cursor-pointer rounded-sm">
          Xem chi tiết
        </p>
      </div>
    </div>
  );
};

export default CartItem;
