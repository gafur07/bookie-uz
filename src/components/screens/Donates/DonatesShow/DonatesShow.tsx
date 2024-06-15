import { Modal } from "antd";
import { FC } from "react";
import "./donatesShow.scss";
import { BkUser } from "@/assets/images";

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
    >
      <h1 className="primary-p mb-[20px] mt-8">Donaterlar</h1>
      <div className="flex flex-col gap-y-[10px] max-h-[370px] overflow-y-auto">
        <div className="donatesShow">
          <span className="flex items-center gap-[15px]">
            <img className="h-[40px]" src={BkUser} alt="" />
            <p>Palenshe Tolensheva</p>
          </span>
          <p>150,000 UZS</p>
        </div>
        <div className="donatesShow">
          <span className="flex items-center gap-[15px]">
            <img className="h-[40px]" src={BkUser} alt="" />
            <p>Palenshe Tolensheva</p>
          </span>
          <p>150,000 UZS</p>
        </div>
        <div className="donatesShow">
          <span className="flex items-center gap-[15px]">
            <img className="h-[40px]" src={BkUser} alt="" />
            <p>Palenshe Tolensheva</p>
          </span>
          <p>150,000 UZS</p>
        </div>
        <div className="donatesShow">
          <span className="flex items-center gap-[15px]">
            <img className="h-[40px]" src={BkUser} alt="" />
            <p>Palenshe Tolensheva</p>
          </span>
          <p>150,000 UZS</p>
        </div>
        <div className="donatesShow">
          <span className="flex items-center gap-[15px]">
            <img className="h-[40px]" src={BkUser} alt="" />
            <p>Palenshe Tolensheva</p>
          </span>
          <p>150,000 UZS</p>
        </div>
      </div>
    </Modal>
  );
};

export default DonatesShow;
