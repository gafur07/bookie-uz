import { FC } from "react";
import { BkNoPhoto } from "@/assets/images";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IBookSlug } from "@/services/index.interface";
import { IPaymentData } from "@/services/index.interface";
import { clearBuyBook, clearCart } from "@/store/index.actions";
import { Modal, message } from "antd";
import { useNavigate } from "react-router-dom";

interface IPaymentModalProps {
  openModal: boolean;
  data?: IPaymentData;
  onToggleModal: () => void;
}

const PaymentModal: FC<IPaymentModalProps> = ({
  openModal,
  onToggleModal,
  data,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { bookBuy } = useAppSelector((state) => state.buyBook);

  const onPay = () => {
    if (!data) return;
    window.open(data.url, "_blank");
  };

  const onCloseModal = () => {
    if (openModal) {
      onToggleModal();
    }
    dispatch(clearBuyBook());
    dispatch(clearCart());
    message.success("Satip alganiniz ushin rahmet!");
    navigate("/", { replace: true });
  };

  return (
    <Modal 
    open={openModal} 
    onCancel={onCloseModal}
    maskClosable={false}
    >
      <div className="flex flex-col gap-y-[24px] mt-8">
        {bookBuy?.map((item: IBookSlug) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-6 w-full border-primary border rounded-[16px] p-2"
          >
            <span className="flex items-center gap-[30px]">
              <img
                className="rounded-[16px] w-[102px] h-[102px] object-cover"
                src={item?.image[0] ? item?.image[0]?.image_url : BkNoPhoto}
                alt="book image"
              />
              <span>
                <h4 className="font-medium leading-[150%] pr-[20px] w-[160px] truncate max-[475px]:w-[100px]">
                  {item?.title}
                </h4>
              </span>
            </span>
            <h2 className="text-[#202020bf] leading-[130%] font-semibold">
              {item?.price} som
            </h2>
          </div>
        ))}
        <button
          onClick={onPay}
          className="bg-primary rounded-[16px] 
                text-white px-[24px] py-[10px] font-semibold 
                duration-200 hover:opacity-80"
        >
          Tolew
        </button>
      </div>
    </Modal>
  );
};

export { PaymentModal };
