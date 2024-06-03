import { useNavigate, useParams } from "react-router-dom";
import "./category-book.scss";
import { useAppDispatch, useAppSelector } from "@/hooks"
import { useState } from "react";
import { addCart } from "@/store/index.actions";
import { useGetCategory } from "@/services/category/category.api";
import { ICartRoot } from "@/store/cart/cart.interface";
import { addFavorites } from "@/store/favorites/favorites.slice";

function CategoryBooks() {
  const params = useParams()
  const { data, isLoading, isSuccess, isError } = useGetCategory({name: `${params.name}`});
  const { basket } = useAppSelector((store) => store.cart);
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false)

  function addCarFunction(data: ICartRoot) {
    addCart(data)
  }
  function favoriteFunc(data: any) {
    dispatch(addFavorites({ item: data }))
    setActive(!active)
  }

  console.log(data);

  return (
    <>
      <section className="category-book w-full min-h-screen">
        <div className="container">
          <h1 className="category-h1">{data?.name}</h1>
          <div className="my-[30px] flex gap-x-[20px] gap-y-[30px] flex-start flex-wrap">
            {data?.books.map((item: any) => (
              <div onClick={() => {
                navigate(`/book/${item?.slug}`, { replace: true })
              }} key={item.id} className="book-card">
                <div className="book-card-img">
                  <img src={`${item?.image?.image_url}`} alt="" />
                </div>
                <div className="book-card-wrapper">
                  <div className="card-title">
                    <h3>{item?.title}</h3>
                    <i onClick={() => favoriteFunc(item)} className={`bx ${active ? "bxs" : "bx"}-heart`}></i>
                  </div>
                  <div className="card-buttons">
                    <div className="card-vision">
                      <i className="bx bx-show-alt"></i>
                      <p>{item?.quantity}</p>
                    </div>
                    <button className="card-button-listening">Tıńlaw</button>
                    <button onClick={(() => addCarFunction(item))} className="card-korzina">
                      <i className="bx bxs-cart-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export { CategoryBooks };
