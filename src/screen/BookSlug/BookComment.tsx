import { Rate, Spin } from "antd";
import userImg from "../../images/user.png";
import { IReviews } from "@/services/index.interface";
import { FC } from "react";
interface ICommentProps {
  isLoading: boolean,
  reviews: IReviews[]
}

const BookComment:FC<ICommentProps>= ({isLoading, reviews}) => {
  console.log(reviews);
  return (
    <Spin spinning={isLoading}>
      <div className="container py-[60px]">
        <h1 className="comment-h1">Paydalaniwshilar pikiri</h1>
        <hr className="my-[30px] border-[#a1a1a1] border-1" />
        {reviews?.length ? (
          <>
            <div className="flex flex-col items-start justify-start gap-y-[24px]">
              {reviews?.map((item: IReviews, i: number) => (
                <div
                  className="flex gap-[24px] opacity-75 pt-[30px] px-[10%]"
                  key={i}
                >
                  <img className="h-[54px]" src={userImg} alt="" />
                  <div className="bg-[#a1a1a126] py-[16px] px-[24px] pb-[24px] rounded-[16px] flex flex-col gap-y-[20px]">
                    <span className="flex items-center gap-[14px]">
                      <h1 className="review-h1">{item.name}</h1>
                      <Rate disabled value={item.rating} />
                    </span>
                    <p className="review-text">{item.text}</p>
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
    </Spin>
  );
};

export { BookComment };
