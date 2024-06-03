import { UiButtonCart } from "@/components/ui";
import { UiButtonAction } from "@/components/ui/button/UiButtonAction/UiButtonAction";
import { useAppSelector } from "@/hooks";
import { useNavigate, useParams } from "react-router-dom";

const BookActions = () => {
  const { token } = useAppSelector((store) => store.auth);
  const navigate = useNavigate()
  const {slug} = useParams()
  const handleClickListen = () => {
    if(token) {
      navigate(`/audiobook/${slug}`, {replace: true})
    } else {
      navigate('/login', {replace: true})
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
            <UiButtonAction size="large" className="ui-btn-action ui-btn-action-text">
              <i className="bx bx-credit-card text-[24px]"></i>
                Satip aliw
            </UiButtonAction>
            <UiButtonCart size="large" className="ui-btn-action ui-btn-cart">
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
            <UiButtonAction size="large" className="ui-btn-action ui-btn-action-text">
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
