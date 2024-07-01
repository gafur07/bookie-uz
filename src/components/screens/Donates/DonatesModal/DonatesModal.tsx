import { Checkbox, Form, Input, InputNumber, Modal, Radio, Space } from "antd";
import React from "react";
import { FormProps } from 'antd/lib';
import { paymentItems } from "@/utils";
import "./donatesModal.scss";

interface IDonateModalProps {
	donateModal: boolean;
	onToggleModalClose: () => void;
}

const DonatesModal: React.FC<IDonateModalProps> = ({
	donateModal,
	onToggleModalClose,
}) => {
	const [anonim, setAnonim] = React.useState(false);
	const [form] = Form.useForm();

	const onFinish: FormProps["onFinish"] = (values) => {
		console.log(values)
	}

	React.useEffect(() => {
		form.resetFields();
	}, [donateModal]);


	const onCloseModal = () => {
		if (donateModal) {
			onToggleModalClose();
		}
	  };

	return (
		<Modal
			open={donateModal}
			onCancel={onCloseModal}
			className="donModal"
			width={460}
			centered
		>
			<Form 
			form={form} 
			className="w-full mt-8"
			onFinish={onFinish}
			>
				<Space size={10} className="flex sp flex-col items-start w-full">
					<Form.Item
						name={"name"}
						rules={[
							{ required: !anonim, message: "Ati familiyanizdi kiritin'" },
						]}
					>
						<Input
							disabled={anonim}
							className="w-full py-[10px] text-[#585858] disabled:opacity-70 rounded-[16px] font-semibold text-[16px] border-[#a1a1a1] placeholder:text-[#585858]"
							placeholder="Ati familiyaniz"
						/>
					</Form.Item>
					<Checkbox
						onClick={() => setAnonim(!anonim)}
						className="foo text-[#585858] text-[16px] font-semibold"
					>
						Anonim
					</Checkbox>
					<Form.Item
						name={"amount"}
						rules={[{ required: true, message: "Summani kiritin'" }]}
					>
						<InputNumber
							className="w-full inpNumber rounded-[16px] border-[#a1a1a1]"
							placeholder="Summa"
						/>
					</Form.Item>
					<Form.Item
						name={"payment_id"}
						rules={[{ required: true, message: "Tolew usilini saylan'" }]}
					>
						<Radio.Group
							optionType="button"
							className="flex items-center justify-center gap-[12px] my-4"
						>
							<Space>
								{paymentItems.map(({ value, icon, disabled }) => (
									<Radio
										required
										value={value}
										className={`h-[35px] w-[120px] max-sm:w-full px-[16px] rounded-[100px] flex items-center justify-center`}
										disabled={disabled}
									>
										<img src={icon} alt="image" />
									</Radio>
								))}
							</Space>
						</Radio.Group>
					</Form.Item>

					<button
						className="flex items-center justify-center w-full gap-2 font-semibold rounded-[16px] bg-primary border-primary px-[24px] py-[12px] text-white hover:opacity-80 duration-200"
					>
						Donat qiliw
						<i className="bx bx-chevron-right text-[18px]"></i>
					</button>
				</Space>
			</Form>
		</Modal>
	);
};

export default DonatesModal;
