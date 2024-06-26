import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IBookSlug } from "@/services/index.interface";
import {
	addCart,
	addFavorites,
	removeCart,
	removeFavorites,
} from "@/store/index.actions";
import {
	BkHeartFilled,
	BkHeartOutline,
	BkNoPhoto,
	BkPlay,
} from "@/assets/images";
import { IoCart, IoCartOutline } from "react-icons/io5";
import { BiShowAlt } from "react-icons/bi";

const BookCard: React.FC<IBookSlug> = (props) => {
	const { categoryId } = useParams();
	const { token } = useAppSelector((store) => store.auth);
	const { favorites } = useAppSelector((store) => store.favorite);
	const { basket } = useAppSelector((store) => store.cart);
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { price, slug, title, author, image, quantity } = props;
	const isFav = favorites.some((item) => item.slug === slug);
	const isCart = basket.some((item) => item.slug === slug);
	const buttonFilter =
		!categoryId && pathname !== "/my_books" && pathname !== "/favorites";
	const audioFilter = pathname === "/my_books";
	const priceFilter = categoryId || pathname === "/favorites";

	const changeFavorites = () => {
		if (token) {
			dispatch(addFavorites(props));
		} else {
			message.info("Siz aldin dizimnen otiwinz kerek!");
		}
	};
	const changeRemoveFavorites = () => {
		dispatch(removeFavorites(props));
	};

	const clickBook = () => {
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

	const changeCart = () => {
		if (token) {
			dispatch(addCart(props));
		} else {
			message.info("Siz aldin dizimnen otiwinz kerek!");
		}
	};
	const changeRemoveCart = () => {
		dispatch(removeCart(props));
	};

	return (
		<div className="flex flex-col w-[305px] cursor-pointer rounded-[16px] bg-white max-[820px]:w-[280px] max-[600px]:w-[90vw] shadow-md hover:duration-200 hover:ease-in-out transform hover:scale-[1.01] hover:shadow-lg">
			<div
				onClick={clickBook}
				className="w-full h-full rounded-t-[16px] shadow-xl"
			>
				<img
					className="object-cover w-[305px] h-[335px] rounded-t-[16px] max-[820px]:w-[280px] max-[600px]:w-[90vw]"
					src={image[0] ? image[0].image_url : BkNoPhoto}
					alt="image"
				/>
			</div>
			<div className="bg-white flex flex-col gap-y-[32px] p-[24px] rounded-b-[16px]">
				<div className="w-full flex justify-between items-start pr-[20px] gap-[40px]">
					<div
						onClick={clickBook}
						className="flex flex-col gap-x-[8px] whitespace-nowrap text-ellipsis overflow-hidden"
					>
						<h3 className="text-[18px] text-[#202020] font-bold cursor-pointer">
							{title}
						</h3>
						<p className="inline cursor-pointer">{author && author[0].name}</p>
					</div>
					<div className="relative h-[20px] w-[20px]">
						{isFav ? (
							<img
								className="duration-200 ease-in-out z-10 absolute left-[15px] cursor-pointer transform hover:scale-110"
								onClick={changeRemoveFavorites}
								src={BkHeartFilled}
								alt="favorite"
							/>
						) : (
							<img
								className="duration-200 ease-in-out z-10 absolute left-[15px] cursor-pointer transform hover:scale-110"
								onClick={changeFavorites}
								src={BkHeartOutline}
								alt="favorite"
							/>
						)}
					</div>
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
						<h4
							className="font-semibold leading-[130%] opacity-70 cursor-pointer"
						>
							{price} som
						</h4>
					)}
					<div className="flex items-center gap-[6px]">
						<BiShowAlt color="#a1a1a1" className="font-bold"/>
						<p
							className="font-semibold text-[#a1a1a1] text-xs"
						>
							{quantity}
						</p>
					</div>
					{buttonFilter && (
						<button
							className="px-[24px] py-[8px] hover:opacity-80 font-bold cursor-pointer bg-primaryOrange fill-primaryOrange rounded-[16px] text-white leading-[130%] duration-200"
							onClick={clickBtnAudio}
						>
							Tıńlaw
						</button>
					)}
					<button className="text-[24px] text-primaryOrange fill-primaryOrange bg-transparent">
						{isCart ? (
							<IoCart onClick={changeRemoveCart} />
						) : (
							<IoCartOutline onClick={changeCart}/>
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export { BookCard };
