import { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { HeaderHamburger } from "./HeaderHamburger";
import { Container } from "@/components/shared";

import { useNavItems } from "./useNavItems";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	const items = useNavItems();

	return (
		<header className="bg-[#2d71ae] py-[25px] max-[820px]:py-[10px]">
			<Container>
				<div className="flex justify-between items-center">
					<Link
						to={"/"}
						className="text-[28px] text-[#fff] font-[700] max-[820px]:text-[20px]"
					>
						Booky.uz
					</Link>

					<nav className="max-[820px]:hidden">
						<ul className="flex items-center gap-[24px]">
							{items.map(({ item }, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</nav>

					<div className="hidden text-white z-[99999] cursor-pointer max-[820px]:block">
						<Hamburger size={27} toggled={isOpen} toggle={toggleOpen} />
					</div>
				</div>
			</Container>
			<HeaderHamburger isOpen={isOpen} toggleOpen={toggleOpen} />
		</header>
	);
}

export { Header };
