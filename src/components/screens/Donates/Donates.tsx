import { useGetDonatesQuery } from "@/services";
import { Spin } from "antd";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import DonatesModal from "./DonatesModal/DonatesModal";
import { Container, DonatesList } from "@/components/shared";
import { MobileNavDonates } from "./MobileNavDonates/MobileNavDonates";

const Donates: FC = () => {
	const [donateModal, setDonateModal] = useState(false);
	const navigate = useNavigate();
	const { data: donates, isLoading } = useGetDonatesQuery();

	const [selectDonate, setSelectDonate] = useState<number | null>(null);

	const onSelectDonate = (id: number | null) => {
		setSelectDonate(id);
	};

	const onToggleModal = () => {
		setDonateModal(!donateModal);
	};

	const onToggleModalClose = () => {
		setDonateModal((prev) => !prev);
	};

	return (
		<section className="w-full min-h-screen py-[40px]">
			<Container>
				<Spin spinning={isLoading}>
					<MobileNavDonates />
					<div className="flex flex-col gap-[24px]">
						{donates && donates.data.length ? donates.data.map((donate, index) => (
							<DonatesList
							key={index}
								onClick={() => {
									onToggleModal();
									onSelectDonate(donate.id);
								}}
								donate={donate}
								type="donate"
							/>
						)) : (
							<div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
								<h1 className="text-2xl font-semibold">Hazirshe bos</h1>
								<button
									onClick={() => navigate("/")}
									className="bg-primary rounded-[16px] hover:opacity-80 text-white px-[24px] py-[6px]"
								>
									Bas betge qaytiw
								</button>
							</div>
						)}
					</div>
					<DonatesModal
						selectDonate={selectDonate}
						onSelectDonate={onSelectDonate}
						donateModal={donateModal}
						onToggleModalClose={onToggleModalClose}
					/>
				</Spin>
			</Container>
		</section>
	);
};

export { Donates };
