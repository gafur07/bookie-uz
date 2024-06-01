import { useAppDispatch, useAppSelector } from "@/hooks";
import { getBookSlug } from "@/store/bookSlug/book.slug.action";
import { Spin } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./book.Slug.scss";
import { BookActions } from "./BookActions";
import { BookVotes } from "./BookVotes";
const BookSlug = () => {
  const { bookSlug, loading } = useAppSelector((store) => store.slug);
  const { token } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  console.log(bookSlug);

  useEffect(() => {
    dispatch(getBookSlug({ slug: `${slug}` }));
  }, [slug]);

  console.log(typeof bookSlug);

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
              <div className="slug-text flex flex-col gap-y-[30px] w-[70%]">
                <h1 className="slug-h1 first-letter:uppercase">
                  {bookSlug.title}
                </h1>
                {bookSlug.author.map((item: any) => (
                  <h4 className="slug-author first-letter:uppercase">
                    {item.name}
                  </h4>
                ))}
                <p className="slug-description">{bookSlug.description}</p>
                <div className="slug-category">
                  {bookSlug.categroy.map((item: any) => (
                    <span className="first-letter:uppercase!important">
                      {item?.name}
                    </span>
                  ))}
                </div>
                <h2 className="slug-price">{bookSlug.price} som</h2>
                <BookActions />
                {token ? <BookVotes /> : ""}
              </div>
            </div>
          </div>
        </Spin>
      </section>
    </>
  );
};

export { BookSlug };
