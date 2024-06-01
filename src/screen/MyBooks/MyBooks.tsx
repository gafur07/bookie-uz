import {useAppSelector} from "@/hooks";

const MyBooks = () => {
  const { token } = useAppSelector((store) => store.auth);
  const { mybooks } = useAppSelector((store) => store.myBook);

  return (
    <>
      <section className="my-book w-full h-screen">
        <div className="container">
          {token ? (
            <>
            <h1 className="category-h1">Meniń kitaplarım</h1>
            <div>
                {mybooks.length === 0 && (
                    <h1 className="text-[1.5rem] font-bold">
                      Sizde kitaplar joq
                    </h1>
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

export {MyBooks};
