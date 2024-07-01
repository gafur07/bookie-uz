import { FC, useEffect, useRef, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BkDonateSave, BkStar1 } from "@/assets/images";
import { Container } from "@/components/shared";
import { faqItems } from "@/utils";

const Faq: FC = () => {
	const [activeItem, setActiveItem] = useState<number | null>(-1);
	const faq = useRef<HTMLDivElement>(null);

	const handleClick = (key: number | null) => {
		setActiveItem((prevActiveItem: number | null) =>
			prevActiveItem === key ? null : key
		);
	};

	const faqRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (faqRef.current) {
			faqRef.current.scrollIntoView();
		}
	}, [])

	return (
		<section ref={faqRef} className="min-h-screen py-[60px]">
			<Container>
				<div
					className="flex flex-col justify-center items-center gap-y-[40px]"
					ref={faq}
				>
					<h4 className="font-semibold leading-[100%] text-center text-4xl">
						Kóp beriletuǵın sorawlar
					</h4>
					<div className="flex flex-col gap-y-[20px] w-[700px] max-[750px]:w-[90vw]">
						{faqItems.map((item, index) => (
							<div
								key={index}
								className="flex flex-col bg-[#d7e7f8] rounded-[16px] py-[30px] pr-[54px] pl-[30px] shadow-lg max-[750px]:py-[20px] max-[750px]:pl-[30px] max-[750px]:pr-[34px] max-[600px]:py-[10px] max-[600px]:pl-[20px] max-[600px]:pr-[24px]"
							>
								<div
									onClick={() => handleClick(index)}
									className={`flex select-none items-center text-lg justify-between w-full font-medium leading-[130%] cursor-pointer ${
										activeItem === index ? undefined : ""
									}`}
								>
									{item.label}
									<span className="text-[22px] text-primary">
										{activeItem === index ? (
											<AiOutlineMinus />
										) : (
											<AiOutlinePlus />
										)}
									</span>
								</div>
								<div
									className={`leading-[100%] text-sm mt-[30px] pt-[16px] border-t border-t-[#83a5c5] ${
										activeItem === index ? "block" : "hidden"
									}`}
								>
									{item.children}
								</div>
							</div>
						))}
						<span className="my-[50px] mx-auto text-sm">
							Qosımsha sorawlarıńız bolsa, +998 93 362 57 44 nomerine
							xabarlasqan halda juwap alasız.
						</span>
					</div>
				</div>
				<img
					className="absolute bottom-[390px] left-[250px] max-[720px]:hidden"
					src={BkDonateSave}
					alt="save"
				/>
				<img
					className="absolute bottom-[500px] right-[200px] z-[-10] max-[720px]:hidden"
					src={BkStar1}
					alt="star"
				/>
			</Container>
		</section>
	);
};

export { Faq };
