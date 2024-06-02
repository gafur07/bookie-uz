import { useAppSelector, useAppDispatch } from "@/hooks";
import "./cart.scss";
import { Checkbox } from "antd";
import { removeCart } from "@/store/cart/cart.actions";

const Cart = () => {
  const { basket } = useAppSelector((store) => store.cart);
  const { token } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  function removeCartFunction(data: number) {
    dispatch(removeCart({ id: data }));
  }

  console.log(typeof basket);
  

  return (
    <>
      <section className="cart w-full min-h-screen">
        <div className="container">
          {!token ? (
            <h1 className="flex items-center justify-center text-[2em] font-semibold h-[55vh]">
              Error 404. Page not found
            </h1>
          ) : (
            <>
              <h1 className="category-h1">Saylandilar</h1>
              <div className="flex gap-[20px] justify-between">
                <div className="w-[630px]">
                  {basket.length === 0 && (
                    <h1 className="text-[1.5rem] font-bold">
                      Hazirshe sebet bos
                    </h1>
                  )}
                  {token &&
                    basket?.map((res: any) => (
                      <div
                        key={res.id}
                        className="flex items-center gap-[30px] w-full"
                      >
                        <div className="flex items-center justify-between gap-6 w-full">
                          <span className="flex items-center gap-[30px]">
                            <img
                              className="rounded-[16px] w-[100px] h-[148px]"
                              src={"https://picsum.photos/200"}
                              alt=""
                            />
                            <h2 className="cart-book-title">
                              {res?.item?.title}
                            </h2>
                          </span>
                          <span>
                            <p className="primary-p">{res?.item?.price} som</p>
                            <button
                              onClick={() => removeCartFunction(res)}
                              className="flex items-center justify-center gap-[6px] text-[10px] text-[#8d8e8f] cursor-pointer font-[400] leading-[100%]"
                            >
                              <i className="bx bxs-trash border border-[#8d8e8f] rounded-[16px] text-[12px] pt-[1px] p-[1px]"></i>
                              Oshiriw
                            </button>
                          </span>
                        </div>
                        <Checkbox />
                      </div>
                    ))}
                </div>

                <div className="w-[420px] border border-[#83a5c8] rounded-[16px] p-[24px] flex flex-col gap-y-[24px]">
                  <h1 className="cart-h1">
                    Dawam ettiriw ushın, satıp almaqshı bolǵan kitaplarıńızdı
                    belgileń
                  </h1>
                  <button className="rounded-[16px] duration-200 hover:opacity-80 w-full bg-[#2d71ae] text-white font-bold py-[12px] text-[14px]">
                    Bárshesin belgilew
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export { Cart };
