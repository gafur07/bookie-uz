import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation"
import useAppSelector from "@/hooks/useAppSelector";
import { useEffect } from "react";
import useAppDispatch from "@/hooks/useAppDispatch";
import { getTrendBooks } from "@/store/trend-books/trendBook.acitons";

const TrendBooks = () => {
  const { trendBook } = useAppSelector((store) => store.mostView)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTrendBooks())
  },[])

  return (
    <>
      <section className="last-book py-[40px]">
        <div className="container">
          <h2 className="mb-[30px] text-[#202020] text-[32px] font-bold">
          Trendtegi kitaplar
          </h2>

          <Swiper 
            breakpoints={{
                1300: {
                  width: 1300,
                  slidesPerView: 4,
                  spaceBetween: 100
                },
                1285: {
                    width: 1285,
                    slidesPerView: 3,
                    spaceBetween: -80
                },
                1050: {
                    width: 1050,
                    slidesPerView: 2,
                    spaceBetween: -80
                },
                600: {
                    width: 600,
                    slidesPerView: 1,
                    spaceBetween: 30
                },
              }}
            navigation={true}
            modules={[Navigation]}
          >
            {trendBook?.map((item: any) => (
              <SwiperSlide>
                <div className="book-card">
                  <div className="book-card-img">
                    <img src={`${item?.image[0]?.image_url}`} alt="" />
                  </div>
                  <div className="book-card-wrapper">
                    <div className="card-title">
                      <h3>{item?.title}</h3>
                      <i className="bx bx-heart"></i>
                    </div>
                    <div className="card-buttons">
                      <div className="card-vision">
                        <i className="bx bx-show-alt"></i>
                        <p>{item?.quantity}</p>
                      </div>
                      <button className="card-button-listening">Tıńlaw</button>
                      <button className="card-korzina">
                        <i className="bx bxs-cart-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TrendBooks;
