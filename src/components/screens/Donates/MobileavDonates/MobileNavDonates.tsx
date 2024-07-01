import { FC } from "react";
import { NavLink } from "react-router-dom";

const MobileNavDonates: FC = () => {
  return (
    <div
      className="hidden items-stretch mb-[40px]  
      max-[820px]:flex 
      max-[600px]:w-full 
      max-[600px]:mx-auto
      max-[350px]:flex-col
      "
    >
      <NavLink
        to={"/donates"}
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-primary text-white hover:text-white"
              : "text-[#202020] bg-[#d7e7f8] hover:text-[#202020]"
          } 
            font-semibold px-[24px] py-[12px] 
            rounded-l-md cursor-pointer
						duration-200
						transition-colors
            max-[500px]:px-[20px]
            max-[500px]:text-[11px]
            max-[600px]:w-full
            max-[350px]:rounded-md
            `
        }
      >
        Aqsha jiynalmagan kitaplar
      </NavLink>
      <NavLink
        to={"/donates-process"}
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-primary text-white hover:text-white"
              : "text-[#202020] bg-[#d7e7f8] hover:text-[#202020]"
          }  px-[24px] py-[12px] rounded-r-md 
            cursor-pointer font-semibold
            max-[500px]:px-[20px]
            max-[500px]:text-[12px]
            max-[600px]:w-full
            max-[350px]:rounded-md
            `
        }
      >
        Processtegi kitaplar
      </NavLink>
    </div>
  );
};

export { MobileNavDonates };
