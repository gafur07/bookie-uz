import { FC } from "react";
import { useAppSelector } from "@/hooks";
import { BookCard } from "@/components/shared";

const Favorites: FC = () => {
  const { favorites } = useAppSelector((store) => store.favorite);
 
  return (
    <>
      <section className="w-full min-h-screen px-[5%] py-[30px]">
          <h1 className="category-h1">Saylandılar</h1>
          <div className="my-[30px] flex gap-x-[20px] gap-y-[30px] flex-start flex-wrap">
            {favorites.map((item) => (
              <BookCard key={item.slug} {...item} />
            ))}
          </div>
      </section>
    </>
  );
};

export { Favorites };
