import { useEffect, useRef, useState } from "react";
import { getProductList } from "../service/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Product = () => {
  const [productList, setProductList] = useState([]);
  const swiperRef = useRef(null);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getProductList("");
      setProductList(data);
    };
    fetchApi();
  }, []);
  return (
    <div className="padding-layout mt-10 mb-20">
      <p className="text-[24px] py-4 font-medium border-t">Dụng cụ tập luyện</p>
      <div className="h-fit">
        <Swiper
          ref={swiperRef} // Gán ref cho Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          grabCursor={true}
        >
          {productList.map((item) => (
            <SwiperSlide key={item.id}  className="shadow-md h-[275px]">
              <a href={item.link} target="_blank">
                <img src={item.img} />
                <div className="p-2 h-full">
                  <p className="font-medium text-[18px]">{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
