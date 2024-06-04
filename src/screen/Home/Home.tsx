import Contact from "./Contact/Contact"
import LastBooks from "./LastBooks/LastBooks"
import Main from "./Main/MainPage"
import SwiperPage from "./SwiperPage/SwiperPage"
import TrendBooks from "./TrendBooks/TrendBooks"
import "./Home.scss"

const Home = () => {
  return (
    <>
        <Main />
        <SwiperPage />
        <LastBooks />
        <TrendBooks />
        <Contact />
    </>
  )
}

export { Home }