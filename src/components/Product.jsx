import {  useEffect, useRef } from "react";
// import { getProductList } from "../service/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useProductContext } from "../context/ProductProvider";

const Product = () => {
  // const [productList, setProductList] = useState([]);
  const { productList } = useProductContext()
  const swiperRef = useRef(null);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const data = await getProductList("");
  //     setProductList(data);
  //   };
  //   fetchApi();
  // }, []);
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = ".custom-prev";
      swiperRef.current.swiper.params.navigation.nextEl = ".custom-next";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);
  
  return (
    <div className="padding-layout mt-10 mb-10">
      <p className="text-[24px] py-4 font-medium border-t">Dụng cụ tập luyện</p>
      <div className="relative group">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 2 }, 
            768: { slidesPerView: 3 }, 
            1024: { slidesPerView: 4 }, 
            1280: { slidesPerView: 5 }, 
          }}
          className="h-full py-2"
        >
          {productList && productList.map((item) => (
            <SwiperSlide key={item.id}  className="shadow-md">
              <a href={item.link} target="_blank" className="h-full">
                <img src={item.img} />
                <div className="px-1 h-[80px] rounded-b-sm">
                  <p className="font-medium text-[18px]">{item.name}</p>
                  <p className="text-[#cb1313] font-bold">{item.price}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="custom-prev absolute left-[-35px] top-1/2 transform -translate-y-1/2 text-[26px] text-black p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="custom-next absolute right-[-35px] top-1/2 transform -translate-y-1/2 text-[26px] text-black p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
      </div>
    </div>
  );
};

export default Product;
