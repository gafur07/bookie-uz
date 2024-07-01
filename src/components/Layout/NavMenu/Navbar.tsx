import { Menu, Skeleton, MenuProps, ConfigProvider, Flex } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "@/components/shared";
import { Header } from "antd/es/layout/layout";
import { NavSearchMenu } from "./NavSearchMenu";
import { useGetCategoriesQuery } from "@/services";
import { IoIosArrowDown } from "react-icons/io";

const donatesItems: MenuProps["items"] = [
	{
		label: "Aqsha jiynalmagan kitaplar",
		key: "/donates",
	},
	{
		label: "Processtegi kitaplar",
		key: "/donates-process",
	},
];

const loadingItems: MenuProps["items"] = [...Array(5)].map((_, index) => ({
	key: index,
	label: (
		<div style={{ height: "24px" }}>
			<Skeleton.Input
				style={{ height: "24px !important" }}
				size="small"
				active
			/>
		</div>
	),
}));

const Navbar = () => {
	const navigate = useNavigate();
	const { data: categories, isLoading } = useGetCategoriesQuery();

	const { pathname } = useLocation();

	const items: MenuProps["items"] = pathname.includes(
		"donates" || "donates-process"
	)
		? donatesItems
		: categories
		? categories.data.map((item) => ({
				key: `/category/${item.slug}`,
				label: item.name,
				style: {
					textTransform: "capitalize"
				}
		  }))
		: loadingItems;

	return (
		<section className="bg-[#d7e7f8] max-[820px]:hidden">
			<Container>
				<nav>
					<Header className="flex items-center justify-between flw w-full bg-transparent">
						<ConfigProvider
							theme={{
								components: {
									Menu: {
										activeBarHeight: 6,
									},
								},
							}}
						>
							<Menu
								theme="light"
								className="bg-transparent border-transparent w-full first-letter:uppercase font-semibold text-md hover:text-black"
								mode="horizontal"
								selectedKeys={[pathname]}
								onClick={({ key }) => navigate(key)}
								items={items}
								disabled={isLoading}
								overflowedIndicator={<IoIosArrowDown className='h-16 w-5 p-0'/>}
							/>
						</ConfigProvider>
						<NavSearchMenu />
					</Header>
				</nav>
			</Container>
		</section>
	);
};

export { Navbar };
