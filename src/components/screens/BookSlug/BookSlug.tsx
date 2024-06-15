import { useAppSelector } from "@/hooks";
import { Spin } from "antd";
import { BookActions } from "./BookActions";
import { BookVotes } from "./BookVotes";
import { IAuthor, IBookSlug, ICategory } from "@/services/index.interface";
import { FC } from "react";
import { BkNoPhoto } from "@/assets/images";

interface IBookSlugProps {
  data: IBookSlug | undefined,
  isLoading: boolean,
  author: IAuthor[] | undefined,
  category: ICategory[] | undefined
}

const BookSlug:FC<IBookSlugProps> = ({author, category, data, isLoading}) => {
  const { token } = useAppSelector((store) => store.auth);

  return (
    <>
      <section className="w-full min-h-screen px-[5%] py-[60px]">
        <Spin spinning={isLoading}>
            <div className="flex gap-[75px] max-[850px]:flex-col max-[850px]:gap-[40px]">
              <img className="w-[360px] rounded-[16px] object-cover max-[1300px]:w-[30vw] max-[850px]:w-[80%] max-[850px]:mx-auto max-[400px]:w-full" src={data?.image[0] ? data.image[0].image_url : BkNoPhoto} alt='book image' />
              {data &&
                <div key={data.id} className="flex flex-col gap-y-[30px] w-[70%] max-[850px]:w-full">
                  <h1 style={{fontSize: 'calc(36px + 12 * (100vw - 320px) / 1280)'}} className="font-semibold break-all leading-[130%] pr-[30px]first-letter:uppercase">
                    {data.title}
                  </h1>
                  {author?.map((item: IAuthor) => (
                    <h4 style={{fontSize: 'calc(16px + 4 * (100vw - 320px) / 1280)'}} className="leading-[130%] first-letter:uppercase">
                      {item.name}
                    </h4>
                  ))}
                  <p style={{fontSize: 'calc(12px + 4 * (100vw - 320px) / 1280)'}} className="leading-[150%]">{data.description}</p>
                  <div className="flex items-center gap-[8px]">
                    {category?.map((item: ICategory) => (
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
