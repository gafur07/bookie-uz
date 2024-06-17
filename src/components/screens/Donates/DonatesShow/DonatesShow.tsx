import { Modal } from "antd";
import { FC } from "react";
import { BkUser } from "@/assets/images";
import "./donatesShow.scss"

interface IShowDonates {
  showDonates: boolean;
  setShowDonates: React.Dispatch<React.SetStateAction<boolean>>;
}

const DonatesShow: FC<IShowDonates> = ({ setShowDonates, showDonates }) => {
  return (
    <Modal
      open={showDonates}
      onCancel={() => setShowDonates(false)}
      className="donShow"
      centered
      styles={{
        body: {
          overflowY: "auto",
          scrollbarWidth: "thin",
        },
      }}
      title={
        <h1
          style={{ fontSize: "calc(16px + 4 * (100vw - 320px) / 1280)" }}
          className="font-semibold leading-[130%] text-[#202020bf] 
          whitespace-nowrap mb-[20px]"
        >
          Donaterlar
        </h1>
      }
    >
      <div className="flex flex-col gap-y-[10px] max-h-[370px] ">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-[18px] rounded-[16px] text-[#FF9E30] bg-transparent border border-[#FF9E30] px-[12px] py-[12px]"
          >
            <span className="flex items-center gap-[15px]">
              <img className="h-[40px]" src={BkUser} alt="user" />
              <p>Palenshe Tolensheva</p>
            </span>
            <p>150,000 UZS</p>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default DonatesShow;