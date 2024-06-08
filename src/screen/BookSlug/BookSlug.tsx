import { useAppSelector } from "@/hooks";
import { Spin } from "antd";
import { BookActions } from "./BookActions";
import { BookVotes } from "./BookVotes";
import "./book.Slug.scss";
import { IAuthor, IBookSlug, ICategory } from "@/services/index.interface";
import { FC } from "react";

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
      <section className="book_slug">
        <Spin spinning={isLoading}>
            <div className="slug_wrapper">
              <div className="slug-img">
                <img
                  src="https://picsum.photos/400"
                  alt=""
                />
              </div>
              {data &&
                <div className="slug-text">
                  <h1 className="slug-h1 first-letter:uppercase">
                    {data.title}
                  </h1>
                  {author?.map((item: IAuthor) => (
                    <h4 className="slug-author first-letter:uppercase">
                      {item.name}
                    </h4>
                  ))}
                  <p className="slug-description">{data.description}</p>
                  <div className="slug-category">
                    {category?.map((item: ICategory) => (
                      <span className="first-letter:uppercase!important">
                        {item?.name}
                      </span>
                    ))}
                  </div>
                  <h2 className="slug-price">{data?.price} som</h2>
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
