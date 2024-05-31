import { Swiper, SwiperSlide } from "swiper/react";
import "./LastBooks.scss";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import useAppSelector from "@/hooks/useAppSelector";
import useAppDispatch from "@/hooks/useAppDispatch";
import { useEffect } from "react";
import { getLatestAdd } from "@/store/latest-add/latest.action";

const LastBooks = () => {
  const { latest } = useAppSelector((store) => store.latest);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLatestAdd());
  }, []);
  console.log(latest);

  return (
    <>
      <section className="last-book py-[40px]">
        <div className="container">
          <h2 className="mb-[30px] text-[#202020] text-[32px] font-bold">
            Sońǵı qosılǵanları
          </h2>

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            breakpoints={{
              1: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              600: {
                slidesPerView: 2,
              },
              1050: {
                slidesPerView: 3,
              },
              1350: {
                slidesPerView: 4,
              },
              1600: {
                slidesPerView: 5,
              },
            }}
          >
            {latest?.map((item: any) => (
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

export default LastBooks;
