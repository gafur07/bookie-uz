import { BkMainPage } from "@/assets/images";

const Main = () => {
  return (
    <>
      <section className="w-full px-[5%] pt-[80px] pb-[20px]">
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-[40px]">
            <h1
              style={{ fontSize: "calc(36px + 12 * (100vw - 320px) / 1280)" }}
              className="font-semibold text-[#202020] leading-[130%]"
            >
              «Booky» — qaraqalpaq tilindegi audiokitaplar platformasına xosh
              kelipsiz!
            </h1>
            <p
              style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
              className="text-[#202020] opacity-70 leading-[150%]"
            >
              Bul platformada qaraqalpaq tilinde basıp shıǵarılǵan jáhán, ózbek
              hám qaraqalpaq ádebiyatınıń dúrdana shıǵarmaları jáne qaraqalpaq
              awızeki dóretiwshiliginiń hasıl marjanlarınınıń audio variantların
              jaratamız. Jáhán, ózbek hám qaraqalpaq kórkem-ádebiy dóretpeleri,
              sonday-aq qaraqalpaq folklorınıń dúrdana shıǵarmalarınıń elektron
              variantların islep shıǵamız hám saytqa jaylastıramız.
            </p>
            <div className="main-buttons">
              <button className="bg-[#ff9e30] text-white rounded-[16px] py-[7px] px-[24px] flex justify-center items-center font-semibold">
                Baslaw
              </button>
            </div>
          </div>
          <img className="max-[1000px]:hidden" src={BkMainPage} alt="" />
        </div>
      </section>
    </>
  );
};

export default Main;
