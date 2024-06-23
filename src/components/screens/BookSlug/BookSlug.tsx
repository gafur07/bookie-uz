import { useAppSelector } from "@/hooks";
import { Spin } from "antd";
import { BookActions } from "./BookActions";
import { BookVotes } from "./BookVotes";
import { IAuthor, ICategory } from "@/services/index.interface";
import { FC } from "react";
import { BkNoPhoto } from "@/assets/images";
import { useParams } from "react-router-dom";
import { useGetBookBySlug } from "@/services";

const BookSlug:FC = () => {
  const { token } = useAppSelector((store) => store.auth);

  const { slug } = useParams();
  const { data, isLoading } = useGetBookBySlug(slug)

  const author = data ? data.author : []

  const category = data ? data.category : []

  return (
    <>
      <section className="w-full min-h-screen px-[5%] py-[60px]">
        <Spin spinning={isLoading}>
            <div className="grid mb-[30px] grid-cols-30-70 
              max-[1400px]:grid-cols-40-60 
              max-[1400px]:gap-[30px] 
              max-[1000px]:grid-cols-[100%] 
              max-[850px]:gap-[40px] 
              max-[600px]:gap-[20px]'">
              <img className="object-cover w-[360px] 
                shadow-md rounded-[16px] 
                max-[1000px]:w-[80%] 
                max-[1000px]:mx-auto" 
                src={data?.image[0] ? data.image[0].image_url : BkNoPhoto} 
                alt='book image' 
            />
              {data &&
                <div key={data.id} className="flex flex-col gap-y-[30px] w-[70%] max-[850px]:w-full">
                  <h1 style={{fontSize: 'calc(36px + 12 * (100vw - 320px) / 1280)'}} className="font-semibold break-all leading-[130%] pr-[30px]first-letter:uppercase">
                    {data.title}
                  </h1>
                  {author.map((item: IAuthor) => (
                    <h4 style={{fontSize: 'calc(16px + 4 * (100vw - 320px) / 1280)'}} className="leading-[130%] first-letter:uppercase">
                      {item.name}
                    </h4>
                  ))}
                  <p style={{fontSize: 'calc(12px + 4 * (100vw - 320px) / 1280)'}} className="leading-[150%]">{data.description}</p>
                  <div className="flex items-center gap-[8px]">
                    {category.map((item: ICategory) => (
                      <span style={{fontSize: 'calc(8px + 4 * (100vw - 320px) / 1280)'}} className="bg-[#651b93b3] rounded-[100px] py-[5px] px-[12px] text-center font-medium text-white">
                        {item?.name}
                      </span>
                    ))}
                  </div>
                  <h2 style={{fontSize: 'calc(22px + 14 * (100vw - 320px) / 1280)'}} className="font-semibold leading-[100%]">{data?.price} som</h2>
                  <BookActions data={data}/>
                  {token ? <BookVotes /> : ""}
                </div>
              }
            </div>
        </Spin>
      </section>
    </>
  );
};

export { BookSlug };
