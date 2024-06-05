import React, { useEffect, useState } from "react";
import styles from "./Payment.module.scss";
import click from "@/images/Click.svg";
import payme from "@/images/Payme.svg";
import uzum from "@/images/Uzum.svg";
import arrow from "@/images/Chevron.svg";
import trash from "@/images/trash0.svg";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { removeBuyBook } from "@/store/index.actions";
import { IBookSlug } from "@/services/index.interface";
import { axiosClassic } from "@/api/axios.interceptors";

const Payment: React.FC = () => {
  const [totalSum, setTotalSum] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("");
  const { bookBuy } = useAppSelector((store) => store.buyBook);
  const { token } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();
  const [books, setBooks] = useState<number[]>([]);
  const [paymentId, setPaymentId] = useState<number | undefined>();

  const paymentToClick = () => {
    setSelectedPayment("click");
    setPaymentId(1);
  };

  const paymentToPayme = () => {
    setSelectedPayment("payme");
    setPaymentId(2);
  };

  const changeRemoveBuyBook = (data: number) => {
    dispatch(removeBuyBook(data));
  };

  const paymentToUzum = () => {
    setSelectedPayment("uzum");
    setPaymentId(3);
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
    bookBuy.map((item) => {
      if (item.id !== undefined) {
        setBooks((prev) => [...prev, item.id]);
      }
    });
    setTotalSum(bookBuy.reduce((acc, b) => Number(acc) + Number(b.price), 0));
  }, [setTotalSum, bookBuy]);

  return (
    <section className={styles.payment}>
        {!token ? (
          <h1 className="flex items-center justify-center text-[2em] font-semibold h-[55vh]">
            Error 404. Page not found
          </h1>
        ) : (
          <>
            <h1 className={styles.payment_h1}>Satip aliw</h1>
            <div className={styles.cart_wrapper}>
              <div className="cart_book">
                {token &&
                  bookBuy?.map((item: IBookSlug) => (
                      <div key={item.id} className="flex items-center justify-between gap-6 w-full">
                        <span className="flex items-center gap-[30px]">
                          <img
                            className="rounded-[16px] w-[100px] h-[148px]"
                            src={"https://picsum.photos/200"}
                            alt=""
                          />
                          <span>
                            <h4 className="">{item?.title}</h4>
                            {
                              item.narrator?.map(el => (
                                <p>{el.name}</p>
                              ))
                            }
                          </span>
                        </span>
                          <h2>{item?.price} som
                            <img className="h-[22px] cursor-pointer" onClick={() => changeRemoveBuyBook(item.id)} src={trash} alt="" />
                          </h2>
                      </div>
                  ))}
              </div>
              <div className={styles.box}>
                <div className={styles.items}>
                  <div className={styles.item}>
                    Kitap ({bookBuy.length}) <span>{totalSum} som</span>
                  </div>
                </div>
                <div className={styles.total}>
                  Jámi <span>{totalSum} som</span>
                </div>
                <div className={styles.btns}>
                  <button
                    className={selectedPayment === "click" ? styles.active : ""}
                    disabled
                    type="button"
                    onClick={paymentToClick}
                  >
                    <img src={click} alt="image" />
                  </button>

                  <button
                    disabled={books.length === 0}
                    className={selectedPayment === "payme" ? styles.active : ""}
                    type="button"
                    onClick={paymentToPayme}
                  >
                    <img src={payme} alt="image" />
                  </button>

                  <button
                    className={selectedPayment === "uzum" ? styles.active : ""}
                    disabled
                    type="button"
                    onClick={paymentToUzum}
                  >
                    <img src={uzum} alt="image" />
                  </button>
                </div>
                <div className={styles.submit}>
                  <button
                    disabled={!bookBuy.length}
                    onClick={clickToBuy}
                  >
                    Tólew <img src={arrow} alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
    </section>
  );
};

export { Payment };
