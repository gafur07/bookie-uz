import mainPageImg from "../../../images/mainPage.jpg"
import "./Main.scss"

const Main = () => {
  return (
    <>
        <section className="main">
            <div className="container">
                <div className="main_cont">
                    <div className="main_content">
                        <h1 className="main-text">«Booky» — qaraqalpaq tilindegi audiokitaplar platformasına xosh kelipsiz!</h1>
                        <p>Bul platformada qaraqalpaq tilinde basıp shıǵarılǵan jáhán, ózbek hám qaraqalpaq ádebiyatınıń dúrdana shıǵarmaları jáne qaraqalpaq awızeki dóretiwshiliginiń hasıl marjanlarınınıń audio variantların jaratamız. Jáhán, ózbek hám qaraqalpaq kórkem-ádebiy dóretpeleri, sonday-aq qaraqalpaq folklorınıń dúrdana shıǵarmalarınıń elektron variantların islep shıǵamız hám saytqa jaylastıramız.</p>

                        <div className="main-buttons">
                            <button className="bg-[#ff9e30] text-white rounded-[16px] py-[7px] px-[24px] flex justify-center items-center font-semibold">Baslaw</button>
                        </div>
                    </div>
                    <img src={mainPageImg} alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Main