import { useParams } from "react-router-dom";
import "./category-book.scss"


function CategoryBooks() {
  const params = useParams();

  return (
    <>
      <section className="category-book w-full h-screen">
        <div className="container">
          <h1 className="category-h1">{params.name}</h1>
        </div>
      </section>
    </>
  );
}

export default CategoryBooks;
