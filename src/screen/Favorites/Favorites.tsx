import { useAppDispatch, useAppSelector } from "@/hooks";
import { IBookSlug, Image } from "@/services/index.interface";
import { addCart, addFavorites } from "@/store/index.actions";
import no_photo from "@/images/no_photo.jpg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useAppSelector((store) => store.favorite);
  const [active, setActive] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  function changeCart(data: IBookSlug) {
    dispatch(addCart(data));
  }
  function changeFavorite(data: IBookSlug) {
    dispatch(addFavorites(data));
    setActive(!active);
  }


  return (
    <>
      <section className="w-full min-h-screen">
        <div className="container">
          <h1 className="category-h1">Saylandılar</h1>
          <div className="my-[30px] flex gap-x-[20px] gap-y-[30px] flex-start flex-wrap">
            {favorites.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  navigate(`/book/${item?.slug}`, { replace: true });
                }}
                className="book-card"
              >
                <div className="book-card-img">
                  {item?.image?.map((el: Image) => (
                    <img
                      key={el.id}
                      src={`${el.image_url ? el.image_url : no_photo}`}
                      alt={el.file_name}
                    />
                  ))}
                </div>
                <div className="book-card-wrapper">
                  <div className="card-title">
                    <h3>{item?.title}</h3>
                    <i
                      onClick={() => changeFavorite(item)}
                      className={`bx ${active ? "bxs" : "bx"}-heart`}
                    ></i>
                  </div>
                  <div className="card-buttons">
                    <div className="card-vision">
                      <i className="bx bx-show-alt"></i>
                      <p>{item?.quantity}</p>
                    </div>
                    <button className="card-button-listening">Tıńlaw</button>
                    <button
                      onClick={() => changeCart(item)}
                      className="card-korzina"
                    >
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
};

export { Favorites };
