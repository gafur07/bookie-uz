import { FC, useRef, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BkDonateSave, BkStar1 } from "@/assets/images";

const Faq: FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(-1);
  const faq = useRef<HTMLDivElement>(null);

  const handleClick = (key: number | null) => {
    setActiveItem((prevActiveItem: number | null) =>
      prevActiveItem === key ? null : key
    );
  };

  const items = [
    {
      label: "Audiokitaplardı qalay tıńlasam boladı?",
      children: (
        <p>
          <a className='text-blue-600' href="https://booky.uz">
            Booky.uz
          </a>{" "}
          saytı arqalı buyırtpa beriw ańsat.
          <br />
          <br /> Tómende bunı tolıq túsindirip beremiz.
          <br />
          <br />
          Kóbirek imkaniyatlarǵa iye bolıw ushın “Jeke kabinet” bóliminde
          dizimnen ótiń. Dizimnen ótiw Buyırtpa beriw haqqında maǵlıwmat alıwdan
          aldın, bir neshe kerekli ámellerdi orınlap alayıq. Saytımızda dizimnen
          ótiw ushın tómendegi izbe-izlikte orınlań:
          <br />
          <br />
          <strong>• “Dizimnen ótiw”</strong> bólimine kirip, atı familyańız hám
          telefon nomerińizdi kirgiziń. Soń parol kirgiziń. Bunnan keyin
          "Dizimnen ótiw" túymesin basıń.
          <br />
          <br /> • Arnawlı kod siziń nomerińizge SMS-xabar arqalı baradı. Onı
          kirgizgennen soń “Kiriw" túymesin basasız.
          <br />
          <br /> • “Ózgerislerdi saqlań” túymesin basqanıńızdan soń siz
          saytımızda dizimnen ótesiz. Qutlıqlaymız, siz endi keń imkaniyatqa iye
          qariydarlarımız qatarına qosıldıńız. Maǵlıwmatlardı ózińiz qálegen
          waqıtta “Jeke kabinet” arqalı jańalawıńız múmkin.
        </p>
      ),
    },
    {
      label: "Audiokitaplar janrlarǵa bólingen be?",
      children: (
        <p>
          Álbette! Audiokitaplar 5 úlken janrlarǵa bólingen. Bular tómendegishe:{" "}
          <br />
          <br />
          1. Jáhán ádebiyatı
          <br />
          <br />
          2. Ózbek ádebiyatı <br />
          <br />
          3. Qaraqalpaq ádebiyatı <br />
          <br />
          4. Qaraqalpaq folklorı <br />
          <br />
          5. Qısqa audiokitaplar
        </p>
      ),
    },
    {
      label:
        "Kitaplardıń audio variantınan tısqarı jáne qanday túrleri jaratılǵan?",
      children: (
        <p>
          Platformada kitaplardıń elektron formatları da jaylastırılǵan.
          Audiolar menen tikkeley elektron variantların paydalansańız da boladı.
        </p>
      ),
    },
    {
      label: "Audiolardı telefonıma saqlap alsam bola ma?",
      children: (
        <p>
          Audiokitaplardı saqlap alıwdıń imkaniyatı joq. Olardı tek platforma
          hám android variantlarında tıńlay alasız.
        </p>
      ),
    },
    {
      label: "Audiokitaplardı qalay satıp alamız?",
      children: (
        <p>
          Saytımızda ózińizge unaǵan kitaptı tańlap, "Satıp alıw" túymesin
          basasız. Soń tólemdi Payme, Click, Bank kartaları arqalı ámelge
          asırasız.
        </p>
      ),
    },
  ];

  return (
    <>
      <div
        className="flex flex-col justify-center items-center gap-y-[40px] z-10 p-[60px]"
        ref={faq}
      >
        <h4
          style={{ fontSize: "calc(22px + 14 * (100vw - 320px) / 1280)" }}
          className="font-semibold leading-[100%] text-center"
        >
          Kóp beriletuǵın sorawlar
        </h4>
        <div className="flex flex-col gap-y-[20px] w-[700px] max-[750px]:w-[90vw]">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#d7e7f8] rounded-[16px] py-[30px] pr-[54px] pl-[30px] shadow-lg max-[750px]:py-[20px] max-[750px]:pl-[30px] max-[750px]:pr-[34px] max-[600px]:py-[10px] max-[600px]:pl-[20px] max-[600px]:pr-[24px]"
              >
              <div
                onClick={() => handleClick(index)}
                style={{fontSize: 'calc(16px + 4 * (100vw - 320px) / 1280)'}}
                className={`flex select-none items-center justify-between w-full font-medium leading-[130%] cursor-pointer ${
                  activeItem === index ? undefined : ""
                }`}
              >
                {item.label}
                <span className='text-[22px] text-primary'>
                  {activeItem === index ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </span>
              </div>
              <div
              style={{ fontSize: `calc(12px + 4 * (100vw - 320px) / 1280)`}}
                className={`leading-[100%] mt-[30px] pt-[16px] border-t border-t-[#83a5c5] ${
                  activeItem === index ? 'block' : "hidden"
                }`}
              >
                {item.children}
              </div>
            </div>
          ))}
          <span style={{fontSize: `calc(12px + 2 * (100vw - 320px) / 1280)`}} className='my-[50px] mx-auto'>
            Qosımsha sorawlarıńız bolsa, +998 93 362 57 44 nomerine xabarlasqan
            halda juwap alasız.
          </span>
        </div>
      </div>
      <img className='absolute bottom-[390px] left-[250px] max-[720px]:hidden' src={BkDonateSave} alt="save" />
      <img className='absolute bottom-[500px] right-[200px] z-[-10] max-[720px]:hidden' src={BkStar1} alt="star" />
    </>
  );
};

export { Faq };
