import { useNavigate, useParams } from "react-router-dom";
import "./category-book.scss";
import { useAppDispatch } from "@/hooks";
import { useState } from "react";
import { useGetCategory } from "@/services/category/category.api";
import { addFavorites } from "@/store/favorites/favorites.slice";
import { Skeleton } from "@/shared";
import { addCart } from "@/store/index.actions";
import { IBookSlug, Image } from "@/services/index.interface";
import no_photo from "@/images/no_photo.jpg"

function CategoryBooks() {
  const { name } = useParams();
  const { data, isLoading } = useGetCategory(`${name}`);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);

  function changeCart(data: IBookSlug) {
    dispatch(addCart(data));
  }
  function changeFavorite(data: IBookSlug) {
    dispatch(addFavorites(data));
    setActive(!active);
  }

  console.log(data?.books);

  return (
    <>
      <section className="category-book w-full min-h-screen">
        <div className="container">
          <h1 className="category-h1">{data?.name}</h1>
          <div className="my-[30px] flex gap-x-[20px] gap-y-[30px] flex-start flex-wrap">
            {isLoading ? (
              [...Array(4)].map((_, i) => <Skeleton key={i} />)
            ) : (
              <>
                {data?.books?.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      navigate(`/book/${item?.slug}`, { replace: true });
                    }}
                    className="book-card"
                  >
                    <div className="book-card-img">
                      {item?.image?.map((el: Image) => (
                        <img key={el.id} src={`${ el.image_url ? el.image_url : no_photo}`} alt={el.file_name} />
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
                        <button className="card-button-listening">
                          Tıńlaw
                        </button>
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
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export { CategoryBooks };
