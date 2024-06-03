import { useAppDispatch, useAppSelector } from "@/hooks";
import { Form, Rate, message } from "antd";
import userImg from "@/images/user.png";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePostReportMutation } from "@/services";
import { IPostReview } from "@/services/index.interface";
import { useForm } from "antd/es/form/Form";

const BookReport = () => {
  const { token } = useAppSelector((store) => store.auth);
  const [form] = useForm();
  const { mutate: post, isSuccess } = usePostReportMutation();
  const { slug } = useParams();
  const [rating, setRating] = useState(4);

  const onPost = (_values: IPostReview) => {
    post({
      ..._values,
      slug: `${slug}`,
      rating: rating,
    });
    form.resetFields();
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Pikir bildirildi!");
    }
  }, [isSuccess, post]);

  return (
    <div className="py-[30px] bg-[#d7e7f8]">
      <div className="container">
        {token ? (
          <Form
            form={form}
            onFinish={onPost}
            className="flex flex-col gap-y-[30px]"
          >
            <div className="flex items-center gap-[30px] px-[10%]">
              <h1 className="text-[24px] font-semibold leading-[130%]">
                Pikir qaldiriw
              </h1>
              <Rate onChange={(e) => setRating(e)} defaultValue={rating} />
            </div>
            <div className="px-[10%] flex items-start justify-center gap-[24px]">
              <img className="h-[54px]" src={userImg} alt="" />
              <Form.Item className="w-full" name={"text"} required>
                <TextArea
                  className="report-text-area"
                  placeholder="Pikir qaldirin'..."
                  rows={1}
                  autoSize
                  required
                />
              </Form.Item>
              <button type="submit" className="report-btn">
                Sholiw
              </button>
            </div>
          </Form>
        ) : (
          <h1 className="report-h2">
            Pikir qaldırıw ushın, dáslep, akkauntıńızǵa kiriwińiz kerek boladı
          </h1>
        )}
      </div>
    </div>
  );
};

export { BookReport };
