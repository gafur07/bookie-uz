import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import {
	BkClick,
	BkGoogle,
	BkInstagram,
	BkPayme,
	BkTelegram,
	BkUzum,
	BkYoutube,
} from "@/assets/images";

import { GOOGLE_URL, INSTAGRAM_URL, TELEGRAM_URL, YOUTUBE_URL } from "@/config";
import { Container } from "@/components/shared";

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#2d71ae] pt-[40px] px-[80px] pb-[30px]">
			<Container>
				<div className="flex flex-col gap-y-[30px] w-full text-white max-[820px]:py-[40px] max-[820px]:px-[20px]">
					<div className="flex items-center justify-center gap-[80px] max-[1350px]:flex-wrap">
						<div className="flex flex-col gap-[20px]">
							<Link
								className="text-[28px] text-[#fff] font-[700] max-[820px]:text-[20px]"
								to="/"
							>
								Booky.uz
							</Link>
							<a href={GOOGLE_URL} target="_blank" className="cursor-pointer">
								<img src={BkGoogle} alt="google play-market" />
							</a>
						</div>
						<div className="flex flex-col gap-y-[12px]">
							<span>Biz benen baylanısıw</span>
							<a
								className="flex items-center gap-[12px] text-white leading-[150%] font-medium"
								style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
								href="tel:+998933625744"
							>
								<FaPhone />
								+998 93 362 57 44
							</a>
							<a
								className="flex items-center gap-[12px] text-white leading-[130%]"
								style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
								href="mailto:bookyaudiokitaplar@gmail.com"
							>
								<MdMailOutline />
								bookyaudiokitaplar@gmail.com
							</a>
						</div>
						<div className="flex flex-col gap-y-[12px]">
							<h2
								className="leading-[130%] font-medium"
								style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
							>
								Sociallıq tarmaqlar
							</h2>
							<div className="flex items-center gap-[14px] cursor-pointer">
								<a href={INSTAGRAM_URL} target="_blank">
									<img src={BkInstagram} alt="" />
								</a>
								<a href={TELEGRAM_URL} target="_blank">
									<img src={BkTelegram} alt="telegram" />
								</a>
								<a href={YOUTUBE_URL} target="_blank">
									<img src={BkYoutube} alt="youtube" />
								</a>
							</div>
						</div>
						<div className="flex flex-col gap-y-[12px]">
							<Link
								style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
								className="font-medium text-white leading-[130%]"
								to="/donates"
							>
								Joybardı qollap-quwatlaw
							</Link>
							<Link
								style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
								className="font-medium text-white leading-[130%]"
								to="/faq"
							>
								Kóp beriletuǵın sorawlar
							</Link>
							<div
								className="leading-[130%] text-xs"
							>
								© 2024 Booky | Karsoft
							</div>
						</div>
						<div className="flex flex-col gap-y-[15px]">
							<span>Tólem túrleri</span>
							<img
								className="bg-[#e5e5e5] py-[12px] px-[16px] rounded-[16px]"
								src={BkUzum}
								alt="image"
							/>
							<img
								className="bg-[#e5e5e5] py-[12px] px-[16px] rounded-[16px]"
								src={BkClick}
								alt="image"
							/>
							<img
								className="bg-[#e5e5e5] py-[12px] px-[16px] rounded-[16px]"
								src={BkPayme}
								alt="image"
							/>
						</div>
					</div>
					<div className="h-[1px] bg-white opacity-50" />
					<p className="text-center text-[14px]">
						© 2023-2024 "
						<a className="text-yellow-500" href="https://booky.uz">
							Booky.uz
						</a>
						" qaraqalpaq tilindegi audiokitaplar platforması. Barlıq huqıqlar
						qorǵalǵan, nusqa alıp kóshiriw qadaǵan etiledi.
					</p>
				</div>
			</Container>
		</footer>
	);
};
export { Footer };
