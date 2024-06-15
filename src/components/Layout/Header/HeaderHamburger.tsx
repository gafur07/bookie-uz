import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosClassic } from "@/api/axios.interceptors";
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

const authMenu = [
  {
    pathname: "donates",
    icon: <img className="h-[22px]" src={BkDonation} alt="" />,
    label: "Donates",
  },
  {
    pathname: "favorites",
    icon: <img className="h-[22px]" src={BkFavorites} alt="" />,
    label: "Saylandilar",
  },
  {
    pathname: "cart",
    icon: <img className="h-[22px]" src={BkCart} alt="" />,
    label: "Sebet",
  },
  {
    pathname: "my-books",
    icon: <img className="h-[22px]" src={BkMyBook} alt="" />,
    label: "Kitaplarim",
  },
];

interface HamburgerProps {
  isOpen: boolean;
  toggleOpen: () => void;
}
interface HamburgerCategories {
  id: number;
  name: string;
  slug: string;
}
const HeaderHamburger: FC<HamburgerProps> = ({ isOpen, toggleOpen }) => {
  const { token } = useAppSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data } = useQuery<HamburgerCategories[]>({
    queryFn: getCategory,
    queryKey: ["categories"],
  });
  async function getCategory() {
    const res = await axiosClassic.get("/category");
    return res.data.data;
  }

  const onClick = (e: string) => {
    if (isOpen) {
      toggleOpen();
    }
    navigate(e, { replace: true });
  };

  return (
    <div className={`
    ${isOpen ? "duration-200 ease-in-out fixed translate-x-0 flex right-0 flex-col p-[30px] top-0 left-0 w-full h-screen z-10 bg-[#2d71ae] gap-y-[20px]" 
    : "duration-200 ease-in-out fixed translate-x-[100%] flex right-0 flex-col bg-[#2d71ae] p-[30px] top-0 left-0 w-full h-screen z-10 gap-y-[20px]"
   }`}
   >
      <div
        style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
        className="flex items-center justify-start text-white gap-[12px] cursor-pointer"
      >
        <img className="h-[22px]" src={BkHome} alt="" />
        <h1 onClick={() => onClick('/')}>Basbet</h1>
      </div>
      {data?.map((item) => (
        <div
          key={item.slug}
          onClick={() => onClick(`/category/${item.slug}`)}
          style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
          className="flex items-center justify-start text-white gap-[12px] cursor-pointer"
        >
          <img className="w-[22px]" src={BkLibrary} alt="" />
          {item.name}
        </div>
      ))}
      {token ? (
        authMenu.map((item) => (
          <div
            style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
            className="flex items-center justify-start text-white gap-[12px] cursor-pointer"
            onClick={() => onClick(`/${item.pathname}`)}
          >
            {item.icon}
            {item.label}
          </div>
        ))
      ) : (
        <div className="flex flex-col gap-y-[30px]">
          <div
            className="flex items-center justify-start text-white gap-[12px] cursor-pointer"
            onClick={() => onClick("/login")}
            style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
          >
            <BiLogIn size={22}/>
            Kiriw
          </div>
          <div
            className="flex items-center justify-start text-white gap-[12px] cursor-pointer"
            onClick={() => onClick("/register")}
            style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
          >
            <BsFillPersonPlusFill size={22} />
            Dizimnen ótiw
          </div>
        </div>
      )}
      {token && (
        <div
          className="flex items-center justify-start text-white gap-[12px] cursor-pointer"
          onClick={() => dispatch(signOut())}
          style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
        >
          <img src={BkExit} alt="" />
          Shigiw
        </div>
      )}
    </div>
  );
};

export { HeaderHamburger };
