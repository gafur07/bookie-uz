import "./Swipper.scss"
import bookIcon from "../../../images/book.svg"
import fullStar from "../../../images/fullStar.svg"
import kvadrat from "../../../images/kvadrat.svg"
import star from "../../../images/star.svg"
import star5 from "../../../images/star5.png"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay, Pagination } from "swiper/modules"
import { sliders } from "./swiperImg"
import "swiper/css/pagination"

const SwiperPage = () => {
  return (
    <div className="swipper">
        <img className="image1" src={bookIcon}/>
        <img className="image2" src={fullStar}/>
        <div className="kvadrat">
            <img className="" src={kvadrat}/>
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
        <SwiperSlide className={"relative min-h-[320px] flex justify-center items-center max-w-full w-full"}>
          <iframe src="https://www.youtube.com/embed/UT9ndxZPXxY" className={"swiperImg"} />
        </SwiperSlide>
            {
                sliders.map((item: any) => (
                    <SwiperSlide className="relative min-h-[320px] flex justify-center items-center max-w-full w-full">
                        <img className="swiperImg" src={item?.img} alt="" />
                        <a className="slideLink" href={item?.url} target="_blank"></a>
                    </SwiperSlide>
                ))
            }
        </Swiper>

        <img className="image3" src={star}/>
        <img className="image4" src={star5}/>
    </div>
  )
}

export default SwiperPage