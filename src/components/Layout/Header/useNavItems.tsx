import { BkExit } from "@/assets/images";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { clearBuyBook, clearCart, clearFavorite, signOut } from "@/store/index.actions";
import { Badge, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

export const useNavItems = () => {
	const { basket } = useAppSelector((store) => store.cart);
	const { token } = useAppSelector((store) => store.auth);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const logOut = () => {
		dispatch(signOut());
		dispatch(clearBuyBook())
		dispatch(clearCart())
		dispatch(clearFavorite())
		navigate("/", { replace: true });
	};

	const userItems = [
		{
			item: (
				<Link className="text-[#fff] text-[14px] font-[600]" to={"/donates"}>
					Donatlar
				</Link>
			),
		},
		{
			item: (
				<Link className="text-[#fff] text-[14px] font-[600]" to={"/favorites"}>
					Saylanǵanlar
				</Link>
			),
		},
		{
			item: (
				<Badge className="py-2" size="small" count={basket.length}>
					<Link
						className="text-[#fff] hover:text-white text-[14px] font-[600]"
						to={"/cart"}
					>
						Sebet
					</Link>
				</Badge>
			),
		},
		{
			item: (
				<Link className="text-[#fff] text-[14px] font-[600]" to={"/my-books"}>
					Kitaplarim
				</Link>
			),
		},
		{
			item: (
				<button
					onClick={logOut}
					className="flex items-center gap-[10px] text-[#fff] text-[14px] font-[600]"
				>
					Shigiw <img src={BkExit} alt="" />
				</button>
			),
		},
	];

	const guestItems = [
		{
			item: (
				<Button
				className="px-[24px] py-[10px] text-[14px] font-semibold duration-200 leading-[130%] text-primary hover:opacity-80"
				onClick={() => navigate("/login")}
			>
				Kiriw
			</Button>
			)
		},
		{
			item: (
				<Button
				type="primary"
				className="px-[24px] py-[10px] text-[14px] font-semibold cursor-pointer duration-200 leading-[130%] border border-white text-white hover:opacity-80"
				onClick={() => navigate("/register")}
			>
				Dizimnen ótiwz
			</Button>
			)
		}
	]

	return token ? userItems : guestItems
};
