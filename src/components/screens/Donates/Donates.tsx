import { useGetDonatesQuery } from "@/services";
import { Progress, Spin } from "antd";
import { FC, useEffect, useRef, useState } from "react";
import DonatesModal from "./DonatesModal/DonatesModal";
import { NavLink } from "react-router-dom";
import { BkNoPhoto } from "@/assets/images";
import { Container } from "@/components/shared";
import { DonatesList } from "@/components/shared/DonatesList/DonatesList";
import { MobileNavDonates } from "./MobileavDonates/MobileNavDonates";

const Donates: FC = () => {
	const [donateModal, setDonateModal] = useState(false);
	const { data: donates, isLoading } = useGetDonatesQuery();

	const onToggleModal = () => {
		setDonateModal(!donateModal);
	  };

	  const onToggleModalClose = () => {
		setDonateModal((prev) => !prev);
	  };

	const bookRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (bookRef.current) {
			bookRef.current.scrollIntoView();
		}
	}, [])

	return (
		<section ref={bookRef} className="w-full min-h-screen py-[40px]">
			<Container>
				<Spin spinning={isLoading}>
					<MobileNavDonates />
					<DonatesList onToggleModal={onToggleModal} donates={donates?.data}/>
					<DonatesModal
						donateModal={donateModal}
						onToggleModalClose={onToggleModalClose}
					/>
				</Spin>
			</Container>
		</section>
	);
};

export { Donates };
