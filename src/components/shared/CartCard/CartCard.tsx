import { BkNoPhoto } from "@/assets/images";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IBookSlug } from "@/services/index.interface";
import { addBuyBook, removeBuyBook, removeCart } from "@/store/index.actions";
import { formatPrice } from '@/utils';
import { Checkbox, ConfigProvider } from 'antd';
import { FC } from "react";
import { HiTrash } from "react-icons/hi";

interface CartCardProps {
	data: IBookSlug;
}

const CartCard: FC<CartCardProps> = ({ data}) => {
	const dispatch = useAppDispatch();
	const {bookBuy} = useAppSelector(store => store.buyBook)
	const isBuyBook = bookBuy.some((el) => el.id === data.id)
	const { image, title, price } = data;

	const changeRemoveCard = () => {
		dispatch(removeCart(data));
	};

	const handleChecked = () => {
		if(isBuyBook) {
			dispatch(removeBuyBook(data))
		} else {
			dispatch(addBuyBook(data))
		}
	}

	return (
		<article className="flex items-center gap-[30px] w-full">
			<div className="flex items-center justify-between gap-6 w-full">
				<span className="flex items-center gap-[30px]">
					<img
						className="rounded-[16px] w-[102px] h-[102px] object-cover"
						src={image[0] ? image[0]?.image_url : BkNoPhoto}
						alt="book image"
					/>
					<h2 className="font-medium text-base leading-[150%] pr-[20px]">
						{title}
					</h2>
				</span>
				<span className="flex flex-col gap-y-[30px]">
					<p className="text-[#202020bf] font-semibold leading-[130%] whitespace-nowrap">
						{formatPrice(Number(price))} som
					</p>
					<button
						onClick={changeRemoveCard}
						className="flex items-center justify-end gap-[6px] text-[10px] text-[#8d8e8f] cursor-pointer font-[400] leading-[100%]"
					>
						<HiTrash />
						Oshiriw
					</button>
				</span>
			</div>
			<ConfigProvider
				theme={{
					components: {
						Checkbox: {
							colorBorder: "#2d71ae",
							lineWidth: 3,
							controlInteractiveSize: 24,
							fontSizeIcon: 16,
						},
					},
				}}
			>
				<Checkbox
					className="bg-transparent"
					checked={isBuyBook}
					onChange={handleChecked}
				/>
			</ConfigProvider>
		</article>
	);   
};

export { CartCard };
