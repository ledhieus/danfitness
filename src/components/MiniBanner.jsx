const MiniBanner = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dd7rhfqp8/image/upload/v1739198624/Th%C3%AAm_ti%C3%AAu_%C4%91%E1%BB%81_ph%E1%BB%A5_ihnlkr.png')] mb-4">
      <div className="py-4 text-white flex  items-center md:justify-center justify-between space-y-2">
        <div className="flex flex-col items-center space-y-2 px-2 md:px-0">
          <p className="uppercase lg:text-[32px] md:text-[28px] text-[22px] font-medium">
            Lịch tập cá nhân
          </p>
          <p className="lg:text-[24px] text-[16px] text-center">
            {" "}
            Lịch tập được thiết kế riêng phù hợp với trình độ và thời gian của
            bạn
          </p>
          <p className=" lg:text-[16px] text-[12px]  text-black w-fit bg-white rounded-lg px-1">
            100K/2 tháng
          </p>
          <a href="https://www.facebook.com/profile.php?id=100090592133117" target="_blank">
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
  );
};

export default MiniBanner;
