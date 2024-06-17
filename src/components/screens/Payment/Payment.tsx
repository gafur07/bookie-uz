import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { removeBuyBook } from "@/store/index.actions";
import { IBookSlug } from "@/services/index.interface";
import { axiosClassic } from "@/api";
import {
  BkChevron,
  BkClick,
  BkNoPhoto,
  BkPayme,
  BkTrash,
  BkUzum,
} from "@/assets/images";

const Payment: React.FC = () => {
  const [totalSum, setTotalSum] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [paymentId, setPaymentId] = useState<number | undefined>();
  const { bookBuy } = useAppSelector((store) => store.buyBook);
  const dispatch = useAppDispatch();
  const [books, setBooks] = useState<number[]>([]);

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
  const changeRemoveBuyBook = (data: IBookSlug) => {
    dispatch(removeBuyBook(data));
  };

  const clickToBuy = () => {
    axiosClassic
      .post("/orders", {
        books: books,
        payment_id: paymentId,
      })
      .then((res) => window.open(res.data.data.url, "_blank"));
  };

  useEffect(() => {
    bookBuy?.map((item) => {
      if (item?.id !== undefined) {
        setBooks((prev) => [...prev, item?.id]);
      }
    });
    setTotalSum(bookBuy?.reduce((a, b) => Number(a) + Number(b.price), 0));
  }, [setTotalSum, bookBuy]);

  return (
    <section className="w-full py-[30px] px-[5%] min-h-screen">
      <h1
        style={{ fontSize: "calc(22px + 14 * (100vw - 320px) / 1280)" }}
        className="leading-[130%] font-semibold opacity-75 mb-[30px]"
      >
        Satip aliw
      </h1>
      <div className="flex justify-between items-start gap-[20px] max-[1000px]:flex-col max-[1000px]:gap-y-[40px]">
        <div className="w-[630px] flex flex-col gap-y-[24px] max-[700px]:w-full">
          {bookBuy?.map((item: IBookSlug) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-6 w-full"
            >
              <span className="flex items-center gap-[30px]">
                <img
                  className="rounded-[16px] w-[102px] h-[102px] object-cover"
                  src={item?.image[0] ? item?.image[0]?.image_url : BkNoPhoto}
                  alt="book image"
                />
                <span>
                  <h4 style={{fontSize: 'calc(12px + 4 * (100vw - 320px) / 1280)'}} className="font-medium leading-[150%] pr-[20px]">{item?.title}</h4>
                  <p style={{fontSize: 'calc(8px + 4 * (100vw - 320px) / 1280)'}} className="leading-[130%] text-[#585858]">{item?.author[0]?.name}</p>
                </span>
              </span>
              <h2 style={{fontSize: 'calc(12px + 4 * (100vw - 320px) / 1280)'}} className="flex items-center whitespace-nowrap gap-[30px] text-[#202020bf] leading-[130%] font-semibold">
                {item?.price} som
                <img
                  className="h-[22px] cursor-pointer"
                  onClick={() => changeRemoveBuyBook(item)}
                  src={BkTrash}
                  alt=""
                />
              </h2>
            </div>
          ))}
        </div>
        <div className="w-[420px] flex flex-col p-[24px] gap-y-[24px] border border-[#83a5c5] rounded-[16px] bg-[#f9fcff] max-[700px]:w-full max-[700px]:text-center max-[700px]:mt-[30px]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between w-full text-[14px] font-medium leading-[130%]">
              Kitap ({bookBuy.length}) <span>{totalSum} som</span>
            </div>
          </div>
          <div
            style={{ fontSize: "calc(16px + 4 * (100vw - 320px) / 1280)" }}
            className="flex items-center justify-between w-full leading-[130%] pt-[10px] border-t border-t-[#d7e7f8]"
          >
            Jámi <span>{totalSum} som</span>
          </div>
          <div className="flex items-center justify-start gap-[12px]">
            <button
              className={`flex w-[77px] h-[35px] py-[8.5px] px-[16px] justify-center rounded-[100px] disabled:cursor-not-allowed ${
                selectedPayment === "click"
                  ? "border-2 border-[#2d71ae]"
                  : "border border-[#d7e7f8]"
              }`}
              disabled
              type="button"
              onClick={paymentToClick}
            >
              <img src={BkClick} alt="image" />
            </button>

            <button
              disabled={books.length === 0}
              className={`flex w-[77px] h-[35px] py-[8.5px] px-[16px] justify-center rounded-[100px] disabled:cursor-not-allowed hover:border-2 hover:border-[#2d71ae] ${
                selectedPayment === "payme"
                  ? "border-2 border-[#2d71ae]"
                  : "border border-[#d7e7f8]"
              }`}
              type="button"
              onClick={paymentToPayme}
            >
              <img src={BkPayme} alt="image" />
            </button>

            <button
              className={`flex w-[77px] h-[35px] py-[8.5px] px-[16px] justify-center rounded-[100px] disabled:cursor-not-allowed ${
                selectedPayment === "uzum"
                  ? "border-2 border-[#2d71ae]"
                  : "border border-[#d7e7f8]"
              }`}
              disabled
              type="button"
              onClick={paymentToUzum}
            >
              <img src={BkUzum} alt="image" />
            </button>
          </div>
          <button
            style={{ fontSize: "calc(16px + 4 * (100vw - 320px) / 1280)" }}
            className="bg-[#ffbe84] text-white flex items-center rounded-[16px] justify-center font-semibold leading-[130%] gap-[8px] w-full p-[16px]"
            disabled={!bookBuy.length}
            onClick={clickToBuy}
          >
            Tólew <img src={BkChevron} alt="right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export { Payment };
