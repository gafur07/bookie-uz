import { Rate, Spin } from "antd";
import { IReviews } from "@/services/index.interface";
import { FC } from "react";
import { BkUser } from "@/assets/images";
import { useGetBookBySlug } from "@/services";
import { useParams } from "react-router-dom";
import { Container } from "@/components/shared";

const BookComment: FC = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetBookBySlug(slug);

  const reviews = data ? data.reviews : [];

  return (
    <Spin spinning={isLoading}>
      <Container className="container py-[60px]">
        <div className="py-[60px]">
          <h1
            style={{ fontSize: "calc(22px + 14 * (100vw - 320px) / 1280)" }}
            className="font-medium leading-[100%]"
          >
            Paydalaniwshilar pikiri
          </h1>
          <hr className="my-[30px] border-[#a1a1a1] border-1" />
          {reviews.length ? (
            <>
              <div className="flex flex-col items-start justify-start gap-y-[24px]">
                {reviews?.map((item: IReviews, i: number) => (
                  <div
                    className="flex gap-[24px] opacity-75 pt-[30px] px-[10%] max-[600px]:px-0"
                    key={i}
                  >
                    <img className="h-[54px]" src={BkUser} alt="" />
                    <div className="bg-[#a1a1a126] py-[16px] px-[24px] pb-[24px] rounded-[16px] flex flex-col gap-y-[20px]">
                      <span className="flex items-center gap-[14px] max-w-[400px]:flex-col">
                        <h1 className="review-h1">{item.name}</h1>
                        <Rate disabled value={item.rating} />
                      </span>
                      <p
                        style={{
                          fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)",
                        }}
                        className="leading-[150%] max-w-[800px] break-all"
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <h1 className="text-center mb-[100px] font-semibold">
              Házirshe hesh kim pikir qaldırmadi!
            </h1>
          )}
        </div>
      </Container>
    </Spin>
  );
};

export { BookComment };
