import { Spin } from "antd";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import DonatesShow from "./DonatesShow/DonatesShow";
import { useGetDonatesQuery } from "@/services";
import { Container, DonatesList } from "@/components/shared";
import { MobileNavDonates } from "./MobileNavDonates/MobileNavDonates";

const Processing: FC = () => {
	const { data: donates, isLoading } = useGetDonatesQuery();
	const navigate = useNavigate();
	const [showDonates, setShowDonates] = useState(false);
	return (
		<section className="w-full min-h-screen py-[40px]">
			<Container>
				<Spin spinning={isLoading}>
					<MobileNavDonates />
					<div className="flex flex-col gap-[24px]">
						{donates && donates.data.length ? donates.data.map((donate, index) => (
							<DonatesList
							key={index}
								onClick={() => setShowDonates(true)}
								donate={donate}
								type="process"
							/>
						)) : (
							<div className="flex flex-col items-center min-h-[50vh] justify-center gap-4">
								<h1 className="text-2xl font-semibold">Házirshe bos</h1>
								<button
									onClick={() => navigate("/")}
									className="bg-primary rounded-[16px] hover:opacity-80 text-white px-[24px] py-[6px]"
								>
									Bas betge qaytiw
								</button>
							</div>
						)}
					</div>
					<DonatesShow
						showDonates={showDonates}
						setShowDonates={setShowDonates}
					/>
				</Spin>
			</Container>
		</section>
	);
};

export { Processing };
