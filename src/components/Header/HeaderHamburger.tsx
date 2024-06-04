import { FC } from "react";
import home from "@/images/home0.svg";
import cart from "@/images/cart0.svg";
import favorite from "@/images/favorites0.svg";
import my_books from "@/images/myBooks0.svg";
import category from "@/images/library0.svg";
import exit from "@/images/exit.svg";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosClassic } from "@/api/axios.interceptors";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { signOut } from "@/store/index.actions";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IHamCategories {
  id: number;
  name: string;
  slug: string;
}
const HeaderHamburger: FC<HamburgerProps> = (isOpen, setIsOpen) => {
  const { token } = useAppSelector((store) => store.auth);
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  console.log(setIsOpen);
  
  const { data } = useQuery<IHamCategories[]>({
    queryFn: getHamCategories,
    queryKey: ["categories"],
  });
  async function getHamCategories() {
    const res = await axiosClassic.get("/category");
    return res.data.data;
  }

  const onClick = (e: string) => {
    isOpen.setIsOpen(false)
    navigate(e, {replace: true})
  }

  const authorizedMenuItems = [
    {
      pathname: "favorites",
      icon: <img src={favorite} alt="favorites" />,
      label: "Saylandilar",
    },
    { pathname: "cart", icon: <img src={cart} alt="cart" />, label: "Sebet" },
    {
      pathname: "my_books",
      icon: <img src={my_books} alt="my_books" />,
      label: "Kitaplarim",
    },
  ];

  return (
    <div className={isOpen.isOpen ? styles.hamMenu : styles.hide}>
      <div className={styles.menuItem}>
        <img src={home} alt="" />
        <Link to={"/"}>Basbet</Link>
      </div>
      {data?.map((item) => (
        <div
          key={item.slug}
          onClick={() => onClick(`/category/${item.slug}`)}
          className={styles.menuItem}
        >
          <img src={category} alt="category" />
          <Link to={`/${item.slug}`}>{item.name}</Link>
        </div>
      ))}
      {token ? (
        authorizedMenuItems.map((item) => (
          <div
            className={styles.menuItem}
            onClick={() => onClick(`/${item.pathname}`)}
            key={item.label}
          >
            {item.icon}
            {item.label}
          </div>
        ))
      ) : (
        <div className={styles.guestMenu}>
          <div
            className={styles.guestMenuItem}
            onClick={() => onClick("/login")}
          >
            <BiLogIn />
            Kiriw
          </div>
          <div
            className={styles.guestMenuItem}
            onClick={() => onClick("/register")}
          >
            <BsFillPersonPlusFill />
            Dizimnen ótiw
          </div>
        </div>
      )}
      {token && (
				<div className={styles.menuItem} onClick={() => dispatch(signOut())}>
					<img src={exit} alt='logout' />
					Shigiw
				</div>
			)}
    </div>
  );
};

export { HeaderHamburger };
