import { useGetDonates } from "@/services/donates/donates.api";
import { Progress } from "antd";
import "./donates.scss";
import { FC, useState } from "react";
import DonatesModal from "./DonatesModal/DonatesModal";
import { Link, useLocation } from "react-router-dom";
import { BkNoPhoto } from "@/assets/images";
const Donates: FC = () => {
  const [donateModal, setDonateModal] = useState(false);
  const { data } = useGetDonates();
  const params = useLocation();

  return (
    <div className="donates">
      <div className="mobile-donates flex items-center mb-[40px]">
        <Link
          to={"/donates"}
          className={`${
            params.pathname === "/donates"
              ? "bg-[#2d71ae] text-white"
              : "text-[#202020] bg-[#d7e7f8]"
          } font-semibold px-[24px] py-[12px] rounded-l-md cursor-pointer`}
        >
          Aqsha tolenbegenler
        </Link>
        <Link
          to={"/donates-process"}
          className={`${
            params.pathname === "/donates-process"
              ? "bg-[#2d71ae] text-white"
              : "bg-[#d7e7f8] text-[#202020]"
          }  px-[24px] py-[12px] rounded-r-md cursor-pointer font-semibold`}
        >
          Processtegi kitaplar
        </Link>
      </div>
      <div className="donates_wrapper">
        {data?.data.map((item) => (
          <div className="donates_box" key={item.id}>
            <div className="donates_img">
              {item.book.image[0] ? (
                <img
                  className="object-cover bg-top h-[136px] w-[136px] rounded-[16px]"
                  src={`https://test.booky.uz/storage/images/${item.book.image[0].file_name}`}
                  alt=""
                />
              ) : (
                <img
                  className="object-cover h-[136px] w-[136px] rounded-[16px]"
                  src={BkNoPhoto}
                  alt=""
                />
              )}
              <div className="flex flex-col justify-between">
                <span>
                  <h1>{item.book.title}</h1>
                  <p className="w-[250px] truncate opacity-80">
                    {item.book.description}
                  </p>
                </span>
                <h4 className="text-[18px] font-semibold opacity-70 flex items-end gap-[5px]">
                  {item.deadline}{" "}
                  <p className="text-[14px]">
                    - Isleb shigiwga ketetugin waqit
                  </p>
                </h4>
              </div>
            </div>
            <div className="donates_price w-[30%]">
              <div className="relative">
                <p className="price text-[#555] absolute top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%]">
                  {item.price} UZS
                </p>
                <Progress
                  percent={Math.round(
                    (((Number(item.price) * 60) / 100) * 100) /
                      Number(item.price)
                  )}
                  strokeWidth={42}
                  className="rounded-[16px]"
                  strokeColor={"#ff9e30"}
                ></Progress>
              </div>
              <button
                onClick={() => setDonateModal(true)}
                className=" justify-center font-semibold rounded-[16px] bg-[#2d71ae] px-[24px] py-[12px] text-white flex items-center gap-[10px] hover:opacity-80 duration-200"
              >
                Donat qiliw
              </button>
            </div>
          </div>
        ))}
      </div>
      <DonatesModal donateModal={donateModal} setDonateModal={setDonateModal} />
    </div>
  );
};

export { Donates };
