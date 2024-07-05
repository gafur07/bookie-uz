import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { selectAllBuyBook } from "@/store/index.actions";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { BkEmptyCart } from "@/assets/images";
import { UiTitle } from "@/components/ui";
import { Container, CartCard } from "@/components/shared";
import "./cart.scss";

const Cart: FC = () => {
  const navigate = useNavigate();
  const { basket } = useAppSelector((store) => store.cart);
  const { bookBuy } = useAppSelector((store) => store.buyBook);
  const dispatch = useAppDispatch();

  const clickToBuy = () => {
    navigate("/payment");
  };

  const handleSelectAll = () => {
    dispatch(selectAllBuyBook(basket));
  };

  return (
    <section className="pb-[40px] min-h-screen">
      <Container>
        <UiTitle>Sebet</UiTitle>
        {basket && basket.length === 0 && (
          <div className="flex flex-col min-h-[50vh] items-center justify-center gap-4">
            <img className="m-auto" src={BkEmptyCart} alt="" />
            <h1 className="text-2xl font-semibold">Hazirshe sebet bos</h1>
            <button
              onClick={() => navigate("/")}
              className="bg-primary rounded-[16px] hover:opacity-80 text-white px-[24px] py-[6px]"
            >
              Bas betge qaytiw
            </button>
          </div>
        )}
        <div className="flex justify-between items-start mt-[30px] gap-[20px] max-[1000px]:flex-col max-[1000px]:gap-y-[40px]">
          <div className="w-[685px] flex flex-col gap-y-[24px] max-[700px]:w-full">
            {basket && basket.length !== 0 && (
              <>
                {basket.map((item, index) => (
                  <CartCard key={index} data={item} />
                ))}
              </>
            )}
          </div>
          {basket && basket.length !== 0 && (
            <div className="w-[420px] border border-[#83a5c8] bg-[#f9fcff] rounded-[16px] p-[24px] flex flex-col gap-y-[24px] max-[700px]:w-full max-[700px]:text-center">
              <h1 className="font-medium leading-[130%]">
                Dawam ettiriw ushın, satıp almaqshı bolǵan kitaplarıńızdı
                belgileń
              </h1>
              <button
                onClick={bookBuy.length > 0 ? clickToBuy : handleSelectAll}
                className="rounded-[16px] duration-200 hover:opacity-80 w-full bg-primary text-white font-bold py-[12px] text-[14px]"
              >
                {bookBuy.length > 0 ? "Satip aliw" : "Bárshesin belgilew"}
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export { Cart };
