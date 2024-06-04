import { UiButtonCart } from "@/components/ui";
import { UiButtonAction } from "@/components/ui/button/UiButtonAction/UiButtonAction";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IBookSlug } from "@/services/index.interface";
import { addBuyBook, addCart, clearBuyBook } from "@/store/index.actions";
import { message } from "antd";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";


interface IActionsBook {
  data: IBookSlug
}


const BookActions:FC<IActionsBook> = ({ data }) => {
  const { token } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {slug} = useParams()
  const handleClickListen = () => {
    if(token) {
      navigate(`/audiobook/${slug}`, {replace: true})
    } else {
      navigate('/login', {replace: true})
    }
  }

  function changeCart(data: IBookSlug) {
    dispatch(addCart(data))
  }

  const buyBook = () => {
    if(token) {
      dispatch(clearBuyBook())
      data && dispatch(addBuyBook(data))
      navigate('/payment', {replace: true})
    } else {
      navigate('/login', { replace: true })
      message.info('Kitap satıp alıw ushın, dáslep, akkauntıńızǵa kiriwińiz kerek boladı')
    }
  }

  return (
      <div className="flex gap-[16px] flex-wrap items-center">
        {token ? (
          <>
            <UiButtonAction onClick={handleClickListen} size="large" className="ui-btn-action ui-btn-action-text">
              <i className="bx bx-headphone text-[24px]"></i>
                Tıńlap kóriw
            </UiButtonAction>
            <UiButtonAction onClick={buyBook} size="large" className="ui-btn-action ui-btn-action-text">
              <i className="bx bx-credit-card text-[24px]"></i>
                Satip aliw
            </UiButtonAction>
            <UiButtonCart onClick={() => changeCart(data)} size="large" className="ui-btn-action ui-btn-cart">
              <i className="bx bxs-cart-alt text-[24px]"></i>
                Sebetke saliw
            </UiButtonCart>
            <button className="text-[#ff9e30] hover:opacity-80 duration-200">
              <i className="bx bx-heart text-[34px]"></i>
            </button>
            <UiButtonAction size="large" className="ui-btn-action ui-btn-action-text">
              <i className="bx bxs-share-alt text-[24px]"></i>
                Úlesiw
            </UiButtonAction>
          </>
        ) : (
          <>
            <UiButtonAction onClick={buyBook} size="large" className="ui-btn-action ui-btn-action-text">
              <i className="bx bx-credit-card text-[24px]"></i>
                Satip aliw
            </UiButtonAction>
            <button className="flex items-center text-[#ff9e30] duration-200 hover:opacity-80 font-light leading-[130%]">
              <i className="bx bx-heart text-[34px]"></i>
            </button>
            <UiButtonAction size="large" className="ui-btn-action ui-btn-action-text">
              <i className="bx bxs-share-alt text-[24px]"></i>
                Úlesiw
            </UiButtonAction>
          </>
        )}
      </div>
  );
};

export { BookActions };
