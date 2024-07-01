import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card, ConfigProvider, message } from "antd";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IBookSlug } from "@/services/index.interface";
import {
	addCart,
	addFavorites,
	removeCart,
	removeFavorites,
} from "@/store/index.actions";
import {
	BkCartFilled,
	BkCartOutline,
	BkHeartFilled,
	BkHeartOutline,
	BkNoPhoto,
	BkPlay,
	BkView,
} from "@/assets/images";
import { formatPrice } from "@/utils";

interface BookCardProps {
	data: IBookSlug;
	pathname?: string;
	showAudio?: boolean;
	showPrice?: boolean;
	showButton?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ data }) => {
	const { token } = useAppSelector((store) => store.auth);
	const { favorites } = useAppSelector((store) => store.favorite);
	const { basket } = useAppSelector((store) => store.cart);

	const { pathname } = useLocation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	

	const { price, slug, title, image, quantity } = data;

	const isFavorite = favorites.some((item) => item.slug === slug);
	const isCart = basket.some((item) => item.slug === slug);

	const buttonFilter = pathname !== "/my_books" && pathname !== "/favorites";
	const audioFilter = pathname === "/my_books";
	const priceFilter = pathname === "/favorites";

	const onChangeFavorites = () => {
		if (!token) {
			message.info("Siz aldin dizimnen otiwinz kerek!");
			return;
		}
		if (isFavorite) {
			dispatch(removeFavorites(data));
		} else {
			dispatch(addFavorites(data));
		}
	};

	const onChangeCart = () => {
		if (!token) {
			message.info("Siz aldin dizimnen otiwinz kerek!");
			return;
		}
		if (isCart) {
			dispatch(removeCart(data));
		} else {
			dispatch(addCart(data));
		}
	};

	const onNavigateBook = () => {
		if (pathname !== "/my-books") {
			navigate(`/book/${slug}`);
		} else {
			navigate(`/audiobook/${slug}`);
		}
	};

	const clickBtnAudio = () => {
		if (token) {
			navigate(`/audiobook/${slug}`);
		} else {
			navigate(`/book/${slug}`);
		}
	};

	return (
		<ConfigProvider
			theme={{
				components: {
					Card: {
						padding: 0,
						paddingLG: 0,
					},
				},
			}}
		>
			<Card
				className="
					flex flex-col w-[305px] 
					cursor-pointer rounded-[16px] 
					overflow-hidden
					bg-white max-[820px]:w-[280px] 
					max-[600px]:w-[90vw] shadow-md 
					hover:duration-200 hover:ease-in-out 
					transform hover:scale-[1.01] hover:shadow-lg"
				onClick={onNavigateBook}
				cover={
					<img
						className="object-cover w-[305px] h-[335px] max-[820px]:w-[280px] max-[600px]:w-[90vw]"
						src={image[0] ? image[0].image_url : BkNoPhoto}
						alt="image"
					/>
				}
			>
				<div className="bg-white flex flex-col gap-y-[32px] p-[24px]">
					<div className="w-full flex justify-between items-start gap-[40px]">
						<div className="flex flex-col gap-x-[8px] whitespace-nowrap text-ellipsis overflow-hidden">
							<h3 className="text-[18px] text-[#202020] font-bold cursor-pointer">
								{title}
							</h3>
						</div>
						<button className="h-[20px] w-[20px]">
							<img
								className="w-8 h-8 duration-200 ease-in-out cursor-pointer transform hover:scale-110"
								onClick={(e) => {
									e.stopPropagation();
									onChangeFavorites();
								}}
								src={isFavorite ? BkHeartFilled : BkHeartOutline}
								alt="favorite"
							/>
						</button>
					</div>
					<div className="flex items-center justify-between gap-[30px]">
						{audioFilter && (
							<Link key={slug} to={`/audiobook/${slug}`}>
								<img
									className="w-[30px] fill-primaryOrange"
									src={BkPlay}
									alt="play icon"
								/>
							</Link>
						)}
						{priceFilter && (
							<h4 className="font-semibold leading-[130%] opacity-70 cursor-pointer">
								{formatPrice(Number(price))} som
							</h4>
						)}
						<div className="flex items-center gap-[6px]">
							<img src={BkView} alt="view" className="h-4 w-4" />
							<p className="font-semibold text-[#a1a1a1] text-xs">{quantity}</p>
						</div>
						{buttonFilter && (
							<button
								className="px-[24px] py-[8px] hover:opacity-80 font-bold cursor-pointer bg-primaryOrange fill-primaryOrange rounded-[16px] text-white leading-[130%] duration-200"
								onClick={(e) => {
									e.stopPropagation();
									clickBtnAudio();
								}}
							>
								Tıńlaw
							</button>
						)}
						<button className="h-[20px] w-[20px] ">
							<img
								className="w-8 h-8 duration-200 ease-in-out cursor-pointer transform hover:scale-110"
								onClick={(e) => {
									e.stopPropagation();
									onChangeCart();
								}}
								src={isCart ? BkCartFilled : BkCartOutline}
								alt="favorite"
							/>
						</button>
					</div>
				</div>
			</Card>
		</ConfigProvider>
	);
};

export { BookCard };
