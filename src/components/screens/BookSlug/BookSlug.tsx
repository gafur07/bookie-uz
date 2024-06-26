import { useAppSelector } from "@/hooks";
import { Spin } from "antd";
import { BookActions } from "./BookActions";
import { BookVotes } from "./BookVotes";
import { IAuthor, ICategory } from "@/services/index.interface";
import { FC } from "react";
import { BkNoPhoto } from "@/assets/images";
import { useParams } from "react-router-dom";
import { useGetBookBySlug } from "@/services";
import { Container } from "@/components/shared";

const BookSlug: FC = () => {
  const { token } = useAppSelector((store) => store.auth);

  const { slug } = useParams();
  const { data, isLoading } = useGetBookBySlug(slug);

  const author = data ? data.author : [];

  const category = data ? data.category : [];

  return (
      <section className="min-h-screen py-[60px]">  
        <Container>
          <Spin spinning={isLoading}>
            <div
              className="grid mb-[30px] gap-10 grid-cols-30-70 
              max-[1400px]:grid-cols-40-60 
              max-[1400px]:gap-[30px] 
              max-[1000px]:grid-cols-[100%] 
              max-[850px]:gap-[40px] 
              max-[600px]:gap-[20px]'"
            >
              <img
                className="object-cover w-[360px] 
                shadow-md rounded-[16px] 
                max-[1000px]:w-[80%] 
                max-[1000px]:mx-auto"
                src={data?.image[0] ? data.image[0].image_url : BkNoPhoto}
                alt="book image"
              />
              {data && (
                <div
                  key={data.id}
                  className="flex flex-col gap-y-[30px] w-[70%] max-[850px]:w-full"
                >
                  <h1
                    className="font-semibold text-5xl break-all leading-[130%] pr-[30px]first-letter:uppercase"
                  >
                    {data.title}
                  </h1>
                  {author.map((item: IAuthor) => (
                    <h4
                      className="leading-[130%] text-xl first-letter:uppercase"
                    >
                      {item.name}
                    </h4>
                  ))}
                  <p
                    className="leading-[150%] text-md"
                  >
                    {data.description}
                  </p>
                  <div className="flex items-center gap-[8px]">
                    {category.map((item: ICategory) => (
                      <span
                        className="bg-[#651b93b3] text-xs rounded-[100px] py-[5px] px-[12px] text-center font-medium text-white"
                      >
                        {item?.name}
                      </span>
                    ))}
                  </div>
                  <h2
                    // style={{
                    //   fontSize: "calc(22px + 14 * (100vw - 320px) / 1280)",
                    // }}
                    className="font-semibold leading-[100%] text-4xl"
                  >
                    {data?.price} som
                  </h2>
                  <BookActions data={data} />
                  {token ? <BookVotes /> : ""}
                </div>
              )}
            </div>
          </Spin>
        </Container>
      </section>
  );
};

export { BookSlug };
