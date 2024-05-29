import "./Swipper.scss"
import bookIcon from "../../../images/book.svg"
import fullStar from "../../../images/fullStar.svg"
import kvadrat from "../../../images/kvadrat.svg"
import star from "../../../images/star.svg"
import star5 from "../../../images/star5.png"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

const SwiperPage = () => {
  return (
    <div className="swipper">
        <img className="bookIcon" src={bookIcon}/>
        <img className="fullStar" src={fullStar}/>
        <img className="kvadrat" src={kvadrat}/>
        <img className="star" src={star}/>
        <img className="star5" src={star5}/>
        <Swiper
            slidesPerView={1}
            spaceBetween={50}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            scrollbar={{draggable:true}}
            navigation = {true}
            modules={[Autoplay, Pagination, Navigation]}
            
        >
            <SwiperSlide><img className="mx-auto h-[450px] w-[55%] max-w-full object-cover rounded-[16px]" src="https://picsum.photos/400" alt="" /></SwiperSlide>
            <SwiperSlide><img className="mx-auto h-[450px] w-[55%] max-w-full object-cover rounded-[16px]" src="https://picsum.photos/400" alt="" /></SwiperSlide>
            <SwiperSlide><img className="mx-auto h-[450px] w-[55%] max-w-full object-cover rounded-[16px]" src="https://picsum.photos/400" alt="" /></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default SwiperPage