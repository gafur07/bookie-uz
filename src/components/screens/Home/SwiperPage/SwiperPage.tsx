import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { BkBook, BkSquare, BkStar1, BkStar2, BkStarFilled } from "@/assets/images"
import { sliders } from "./swiperImg"

import "swiper/css"
import "swiper/css/pagination"

const SwiperPage = () => {
  return (
    <section className="bg-primary w-full h-screen relative flex items-center justify-center">
        <img 
            className="absolute top-[80px] 
            left-[250px] max-[1300px]:left-[200px]
            max-[1200px]:left-[150px]
            max-[1200px]:top-[120px]
            max-[1050px]:hidden
            " 
            src={BkBook}/>
        <img className="absolute top-[500px] left-[1080px] 
            max-[1300px]:left-[900px]
            max-[1300px]:top-[450px]
            max-[1200px]:left-[830px]
            max-[1050px]:hidden
            "  src={BkStarFilled}/>
        <div className="absolute top-[50px] left-[300px] 
            max-[1300px]:left-[250px]
            max-[1300px]:top-[150px]
            max-[1200px]:left-[200px]
            max-[1200px]:top-[100px]
            max-[1050px]:hidden
            ">
            <img className="
                max-[1300px]:width-[400px]
                max-[1200px]:top-[1350px]
            " src={BkSquare}/>
        </div>
        <Swiper
            slidesPerView={1}
            spaceBetween={100}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            pagination={{
                dynamicBullets: true
            }}
            modules={[Autoplay, Pagination]}
            
        >
        <SwiperSlide className="
        relative 
        min-h-[320px] 
        flex justify-center items-center 
        max-w-full w-full
        ">
          <iframe src="https://www.youtube.com/embed/UT9ndxZPXxY" className="
          rounded-[20px] h-[500px] w-[800px] z-[5] 
          max-[1070px]:h-[400px] 
          max-[1070px]:w-[700px] 
          max-[1050px]:min-h-[575px] 
          max-[1050px]:w-full" />
        </SwiperSlide>
            {
                sliders.map(({ img, url}, index) => (
                    <SwiperSlide key={index} className="relative min-h-[320px] flex justify-center items-center max-w-full w-full">
                        <a href={url} target="_blank">
                            <img className="
                            rounded-[20px] h-[500px] w-[800px] z-[5] 
                            max-[1070px]:h-[400px] 
                            max-[1070px]:w-[700px] 
                            max-[1050px]:h-[50%] 
                            max-[1050px]:w-full
                            " src={img} alt="" />
                        </a>
                    </SwiperSlide>
                ))
            }
        </Swiper>

        <img className="absolute top-0 left-[1000px] 
            max-[1300px]:left-[850px]
            max-[1200px]:left-[750px]
            max-[1200px]:top-[30px]
            max-[1050px]:hidden" 
            src={BkStar1}/>
        <img className="absolute top-[500px] left-[250px] 
            max-[1300px]:left-[200px]
            max-[1300px]:top-[450px]
            max-[1200px]:left-[150px]
            max-[1050px]:hidden" src={BkStar2}/>
    </section>
  )
}

export default SwiperPage