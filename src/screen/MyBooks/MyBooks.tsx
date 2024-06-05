import { useAppSelector } from "@/hooks";
import { useGetMyBooks } from "@/services";
import { BookCard, Skeleton } from "@/shared";
import { useNavigate } from "react-router-dom";
import no_photo from "@/images/no_photo.jpg";

const MyBooks = () => {
  const { token } = useAppSelector((store) => store.auth);
  const { data, isLoading } = useGetMyBooks();
  const navigate = useNavigate();

  return (
    <>
      <section className="my-book w-full h-screen">
        <div className="container">
          {token ? (
            <>
              <h1 className="category-h1">Meniń kitaplarım</h1>
              {data?.length === 0 && (
                <h1 className="text-[1.5rem] font-bold">Sizde kitaplar joq</h1>
              )}
              <div className="my-[30px] flex gap-x-[20px] gap-y-[30px] flex-start flex-wrap">
                {isLoading ? (
                  [...Array(4)].map((_, i) => <Skeleton key={i} />)
                ) : (
                  <>
                    {data?.map((item) => (
                      <BookCard key={item.slug} {...item}/>
                    ))}
                  </>
                )}
              </div>
            </>
          ) : (
            <h1 className="flex items-center justify-center text-[2em] font-semibold h-[55vh]">
              Error 404. Page not found
            </h1>
          )}
        </div>
      </section>
    </>
  );
};

export { MyBooks };
