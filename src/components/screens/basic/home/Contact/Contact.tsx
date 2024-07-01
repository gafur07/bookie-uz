import { Form, Input, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { usePostSupportMutation } from "@/services/support/support.api";
import { BkContact } from "@/assets/images";
import { Container } from "@/components/shared";

const Contact = () => {
	const [rating, setRating] = useState(5);
	const [userName, setUserName] = useState("");
	const [desc, setDesc] = useState("");
	const { mutate: postSupport } = usePostSupportMutation();

	const onFinish = () => {
		postSupport({
			name: userName,
			description: desc,
			rating: rating,
		});
		setUserName("");
		setDesc("");
	};
	return (
		<section className="py-[80px]">
			<Container>
				<div className="flex items-center justify-between gap-[50px]">
					<div className="max-[1024px]:mx-auto">
						<h2 className="mb-[30px] text-[#202020] text-[32px] font-bold">
							Pikir bildiriw
						</h2>
						<Form 
						onFinish={onFinish}
						>
							<Rate
								className="mb-[30px]"
								value={rating}
								onChange={(e) => setRating(e)}
								defaultValue={rating}
							/>
							<Input
								required={true}
								placeholder="Atıńız"
								value={userName}
								onChange={(e) => setUserName(e.target.value)}
								className="px-[24px] py-[10px] rounded-[16px] mb-[30px]"
							/>
							<TextArea
								name="description"
								className="px-[24px] py-[10px] rounded-[16px] mb-[30px]"
								placeholder="Pikiriniz"
								required={true}
								value={desc}
								onChange={(e) => setDesc(e.target.value)}
								rows={7}
							/>
							<button
								type="submit"
								className="rounded-[16px] text-white bg-[#2d71ae] px-[24px] py-[10px] font-semibold"
							>
								Jollaw
							</button>
						</Form>
					</div>
					<img
						className="max-[1024px]:hidden"
						src={BkContact}
						alt="contact-img"
					/>
				</div>
			</Container>
		</section>
	);
};

export default Contact;
