import { BkNoPhoto } from "@/assets/images";
import { IDonateData } from "@/services/index.interface";
import { formatPrice } from "@/utils";
import { Button, ConfigProvider, Flex, Progress, Typography } from "antd";
import { FC, useState } from "react";

const { Paragraph } = Typography;

interface DonatesListProps {
	donate: IDonateData;
	onClick: () => void;
	type: "donate" | "process";
}

const DonatesList: FC<DonatesListProps> = ({ donate, onClick, type }) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="flex items-start gap-5 justify-between border border-primary rounded-[16px] p-[15px] max-[768px]:flex-col">
			<div className="flex w-full gap-[50px] max-[768px]:flex-col max-[768px]:gap-[24px] max-[768px]:mb-[24px]">
				{donate.book.image[0] ? (
					<img
						className="object-cover h-[186px] w-[186px] rounded-[16px] 
                  max-[768px]:h-full
                  max-[768px]:w-full
									"
						src={donate.book.image[0].image_url}
						alt=""
					/>
				) : (
					<img
						className="object-cover h-[136px] w-[136px] rounded-[16px] 
                    max-[768px]:h-[300px] 
                    max-[768px]:w-full"
						src={BkNoPhoto}
						alt=""
					/>
				)}
				<div className="flex flex-col justify-between  w-full">
					<span>
						<h1
							style={{
								fontSize: "calc(16px + 4 * (100vw - 320px) / 1280)",
							}}
							className="font-semibold leading-[130%] whitespace-nowrap"
						>
							{donate.book.title}
						</h1>
						<Paragraph
							ellipsis={
								!expanded
									? {
											rows: 2,
											expandable: false,
									  }
									: false
							}
						>
							{donate.book.description}
						</Paragraph>
						<Flex justify="end">
							<Button
								onClick={() => setExpanded(!expanded)}
								type="link"
								size="small"
							>
								{expanded ? "Jabiw" : "Ashiw"}
							</Button>
						</Flex>
					</span>
					<h4 className="text-[18px] font-semibold opacity-70 flex items-end gap-[5px]">
						{`${donate.deadline} `}
						{type === "donate" && (
							<p className="text-[14px]">- Isleb shigiwga ketetugin waqit</p>
						)}
					</h4>
				</div>
			</div>
			<div className="flex flex-col justify-between my-auto gap-[24px] w-[421px] max-[768px]:w-full max-[450px]:w-full">
				<div className="relative">
					<p
						className="leading-[130%] whitespace-nowrap text-xl
                    font-semibold text-[#555] absolute top-[45%] left-[45%] 
                    z-50 translate-x-[-50%] translate-y-[-50%]"
					>
						{type === "donate"
							? `${formatPrice(Number(donate.price))} UZS`
							: "Progress"}
					</p>
					<ConfigProvider
						theme={{
							components: {
								Progress: {
									lineBorderRadius: 16,
									fontSize: 20,
								},
							},
						}}
					>
						<Progress
							strokeLinecap="round"
							percent={donate.accumulated ? Math.round(
								(Number(donate.accumulated.money) * 100) / Number(donate.price)
							) : 0}
							strokeWidth={58}
							strokeColor={"#ff9e30"}
						/>
					</ConfigProvider>
				</div>
				<button
					onClick={onClick}
					className="justify-center h-[58px] font-semibold rounded-[16px] bg-primary px-[24px] py-[12px] text-white flex items-center gap-[10px] hover:opacity-80 duration-200"
				>
					{type === "donate" ? "Donat qiliw" : "Donaterlardi koriw"}
				</button>
			</div>
		</div>
	);
};

export { DonatesList };
