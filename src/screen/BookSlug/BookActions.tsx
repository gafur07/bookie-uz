import { UiButtonCart } from "@/components/ui";
import { UiButtonAction } from "@/components/ui/button/UiButtonAction/UiButtonAction";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IBookSlug } from "@/services/index.interface";
import {
  addBuyBook,
  addCart,
  addFavorites,
  clearBuyBook,
  removeFavorites,
} from "@/store/index.actions";
import { message } from "antd";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface IActionsBook {
  data: IBookSlug;
}

const BookActions: FC<IActionsBook> = ({ data }) => {
  const { token } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((store) => store.favorite);
  const { basket } = useAppSelector((store) => store.cart);
  const isFav = favorites.some((item) => item.slug === data.slug);
  const isCart = basket.some((item) => item.slug === data.slug);
  const navigate = useNavigate();
  const { slug } = useParams();
  const handleClickListen = () => {
    if (token) {
      navigate(`/audiobook/${slug}`, { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  };

  function changeCart(data: IBookSlug) {
    dispatch(addCart(data));
  }

  function changeFavorite(data: IBookSlug) {
    dispatch(addFavorites(data));
  }

  function changeFavoriteRemove(data: IBookSlug) {
    dispatch(removeFavorites(data));
  }

  const buyBook = () => {
    if (token) {
      dispatch(clearBuyBook());
      data && dispatch(addBuyBook(data));
      navigate("/payment", { replace: true });
    } else {
      navigate("/login", { replace: true });
      message.info(
        "Kitap satıp alıw ushın, dáslep, akkauntıńızǵa kiriwińiz kerek boladı"
      );
    }
  };

  return (
    <div className="buttons">
      {token ? (
        <>
          <UiButtonAction
            onClick={handleClickListen}
            size="large"
            className="ui-btn-action ui-btn-action-text"
          >
            <i className="bx bx-headphone text-[24px]"></i>
            Tıńlap kóriw
          </UiButtonAction>
          <UiButtonAction
            onClick={buyBook}
            size="large"
            className="ui-btn-action ui-btn-action-text"
          >
            <i className="bx bx-credit-card text-[24px]"></i>
            Satip aliw
          </UiButtonAction>
          {!isCart ? (
            <UiButtonCart
              onClick={() => changeCart(data)}
              size="large"
              className="ui-btn-action ui-btn-cart"
            >
              <i className="bx bxs-cart-alt text-[24px]"></i>
              Sebetke saliw
            </UiButtonCart>
          ) : (
            <UiButtonCart
              onClick={() => navigate('/cart', {replace: true})}
              size="large"
              className="ui-btn-action ui-btn-cart"
            >
              Sebetke otiw
            </UiButtonCart>
          )}


          <button className="text-[#ff9e30] hover:opacity-80 duration-200">
            {isFav ? (
              <i
                onClick={() => changeFavoriteRemove(data)}
                className="bx bxs-heart text-[34px]"
              ></i>
            ) : (
              <i
                onClick={() => changeFavorite(data)}
                className="bx bx-heart text-[34px]"
              ></i>
            )}
          </button>
          <UiButtonAction
            size="large"
            className="ui-btn-action ui-btn-action-text"
          >
            <i className="bx bxs-share-alt text-[24px]"></i>
            Úlesiw
          </UiButtonAction>
        </>
      ) : (
        <>
          <UiButtonAction
            onClick={buyBook}
            size="large"
            className="ui-btn-action ui-btn-action-text"
          >
            <i className="bx bx-credit-card text-[24px]"></i>
            Satip aliw
          </UiButtonAction>
          <button className="flex items-center text-[#ff9e30] duration-200 hover:opacity-80 font-light leading-[130%]">
            <i className="bx bx-heart text-[34px]"></i>
          </button>
          <UiButtonAction
            size="large"
            className="ui-btn-action ui-btn-action-text"
          >
            <i className="bx bxs-share-alt text-[24px]"></i>
            Úlesiw
          </UiButtonAction>
        </>
      )}
    </div>
  );
};

export { BookActions };
