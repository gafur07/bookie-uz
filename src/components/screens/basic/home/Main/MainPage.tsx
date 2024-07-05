import { BkMainPage } from "@/assets/images";
import { Container } from "@/components/shared";
import { FC } from "react";

interface IMainProps {
	scrollToDiv: () => void;
}

const Main: FC<IMainProps> = ({ scrollToDiv }) => {
	return (
		<section className="pt-[80px] pb-[20px]">
			<Container>
				<div className="flex items-center justify-center">
					<div className="flex flex-col gap-[40px]">
						<h1
							className="font-semibold text-[#202020] leading-[130%] text-5xl max-[820px]:text-[34px] max-[600px]:text-[28px]"
						>
							«Booky» — qaraqalpaq tilindegi audiokitaplar platformasına xosh
							kelipsiz!
						</h1>
						<p
							className="text-[#202020] opacity-70 leading-[150%] max-[600px]:text-[14px]"
						>
							Bul platformada qaraqalpaq tilinde basıp shıǵarılǵan jáhán, ózbek
							hám qaraqalpaq ádebiyatınıń dúrdana shıǵarmaları jáne qaraqalpaq
							awızeki dóretiwshiliginiń hasıl marjanlarınınıń audio variantların
							jaratamız. Jáhán, ózbek hám qaraqalpaq kórkem-ádebiy dóretpeleri,
							sonday-aq qaraqalpaq folklorınıń dúrdana shıǵarmalarınıń elektron
							variantların islep shıǵamız hám saytqa jaylastıramız.
						</p>
						<div>
							<button
								onClick={scrollToDiv}
								className="bg-[#ff9e30] text-white rounded-[16px] py-[7px] px-[24px] flex justify-center items-center font-semibold"
							>
								Baslaw
							</button>
						</div>
					</div>
					<img className="max-[1000px]:hidden" src={BkMainPage} alt="" />
				</div>
			</Container>
		</section>
	);
};

export default Main;
