import { useAppSelector, useAppDispatch } from "@/hooks";
import "./cart.scss";
import { Checkbox } from "antd";
import { addBuyBook, clearBuyBook, removeCart } from "@/store/index.actions";
import { IBookSlug } from "@/services/index.interface";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { token } = useAppSelector((store) => store.auth);
  const { basket } = useAppSelector((store) => store.cart);
  const navigate = useNavigate()
  const [cart, setCart] = useState<IBookSlug[]>([])
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<IBookSlug[]>([]);
  const dispatch = useAppDispatch();

  
  function changeRemove(data: IBookSlug) {
    dispatch(removeCart(data));
  }

  const clickToBuy =  () => {
    dispatch(clearBuyBook())
    selectedBook.forEach((data) => {
			dispatch(addBuyBook(data))
		})
    navigate('/payment', {replace: true})
  }

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

  useEffect(() => {
      basket
  },[basket])

  return (
    <>
      <section className="cart">
          {!token ? (
            <h1 className="flex items-center justify-center text-[2em] font-semibold h-[55vh]">
              Error 404. Page not found
            </h1>
          ) : (
            <>
              <h1 className="category-h1">Sebet</h1>
              <div className="cart_wrapper flex justify-between items-start gap-[20px] ">
                <div className="cart_book">
                  {basket?.length === 0 && (
                    <h1 className="text-[1.5rem] font-bold">
                      Hazirshe sebet bos
                    </h1>
                  )}
                  {token &&
                    basket?.map((item: IBookSlug) => (
                      <div
                        key={item?.id}
                        className="flex items-center gap-[30px] w-full"
                      >
                        <div className="flex items-center justify-between gap-6 w-full">
                          <span className="flex items-center gap-[30px]">
                            <img
                              className="rounded-[16px] w-[100px] h-[148px]"
                              src={"https://picsum.photos/200"}
                              alt=""
                            />
                            <h2 className="cart-book-title">{item?.title}</h2>
                          </span>
                          <span>
                            <p className="primary-p">{item?.price} som</p>
                            <button
                              onClick={() => changeRemove(item)}
                              className="flex items-center justify-center gap-[6px] text-[10px] text-[#8d8e8f] cursor-pointer font-[400] leading-[100%]"
                            >
                              <i className="bx bxs-trash border border-[#8d8e8f] rounded-[16px] text-[12px] pt-[1px] p-[1px]"></i>
                              Oshiriw
                            </button>
                          </span>
                        </div>
                        <Checkbox
                          checked={selectedBook.includes(item)}
                          onChange={() => handleSelect(item)}
                        />
                      </div>
                    ))}
                </div>

                <div className="box">
                  <h1 className="cart-h1">
                    Dawam ettiriw ushın, satıp almaqshı bolǵan kitaplarıńızdı
                    belgileń
                  </h1>
                  {selectedBook.length > 0 ? (
                    <button
                      onClick={clickToBuy}
                      className="rounded-[16px] duration-200 hover:opacity-80 w-full bg-[#2d71ae] text-white font-bold py-[12px] text-[14px]"
                    >
                      Satip aliw
                    </button>
                  ) : (
                    <button
                      onClick={handleSelectAll}
                      className="rounded-[16px] duration-200 hover:opacity-80 w-full bg-[#2d71ae] text-white font-bold py-[12px] text-[14px]"
                    >
                      Bárshesin belgilew
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
      </section>
    </>
  );
};

export { Cart };
