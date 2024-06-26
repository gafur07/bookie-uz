import { FC } from "react";
import { useAppSelector } from "@/hooks";
import { BookCard, Container } from "@/components/shared";
import { UiTitle } from "@/components/ui/UiTitle/UiTitle";

const Favorites: FC = () => {
  const { favorites } = useAppSelector((store) => store.favorite);

  return (
    <section className="min-h-screen py-[30px]">
      <Container>
        <UiTitle>Saylandılar</UiTitle>
        <div className="my-[30px] flex gap-x-[20px] gap-y-[30px] flex-start flex-wrap">
          {favorites.map((item) => (
            <BookCard key={item.slug} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export { Favorites };
