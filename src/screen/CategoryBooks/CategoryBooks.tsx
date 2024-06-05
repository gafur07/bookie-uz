import {useParams } from "react-router-dom";
import { useGetCategory } from "@/services/category/category.api";
import { BookCard, Skeleton } from "@/shared";
import "./category-book.scss";

function CategoryBooks() {
  const { name } = useParams();
  const { data, isLoading } = useGetCategory(`${name}`);

  return (
    <>
      <section className="category-book w-full min-h-screen py-[30px] px-[5%]">
        <h1 className="category-h1">{data?.name}</h1>
        <div className="my-[30px] flex gap-x-[20px] gap-y-[30px] flex-start flex-wrap">
          {isLoading ? (
            [...Array(4)].map((_, i) => <Skeleton key={i} />)
          ) : (
            <>
              {data?.books?.map((item) => (
                <BookCard key={item.slug} {...item}/>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export { CategoryBooks };
