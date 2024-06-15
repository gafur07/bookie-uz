import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosClassic } from "@/api/axios.interceptors";
import { INavCategories } from "./nav.menu.interface";
import { NavSearchMenu } from "./NavSearchMenu";
import "./navbar.scss";

const Navbar = () => {
  const { data } = useQuery<INavCategories[]>({
    queryFn: getNavCategories,
    queryKey: ["categories"],
  });
  const params = useLocation();

  async function getNavCategories() {
    const res = await axiosClassic.get("/category");
    return res.data.data;
  }

  return (
    <div className="bg-[#d7e7f8] h-auto z-10 px-[5%] max-[820px]:hidden">
      {params.pathname.includes("donates" || "donates-process") ? (
        <ul className="flex items-center justify-between flex-wrap">
          <span className="flex items-center gap-x-4">
            <Link
              className={`py-[17px] px-[30px] text-[#202020] text-[16px] font-[600] duration-300 ease-in-out cursor-pointer whitespace-nowrap 
              ${
                params.pathname === "/donates"
                  ? "border-b-[2px] border-b-[#2d71ae]"
                  : ""
              }`
            }
              to={"/donates"}
              style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
            >
              Aqsha jiynalmagan kitaplar
            </Link>
            <Link
              className={`py-[17px] px-[30px] text-[#202020] text-[16px] font-[600] duration-300 ease-in-out cursor-pointer whitespace-nowrap 
              ${
                params.pathname === "/donates-process"
                  ? "border-b-[2px] border-b-[#2d71ae]"
                  : ""
              }`
            }
              to={"/donates-process"}
              style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
            >
              Processtegi kitapler
            </Link>
          </span>
          <NavSearchMenu />
        </ul>
      ) : (
        <ul className="flex items-center justify-center flex-wrap max-[1300px]:pb-[5px]">
          {data?.map((item: INavCategories, index) => (
            <Link
              className="first-letter:uppercase py-[17px] px-[30px] text-[#202020] font-[600] duration-200 ease-in-out cursor-pointer whitespace-nowrap hover:bg-[#2d71ae] hover:text-white"
              style={{ fontSize: "calc(11px + 4 * (100vw - 320px) / 1280)"}}
              key={index}
              to={`/category/${item.slug}`}
            >
              {item.name}
            </Link>
          ))}
          <NavSearchMenu />
        </ul>
      )}
    </div>
  );
};

export { Navbar };
