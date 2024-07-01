import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { signOut } from "@/store/index.actions";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import {
	BkCart,
	BkDonation,
	BkExit,
	BkFavorites,
	BkHome,
	BkLibrary,
	BkMyBook,
} from "@/assets/images";
import { useGetCategoriesQuery } from "@/services";
import { Drawer, Menu, MenuProps } from "antd";

const authMenuItems: MenuProps["items"] = [
	{
		key: "/donates",
		icon: <img className="h-[22px]" src={BkDonation} alt="" />,
		label: "Donates",
	},
	{
		key: "/favorites",
		icon: <img className="h-[22px]" src={BkFavorites} alt="" />,
		label: "Saylandilar",
	},
	{
		key: "/cart",
		icon: <img className="h-[22px]" src={BkCart} alt="" />,
		label: "Sebet",
	},
	{
		key: "/my-books",
		icon: <img className="h-[22px]" src={BkMyBook} alt="" />,
		label: "Kitaplarim",
	},
	{
		key: "/logout",
		icon: <img className="h-[22px]" src={BkExit} alt="" />,
		label: "Shigiw",
	},
];

interface HamburgerProps {
	isOpen: boolean;
	toggleOpen: () => void;
}

const HeaderHamburger: FC<HamburgerProps> = ({ isOpen, toggleOpen }) => {
	const { token } = useAppSelector((store) => store.auth);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const dispatch = useAppDispatch();

	const logOut = () => {
		dispatch(signOut());
		navigate("/", { replace: true });
	};

	const { data: categories } = useGetCategoriesQuery();

	const categoriesItems: MenuProps["items"] = categories
		? categories.data.map((el) => ({
				key: `/category/${el.slug}`,
				icon: <img className="h-[22px]" src={BkLibrary} alt="library" />,
				label: el.name[0].toUpperCase() + el.name.substring(1),
		  }))
		: [];

	categoriesItems.unshift({
		key: "/",
		icon: <img className="h-[22px]" src={BkHome} alt="home" />,
		label: "Basbet",
	});

	const authItems: MenuProps["items"] = token
		? authMenuItems
		: [
				{
					key: "/login",
					icon: <BiLogIn size={22} />,
					label: "Kiriw",
				},
				{
					key: "/register",
					icon: <BsFillPersonPlusFill size={22} />,
					label: "Dizimnen ótiw",
				},
		  ];

	const onClickNavigate = (e: string) => {
		if (e === "/logout") {
			logOut();
			return;
		}
		if (isOpen) {
			toggleOpen();
		}
		navigate(e);
	};

	return (
		<Drawer
			open={isOpen}
			placement="right"
			width={"100%"}
			onClose={toggleOpen}
			closable={false}
			styles={{
				body: {
					backgroundColor: "#2d71ae",
				},
			}}
		>
			<Menu
				items={[...categoriesItems, ...authItems]}
				theme="dark"
				selectedKeys={[pathname]}
				className="bg-transparent"
				onSelect={({ key }) => onClickNavigate(key)}
			/>
		</Drawer>
	);
};

export { HeaderHamburger };
