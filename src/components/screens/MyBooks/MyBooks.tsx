import { FC } from "react";
import { useAppSelector } from "@/hooks";
import { useGetMyBooksQuery } from "@/services";
import {
  BookCard,
  BookList,
  BookSkeleton,
  Container,
} from "@/components/shared";
import { UiTitle } from "@/components/ui/title/UiTitle/UiTitle";
import { useNavigate } from "react-router-dom";
import { BkEmptyCart } from "@/assets/images";

const MyBooks: FC = () => {
  const { token } = useAppSelector((store) => store.auth);
  const { data: myBooks, isLoading } = useGetMyBooksQuery();
  const navigate = useNavigate();
  return (
    <section className="my-book min-h-screen py-[30px]">
      <Container>
        <div>
          {token ? (
            <>
              <UiTitle>Meniń kitaplarım</UiTitle>
              {myBooks && myBooks.data.length === 0 && (
                <div className="flex flex-col items-center min-h-[50vh] justify-center gap-4">
                  <img className="m-auto" src={BkEmptyCart} alt="" />
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
                {isLoading
                  ? [...Array(4)].map((_, i) => <BookSkeleton key={i} />)
                  : myBooks &&
                    myBooks.data.map((item) => (
                      <BookCard key={item.slug} data={item} />
                    ))}
              </BookList>
            </>
          ) : (
            <h1 className="flex items-center justify-center text-[2em] font-semibold h-[55vh]">
              Error 404. Page not found
            </h1>
          )}
        </div>
      </Container>
    </section>
  );
};

export { MyBooks };
