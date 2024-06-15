import { axiosClassic } from "@/api/axios.interceptors";
import { UiButtonCart } from "@/components/ui";
import { UiButtonAction } from "@/components/ui/button/UiButtonAction/UiButtonAction";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IBookSlug } from "@/services/index.interface";
import {
  addBuyBook,
  addCart,
  addFavorites,
  clearBuyBook,
  removeCart,
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
  function changeRemoveCart (data: IBookSlug) {
    dispatch(removeCart(data))
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

  const handleShare = () => {
    navigator.share({
      title: `${data?.title}`,
      text: `${data?.description}`,
      url: `${axiosClassic}/book/${data?.slug}`,
    });
  };

  return (
    <div className="flex items-center flex-wrap gap-[16px]">
      {token ? (
        <>
          <UiButtonAction
            onClick={handleClickListen}
            size="large"
            className="flex items-center gap-[10px] font-semibold leading-[130%] duration-200 hover:opacity-80"
          >
            <i className="bx bx-headphone text-[24px]"></i>
            Tıńlap kóriw
          </UiButtonAction>
          <UiButtonAction
            onClick={buyBook}
            size="large"
            className="flex items-center gap-[10px] font-semibold leading-[130%] duration-200 hover:opacity-80"
          >
            <i className="bx bx-credit-card text-[24px]"></i>
            Satip aliw
          </UiButtonAction>
          {!isCart ? (
            <UiButtonCart
              onClick={() => changeCart(data)}
              size="large"
              className="flex items-center gap-[10px] font-semibold leading-[130%] duration-200 hover:opacity-80"
            >
              <i className="bx bxs-cart-alt text-[24px]"></i>
              Sebetke saliw
            </UiButtonCart>
          ) : (
            <UiButtonCart
              onClick={() => changeRemoveCart(data)}
              size="large"
              className="flex items-center gap-[10px] font-semibold leading-[130%] duration-200 opacity-80 hover:text-white"
            >
              Sebetten oshiriw
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
            onClick={handleShare}
            size="large"
            className="flex items-center gap-[10px] font-semibold leading-[130%] duration-200 hover:opacity-80"
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
            className="flex items-center gap-[10px] font-semibold leading-[130%] duration-200 hover:opacity-80 hover:text-white"
          >
            <i className="bx bx-credit-card text-[24px]"></i>
            Satip aliw
          </UiButtonAction>
          <button className="flex items-center text-[#ff9e30] duration-200 hover:opacity-80 font-light leading-[130%]">
            <i className="bx bx-heart text-[34px]"></i>
          </button>
          <UiButtonAction
            onClick={handleShare}
            size="large"
            className="flex items-center gap-[10px] font-semibold leading-[130%] duration-200 hover:opacity-80"
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
