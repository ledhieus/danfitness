
const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/banner3.png"
          className="brightness-50 h-[430px] w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="padding-layout flex items-center justify-center flex-col">
            <p className="uppercase py-10 text-[50px] font-medium text-white">
              Lịch tập tham khảo
            </p>
            <div className="px-10 text-[28px] text-white text-center">
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