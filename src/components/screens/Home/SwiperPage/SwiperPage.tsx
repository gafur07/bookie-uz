import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BkSwiper } from "@/assets/images";
import { sliders } from "./swiperImg";

import "swiper/css";
import "swiper/css/pagination";
import { Container } from "@/components/shared";

const SwiperPage = () => {
  return (
    <section
      className="bg-primary relative bg-no-repeat py-[140px] flex items-center justify-center overflow-hidden"
      style={{
        background: `url(${BkSwiper})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <div className="flex items-center justify-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={100}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide
              className="
        relative 
        min-h-[320px] 
        flex justify-center items-center 
        max-w-full w-full
        "
            >
              <iframe
                src="https://www.youtube.com/embed/UT9ndxZPXxY"
                className="
          rounded-[20px] h-[500px] w-[800px] z-[5] 
          max-[1070px]:h-[400px] 
          max-[1070px]:w-[700px] 
          max-[1050px]:min-h-[575px]
          max-[1050px]:w-full"
              />
            </SwiperSlide>
            {sliders.map(({ img, url }, index) => (
              <SwiperSlide
                key={index}
                className="relative min-h-[320px] flex justify-center items-center max-w-full w-full"
              >
                <a href={url} target="_blank">
                  <img
                    className="
                            rounded-[20px] h-[500px] w-[800px] z-[5] 
                            max-[1070px]:h-[400px] 
                            max-[1070px]:w-[700px] 
                            max-[1050px]:h-[50%] 
                            max-[1050px]:w-full
                            "
                    src={img}
                    alt=""
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default SwiperPage;
