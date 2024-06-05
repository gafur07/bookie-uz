import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation"
import {useAppDispatch} from "@/hooks";
import { useGetTrendingBook } from "@/services";
import { useNavigate} from "react-router-dom";
import { BookCard, Skeleton } from "@/shared";
import no_photo from "@/images/no_photo.jpg"
import { addCart, addFavorites } from "@/store/index.actions";
import { IBookSlug } from "@/services/index.interface";

const TrendBooks = () => {
  const { data, isLoading } = useGetTrendingBook()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const changeCart = (data: IBookSlug) => {
    dispatch(addCart(data))
  }
  const changeFavorite = (data: IBookSlug) => {
    dispatch(addFavorites(data))
  }


  return (
    <>
      <section className="last-book py-[40px] px-[5%]">
          <h2 className="mb-[30px] text-[#202020] text-[32px] font-bold">
          Trendtegi kitaplar
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
          {isLoading
            ? [...Array(4)].map((_, i) => (
                <SwiperSlide key={i}>
                  <Skeleton />
                </SwiperSlide>
              ))
            : data?.map((item: IBookSlug) => (
                <SwiperSlide key={item.slug}>
                  <BookCard key={item.slug} {...item}/>
                </SwiperSlide>
              ))}
        </Swiper>
      </section>
    </>
  );
};

export default TrendBooks;
