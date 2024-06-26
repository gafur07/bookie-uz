import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/hooks";
import LastBooks from "./LastBooks/LastBooks";
import Main from "./Main/MainPage";
import Contact from "./Contact/Contact";
import SwiperPage from "./SwiperPage/SwiperPage";
import TrendBooks from "./TrendBooks/TrendBooks";

const Home = () => {
	const { token } = useAppSelector((store) => store.auth);
	const navigate = useNavigate();
	const targetRef = useRef<HTMLDivElement>(null);

	const scrollToDiv = () => {
		if (token) {
			if (targetRef.current) {
				targetRef.current.scrollIntoView({ behavior: "smooth" });
			}
		} else {
			navigate("/register", { replace: true });
		}
	};

	return (
		<>
			<Main scrollToDiv={scrollToDiv} />
			<SwiperPage />
			<LastBooks targetRef={targetRef} />
			<TrendBooks />
			<Contact />
		</>
	);
};

export { Home };
