
const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://res.cloudinary.com/dd7rhfqp8/image/upload/v1739179397/banner3_owiyzu.png"
          className="brightness-50 lg:h-[430px] h-[300px] w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="padding-layout flex items-center justify-center flex-col">
            <p className="uppercase py-10 lg:text-[50px] md:text-[40px] text-[30px] font-medium text-white">
              Lịch tập tham khảo
            </p>
            <div className="px-10 lg:text-[28px] md:text-[24px] text-[17px] text-white text-center">
              <p>Lịch tập chỉ mang tính chất tham khảo.</p>
              <p>
                Hãy lắng nghe cơ thể và điều chỉnh theo nhu cầu cá nhân để có
                kết quả tối ưu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner