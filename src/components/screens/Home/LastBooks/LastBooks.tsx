import { Swiper, SwiperSlide } from "swiper/react";
import "./LastBooks.scss";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { useGetLatestBookQuery } from "@/services/latest-add/latest.api";
import { BookCard, BookSkeleton } from "@/components/shared";
import { IBookSlug } from "@/services/index.interface";
import { FC } from "react";

interface ILastBookProps {
  targetRef: any
}

const LastBooks:FC<ILastBookProps> = ({ targetRef }) => {
  const { data, isLoading } = useGetLatestBookQuery();

  return (
    <>
      <section ref={targetRef} id="lastBook" className="bg-[#d7e7f8] py-[40px] px-[5%]">
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
          {isLoading
            ? [...Array(4)].map((_, i) => (
                <SwiperSlide key={i}>
                  <BookSkeleton />
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

export default LastBooks;
