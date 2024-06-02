import { useAppSelector } from "@/hooks";
import { Spin } from "antd";
import { BookActions } from "./BookActions";
import { BookVotes } from "./BookVotes";
import { IAuthor, ICategory } from "@/store/index.interface";
import "./book.Slug.scss";

const BookSlug = () => {
  const { bookSlug, category, author, loading } = useAppSelector((store) => store.slug);
  const { token } = useAppSelector((store) => store.auth);

  return (
    <>
      <section className="w-full min-h-screen">
        <Spin spinning={loading}>
          <div className="container">
            <div className="flex gap-[75px] py-[60px]">
              <div className="slug-img w-[30%]">
                <img
                  className="w-[415px] h-full shadow-lg"
                  src="https://picsum.photos/400"
                  alt=""
                />
              </div>
              {bookSlug &&
                <div className="slug-text flex flex-col gap-y-[30px] w-[70%]">
                  <h1 className="slug-h1 first-letter:uppercase">
                    {bookSlug.title}
                  </h1>
                  {author.map((item: IAuthor) => (
                    <h4 className="slug-author first-letter:uppercase">
                      {item.name}
                    </h4>
                  ))}
                  <p className="slug-description">{bookSlug.description}</p>
                  <div className="slug-category">
                    {category.map((item: ICategory) => (
                      <span className="first-letter:uppercase!important">
                        {item?.name}
                      </span>
                    ))}
                  </div>
                  <h2 className="slug-price">{bookSlug?.price} som</h2>
                  <BookActions />
                  {token ? <BookVotes /> : ""}
                </div>
              }
            </div>
          </div>
        </Spin>
      </section>
    </>
  );
};

export { BookSlug };
