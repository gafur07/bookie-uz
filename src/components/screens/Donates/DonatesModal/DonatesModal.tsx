import { Checkbox, Form, Input, InputNumber, Modal, Space } from "antd";
import React, { useState } from "react";
import "./donatesModal.scss";
import { BkClick, BkPayme, BkUzum } from "@/assets/images";

interface IDonateModalProps {
  donateModal: boolean;
  setDonateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DonatesModal: React.FC<IDonateModalProps> = ({
  donateModal,
  setDonateModal,
}) => {
  const [anonim, setAnonim] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [paymentId, setPaymentId] = useState<number | undefined>();
  console.log(paymentId);
  
  const paymentToClick = () => {
    setSelectedPayment("click");
    setPaymentId(1);
  };

  const paymentToPayme = () => {
    setSelectedPayment("payme");
    setPaymentId(2);
  };

  const paymentToUzum = () => {
    setSelectedPayment("uzum");
    setPaymentId(3);
  };

  return (
    <Modal
      open={donateModal}
      onCancel={() => setDonateModal(false)}
      className="donModal"
      centered
    >
      <Form className="w-full mt-8">
        <Space size={10} className="flex sp flex-col items-start w-full">
          <Input
            disabled={anonim}
            required={true}
            className="w-full py-[10px] text-[#585858] disabled:opacity-70 rounded-[16px] font-semibold text-[16px] border-[#a1a1a1] placeholder:text-[#585858]"
            placeholder="Ati familiyaniz"
          />
          <Checkbox
            onClick={() => setAnonim(!anonim)}
            className="foo text-[#585858] text-[16px] font-semibold"
          >
            Anonim
          </Checkbox>
          <InputNumber
            required={true}
            className="w-full inpNumber rounded-[16px] border-[#a1a1a1]"
            placeholder="Summa"
          />
          <div className="flex items-center justify-start gap-[12px] my-4">
            <button
              className={`flex w-[77px] h-[35px] py-[8.5px] px-[16px] justify-center rounded-[100px] disabled:cursor-not-allowed ${
                selectedPayment === "click"
                  ? "border-2 border-primary"
                  : "border border-primary3"
              }`}
              disabled
              type="button"
              onClick={paymentToClick}
            >
              <img src={BkClick} alt="image" />
            </button>

            <button
              className={`flex w-[77px] h-[35px] py-[8.5px] px-[16px] justify-center rounded-[100px] disabled:cursor-not-allowed hover:border-2 hover:border-primary ${
                selectedPayment === "payme"
                  ? "border-2 border-primary"
                  : "border border-primary3"
              }`}
              type="button"
              onClick={paymentToPayme}
            >
              <img src={BkPayme} alt="image" />
            </button>

            <button
              className={`flex w-[77px] h-[35px] py-[8.5px] px-[16px] justify-center rounded-[100px] disabled:cursor-not-allowed ${
                selectedPayment === "uzum"
                  ? "border-2 border-primary"
                  : "border border-primary3"
              }`}
              disabled
              type="button"
              onClick={paymentToUzum}
            >
              <img src={BkUzum} alt="image" />
            </button>
          </div>
          <button
            onClick={() => setDonateModal(true)}
            className="flex items-center justify-center w-full gap-2 font-semibold rounded-[16px] bg-primary border-primary px-[24px] py-[12px] text-white hover:opacity-80 duration-200"
          >
            Donat qiliw
            <i className="bx bx-chevron-right text-[18px]"></i>
          </button>
        </Space>
      </Form>
    </Modal>
  );
};

export default DonatesModal;
