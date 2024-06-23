import { useAppSelector } from "@/hooks";
import { Form, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { usePostReportMutation } from "@/services";
import { IPostReview } from "@/services/index.interface";
import { useForm } from "antd/es/form/Form";
import { BkUser } from "@/assets/images";

const BookReport = () => {
  const { token } = useAppSelector((store) => store.auth);
  const [form] = useForm();
  const { mutate: post } = usePostReportMutation();
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

  return (
    <div className="py-[30px] bg-[#d7e7f8] px-[15%] max-[600px]:px-[5%]">
        {token ? (
          <Form
            form={form}
            onFinish={onPost}
            className="flex flex-col gap-y-[30px]"
          >
            <div className="flex items-center gap-[30px] max-[400px]:flex-col max-[400px]:items-start">
              <h1
              style={{fontSize: 'calc(16px + 4 * (100vw - 320px) / 1280)'}}
                className="text-[24px] font-semibold leading-[130%]"
                >
                Pikir qaldiriw
              </h1>
              <Rate onChange={(e) => setRating(e)} defaultValue={rating} />
            </div>
            <div className="flex items-start justify-center gap-[24px] max-[500px]:flex-col">
              <img className="h-[54px]" src={BkUser} alt="" />
              <Form.Item className="w-full textarea" name={"text"} required>
                <TextArea
                  className="w-full rounded-[16px] px-[24px] py-[10px] leading-[150%] max-[500px]:mb-[-24px]"
                  placeholder="Pikir qaldirin'..."
                  rows={1}
                  autoSize
                  required
                  style={{
                    minHeight: '80px',
                    fontSize: 'calc(12px + 4 * (100vw - 320px) / 1280)'
                  }}
                />
              </Form.Item>
              <button type="submit" 
                className="py-[10px] px-[24px] bg-primary font-semibold leading-[130%] text-white h-auto rounded-[16px] shadow-md"
                style={{fontSize: 'calc(12px + 4 * (100vw - 320px) / 1280)'}}
              >
                Sholiw
              </button>
            </div>
          </Form>
        ) : (
          <h1 
            style={{fontSize: 'calc(18px + 6 * (100vw - 320px) / 1280)'}}
            className="font-medium text-center">
            Pikir qaldırıw ushın, dáslep, akkauntıńızǵa kiriwińiz kerek boladı
          </h1>
        )}
      </div>
  );
};

export { BookReport };
