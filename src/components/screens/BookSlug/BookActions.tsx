import { axiosClassic } from "@/api";
import { BkHeartFilled, BkHeartOutline } from "@/assets/images";
import { UiButtonCart, UiButtonAction } from "@/components/ui";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IBookSlug } from "@/services/index.interface";
import {
	addBuyBook,
	addCart,
	addFavorites,
	clearBuyBook,
	removeCart,
	removeFavorites,
} from "@/store/index.actions";
import { message } from "antd";
import { FC } from "react";
import { FaCreditCard, FaHeadphones } from "react-icons/fa6";
import { IoCart, IoCartOutline, IoShareSocialSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

interface IActionsBook {
	data: IBookSlug;
}

const BookActions: FC<IActionsBook> = ({ data }) => {
	const { token } = useAppSelector((store) => store.auth);
	const dispatch = useAppDispatch();
	const { favorites } = useAppSelector((store) => store.favorite);
	const { basket } = useAppSelector((store) => store.cart);
	const isFav = favorites.some((item) => item.slug === data.slug);
	const isCart = basket.some((item) => item.slug === data.slug);
	const navigate = useNavigate();
	const { slug } = useParams();
	const handleClickListen = () => {
		if (token) {
			navigate(`/audiobook/${slug}`);
		} else {
			navigate("/login", { replace: true });
		}
	};

	function changeCart(data: IBookSlug) {
		dispatch(addCart(data));
	}
	function changeRemoveCart(data: IBookSlug) {
		dispatch(removeCart(data));
	}

	function changeFavorite(data: IBookSlug) {
		dispatch(addFavorites(data));
	}

	function changeFavoriteRemove(data: IBookSlug) {
		dispatch(removeFavorites(data));
	}

	const buyBook = () => {
		if (token) {
			dispatch(clearBuyBook());
			data && dispatch(addBuyBook(data));
			navigate("/payment");
		} else {
			navigate("/login", { replace: true });
			message.info(
				"Kitap satıp alıw ushın, dáslep, akkauntıńızǵa kiriwińiz kerek boladı"
			);
		}
	};

	const handleShare = () => {
		navigator.share({
			title: `${data?.title}`,
			text: `${data?.description}`,
			url: `${axiosClassic}/book/${data?.slug}`,
		});
	};

	return (
		<div className="flex items-center flex-wrap gap-[16px]">
			{token ? (
				<>
					<UiButtonAction
						onClick={handleClickListen}
						size="large"
						className="flex items-center gap-2 font-semibold leading-[130%] duration-200 hover:opacity-80"
						icon={<FaHeadphones size={18}/>}
					>
						Tıńlap kóriw
					</UiButtonAction>
					<UiButtonAction
						onClick={buyBook}
						size="large"
						icon={<FaCreditCard size={18} />}
						className="flex items-center gap-2 font-semibold leading-[130%] duration-200 hover:opacity-80"
					>
						Satip aliw
					</UiButtonAction>
					{!isCart ? (
						<UiButtonCart
							onClick={() => changeCart(data)}
							size="large"
							icon={<IoCartOutline size={18} />}
							className="flex items-center gap-2 font-semibold leading-[130%] duration-200 hover:opacity-80"
						>
							Sebetke saliw
						</UiButtonCart>
					) : (
						<UiButtonCart
							onClick={() => changeRemoveCart(data)}
							size="large"
							icon={<IoCart size={18} />}
							className="flex items-center gap-2 font-semibold leading-[130%] duration-200 opacity-80 hover:text-white"
						>
							Sebetten oshiriw
						</UiButtonCart>
					)}

					<button className="text-primaryOrange hover:opacity-80 duration-200">
						{isFav ? (
							<img
								className="duration-200 ease-in-out w-[34px] cursor-pointer hover:scale-110"
								src={BkHeartFilled}
								onClick={() => changeFavoriteRemove(data)}
								alt="favorite"
							/>
						) : (
							<img
								className="duration-200 ease-in-out w-[34px] cursor-pointer hover:scale-110"
								src={BkHeartOutline}
								onClick={() => changeFavorite(data)}
								alt="favorite"
							/>
						)}
					</button>
					<UiButtonAction
						onClick={handleShare}
						size="large"
						icon={<IoShareSocialSharp size="18px" />}
						className="flex items-center gap-2 font-semibold leading-[130%] duration-200 hover:opacity-80"
					>
						Úlesiw
					</UiButtonAction>
				</>
			) : (
				<>
					<UiButtonAction
						onClick={buyBook}
						size="large"
						icon={<FaCreditCard size="18px" />}
						className="flex items-center gap-2 font-semibold leading-[130%] duration-200 hover:opacity-80 hover:text-white"
					>
						Satip aliw
					</UiButtonAction>
					<button className="flex items-center text-primaryOrange duration-200 hover:opacity-80 font-light leading-[130%]">
						<i className="bx bx-heart text-[34px]"></i>
					</button>
					<UiButtonAction
						onClick={handleShare}
						size="large"
						icon={<IoShareSocialSharp size="18px" />}
						className="flex items-center gap-2 font-semibold leading-[130%] duration-200 hover:opacity-80"
					>
						Úlesiw
					</UiButtonAction>
				</>
			)}
		</div>
	);
};

export { BookActions };
