import { useAppSelector } from "@/hooks";

const Favorites = () => {
  const { favorites } = useAppSelector((store) => store.favorite);

  return (
    <>
      <section className="w-full min-h-screen">
        <div className="container">
          <h1 className="category-h1">Saylandılar</h1>
          {favorites.map((item: any) => "")}
          </div>
      </section>
    </>
  );
};

export { Favorites };
