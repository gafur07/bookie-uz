import { FC } from "react";
import { useAppSelector } from "@/hooks";
import { BookCard, Container } from "@/components/shared";
import { UiTitle } from "@/components/ui";
import { BookList } from "@/components/shared/BookList/BookList";
import { useNavigate } from "react-router-dom";

const Favorites: FC = () => {
  const { favorites } = useAppSelector((store) => store.favorite);
  const navigate = useNavigate();

  return (
    <section className="min-h-screen py-[30px]">
      <Container>
        <UiTitle>Saylandılar</UiTitle>
        {favorites && favorites.length === 0 && (
          <div className="flex flex-col items-center min-h-[50vh] justify-center gap-4">
            <h1 className="text-2xl font-semibold">Házirshe bos</h1>
            <button
              onClick={() => navigate("/")}
              className="bg-primary rounded-[16px] hover:opacity-80 text-white px-[24px] py-[6px]"
            >
              Bas betge qaytiw
            </button>
          </div>
        )}
        <BookList>
          {favorites.map((item) => (
            <BookCard key={item.slug} data={item} showPrice />
          ))}
        </BookList>
      </Container>
    </section>
  );
};

export { Favorites };
