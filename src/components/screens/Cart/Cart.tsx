import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "antd";
import { IBookSlug } from "@/services/index.interface";
import { addBuyBook, clearBuyBook, removeCart } from "@/store/index.actions";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { BkNoPhoto } from "@/assets/images";
import "./cart.scss";

const Cart: FC = () => {
  const navigate = useNavigate();
  const { basket } = useAppSelector((store) => store.cart);
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<IBookSlug[]>([]);
  const dispatch = useAppDispatch();

  function changeRemove(data: IBookSlug) {
    dispatch(removeCart(data));
  }

  const clickToBuy = () => {
    dispatch(clearBuyBook());
    selectedBook.forEach((data) => {
      dispatch(addBuyBook(data));
    });
    navigate("/payment", { replace: true });
  };

  const handleSelectAll = () => {
    if (isSelect) {
      setSelectedBook([]);
    } else {
      setSelectedBook(basket);
    }
    setIsSelect(!isSelect);
  };

  const handleSelect = (item: IBookSlug) => {
    if (selectedBook.includes(item)) {
      setSelectedBook(selectedBook.filter((el) => el !== item));
    } else {
      setSelectedBook([...selectedBook, item]);
    }
    setIsSelect(false);
  };

  return (
    <>
      <section className="w-full py-[30px] px-[5%] min-h-screen">
        <>
          <h1
            style={{ fontSize: "calc(36px + 12 * (100vw - 320px) / 1280)" }}
            className="leading-[130%] font-semibold opacity-75 mb-[30px]"
          >
            Sebet
          </h1>
          <div className="flex justify-between items-start gap-[20px] max-[1000px]:flex-col max-[1000px]:gap-y-[40px]">
            <div className="w-[630px] flex flex-col gap-y-[24px] max-[700px]:w-full">
              {basket && basket.length === 0 ? (
                <h1 className="text-[1.5rem] font-bold">Hazirshe sebet bos</h1>
              ) : basket && (
                <>
                  {basket.map((item: IBookSlug) => (
                    <div
                      key={item?.id}
                      className="flex items-center gap-[30px] w-full"
                    >
                      <div className="flex items-center justify-between gap-6 w-full">
                        <span className="flex items-center gap-[30px]">
                          <img
                            className="rounded-[16px] w-[102px] h-[102px] object-cover"
                            src={
                              item?.image[0]
                                ? item?.image[0]?.image_url
                                : BkNoPhoto
                            }
                            alt="book image"
                          />
                          <h2 style={{fontSize: 'calc(12px + 4 * (100vw - 320px) / 1280)'}} className="font-medium leading-[150%] pr-[20px]">{item?.title}</h2>
                        </span>
                        <span className="flex flex-col gap-y-[30px]">
                          <p style={{fontSize: 'calc(16px + 4 * (100vw - 320px) / 1280)'}} className="text-[#202020bf] font-semibold leading-[130%] whitespace-nowrap">{item?.price} som</p>
                          <button
                            onClick={() => changeRemove(item)}
                            className="flex items-center justify-center gap-[6px] text-[10px] text-[#8d8e8f] cursor-pointer font-[400] leading-[100%]"
                          >
                            <i className="bx bxs-trash text-[12px]="></i>
                            Oshiriw
                          </button>
                        </span>
                      </div>
                      <Checkbox
                        className="cartCheck"
                        checked={selectedBook.includes(item)}
                        onChange={() => handleSelect(item)}
                      />
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="w-[420px] border border-[#83a5c8] bg-[#f9fcff] rounded-[16px] p-[24px] flex flex-col gap-y-[24px] max-[700px]:w-full max-[700px]:text-center">
              <h1 style={{fontSize: 'calc(16px + 4 * (100vw - 320px) / 1280)'}} className="font-medium leading-[130%]">
                Dawam ettiriw ushın, satıp almaqshı bolǵan kitaplarıńızdı
                belgileń
              </h1>
                <button
                  onClick={ selectedBook.length > 0 ? clickToBuy : handleSelectAll}
                  className="rounded-[16px] duration-200 hover:opacity-80 w-full bg-primary text-white font-bold py-[12px] text-[14px]"
                >
                  {selectedBook.length > 0 ? "Satip aliw" : "Bárshesin belgilew"}
                </button>
            </div>
          </div>
        </>
      </section>
    </>
  );
};

export { Cart };
