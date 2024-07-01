import { BkNoPhoto } from "@/assets/images";
import { IDonateData } from "@/services/index.interface";
import { formatPrice } from "@/utils";
import { Progress } from "antd";
import { FC } from "react";


interface DonatesListProps {
    donates?: IDonateData[],
    onToggleModal: () => void
}

const DonatesList: FC<DonatesListProps> = ({ donates, onToggleModal }) => {


  return (
    <div className="flex flex-col gap-[24px]">
      {donates?.map((item) => (
        <div
          className="flex items-center justify-between border border-primary rounded-[16px] p-[15px] max-[768px]:flex-col"
          key={item.id}
        >
          <div className="flex w-full gap-[50px] max-[768px]:flex-col max-[768px]:gap-[24px] max-[768px]:mb-[24px]">
            {item.book.image[0] ? (
              <img
                className="object-cover h-[136px] w-[136px] rounded-[16px] 
                  max-[768px]:h-[300px] 
                  max-[768px]:w-full"
                src={`https://test.booky.uz/storage/images/${item.book.image[0].file_name}`}
                alt=""
              />
            ) : (
              <img
                className="object-cover h-[136px] w-[136px] rounded-[16px] 
                    max-[768px]:h-[300px] 
                    max-[768px]:w-full"
                src={BkNoPhoto}
                alt=""
              />
            )}
            <div className="flex flex-col justify-between gap-6">
              <span>
                <h1
                  style={{
                    fontSize: "calc(16px + 4 * (100vw - 320px) / 1280)",
                  }}
                  className="font-semibold leading-[130%] whitespace-nowrap"
                >
                  {item.book.title}
                </h1>
                <p className="w-[250px] text-[14px] truncate opacity-80">
                  {item.book.description}
                </p>
              </span>
              <h4 className="text-[18px] font-semibold opacity-70 flex items-end gap-[5px]">
                {item.deadline}{" "}
                <p className="text-[14px]">- Isleb shigiwga ketetugin waqit</p>
              </h4>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] w-[30%] max-[768px]:w-[60%] max-[450px]:w-full">
            <div className="relative">
              <p
                className="leading-[130%] whitespace-nowrap text-xl
                    font-semibold text-[#555] absolute top-[50%] left-[50%] 
                    z-50 translate-x-[-50%] translate-y-[-50%]"
              >
                {formatPrice(Number(item.price))} UZS
              </p>
              <Progress
                percent={Math.round(
                  (((Number(item.price) * 60) / 100) * 100) / Number(item.price)
                )}
                strokeWidth={42}
                className="rounded-[16px]"
                strokeColor={"#ff9e30"}
              ></Progress>
            </div>
            <button
              onClick={onToggleModal}
              className=" justify-center font-semibold rounded-[16px] bg-primary px-[24px] py-[12px] text-white flex items-center gap-[10px] hover:opacity-80 duration-200"
            >
              Donat qiliw
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { DonatesList };
