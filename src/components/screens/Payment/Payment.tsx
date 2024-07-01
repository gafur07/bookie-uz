import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { removeBuyBook } from "@/store/index.actions";
import { IBookSlug } from "@/services/index.interface";
import { BkChevron, BkNoPhoto, BkTrash } from "@/assets/images";
import { Container } from "@/components/shared";
import { UiTitle } from "@/components/ui/title/UiTitle/UiTitle";
import { usePostPaymentMutation } from "@/services/payment/payment.api";
import { Button, ConfigProvider, Form, Radio, Space } from "antd";
import { formatPrice, paymentItems } from "@/utils";
import { PaymentModal } from "./PaymentModal/PaymentModal";
import { FormProps } from "antd/lib";

const Payment: React.FC = () => {
  const [form] = Form.useForm();
  const [totalSum, setTotalSum] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const { bookBuy } = useAppSelector((store) => store.buyBook);
  const dispatch = useAppDispatch();
  const [books, setBooks] = useState<number[]>([]);
  const { data, mutate: postPayment, isSuccess, isLoading } = usePostPaymentMutation();

  const onFinish: FormProps<{
    payment_id: number;
  }>["onFinish"] = (values) => {
    if (bookBuy.length === 0) {
      return;
    }
    postPayment({
      books: books,
      payment_id: values.payment_id,
    });
  };

  const onToggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const changeRemoveBuyBook = (data: IBookSlug) => {
    dispatch(removeBuyBook(data));
  };

  useEffect(() => {
    bookBuy.map((item) => {
      if (item.id !== undefined) {
        setBooks((prev) => [...prev, item.id]);
      }
    });
    setTotalSum(bookBuy.reduce((a, b) => a + Number(b.price), 0));
  }, [setTotalSum, bookBuy]);

  useEffect(() => {
    if (openModal) return;
    if (isSuccess) {
      setOpenModal(true);
    }
  }, [isSuccess, postPayment]);
  return (
    <section className="py-[30px] min-h-screen">
      <Container>
        <UiTitle>Satip aliw</UiTitle>
        <div className="flex justify-between mt-[30px] items-start gap-5 max-[1000px]:flex-col max-[1000px]:gap-y-[40px]">
          <div className="w-[685px] flex flex-col gap-y-[24px] max-[700px]:w-full">
            {bookBuy.length ? bookBuy.map((item: IBookSlug) => (
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
                    <h4 className="font-medium leading-[150%] pr-[20px]">
                      {item?.title}
                    </h4>
                  </span>
                </span>
                <h2 className="flex items-center whitespace-nowrap gap-[30px] text-[#202020bf] leading-[130%] font-semibold">
                  {item?.price} som
                  <img
                    className="h-[22px] cursor-pointer"
                    onClick={() => changeRemoveBuyBook(item)}
                    src={BkTrash}
                    alt=""
                  />
                </h2>
              </div>
            )) : (
              <h1>Essat joq</h1>
            )}
          </div>
          <div className="w-[420px] flex flex-col p-[24px] gap-y-[24px] border border-[#83a5c5] rounded-[16px] bg-[#f9fcff] max-[700px]:w-full max-[700px]:text-center max-[700px]:mt-[30px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between w-full text-[14px] font-medium leading-[130%]">
                Kitap ({bookBuy.length}){" "}
                <span>{formatPrice(Number(totalSum))} som</span>
              </div>
            </div>
            <div className="flex items-center text-xl justify-between w-full leading-[130%] pt-[10px] border-t border-t-[#d7e7f8]">
              Jámi <span>{formatPrice(Number(totalSum))} som</span>
            </div>
            <div className="flex items-center justify-start gap-[12px]">
              <Form form={form} onFinish={onFinish}>
                <Form.Item
                  name="payment_id"
                  rules={[{ required: true, message: "Tolew jolin saylan'" }]}
                >
                  <Radio.Group
                    optionType="button"
                    className="flex items-center justify-center gap-[12px] my-4"
                  >
                    <Space>
                      {paymentItems.map(({ value, icon, disabled }) => (
                        <Radio
                          required
                          value={value}
                          className={`h-[35px] w-[120px] max-sm:w-full px-[16px] rounded-[100px] flex items-center justify-center`}
                          disabled={disabled}
                        >
                          <img src={icon} alt="image" />
                        </Radio>
                      ))}
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </Form>
            </div>
           <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#FF9E30",
                borderRadius: 16,
                borderRadiusLG: 16
              },
              components: {
                Button: {
                  colorPrimary: "#FF9E30",
                  colorBgContainerDisabled: "#ffbe84",
                  colorTextDisabled: "#fff",
                }
              }
            }}
           >
           <Button
            type="primary"
              className={`text-white text-xl h-12 flex items-center rounded-[16px] justify-center font-semibold leading-[130%] gap-[8px] p-[16px] hover:opacity-85 duration-200 ${
                bookBuy.length === 0
                ? "bg-[#ffbe84] disabled:cursor-not-allowed hover:opacity-100"
                : "bg-primaryOrange"
              }`}
              block
              loading={isLoading}
              disabled={bookBuy.length === 0}
              onClick={() => form.submit()}
              icon={<img src={BkChevron} alt="right" />}
              iconPosition="end"
            >
              Tólew 
            </Button>
           </ConfigProvider>
          </div>
        </div>
        <PaymentModal
          data={data?.data}
          openModal={openModal}
          onToggleModal={onToggleModal}
        />
      </Container>
    </section>
  );
};

export { Payment };
