import { BkHeartFilled, BkHeartOutline } from "@/assets/images";
import { UiButtonCart, UiButtonAction } from "@/components/ui";
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
import { Flex, message, Modal } from "antd";
import { FC, useState } from "react";
import { FaCreditCard, FaHeadphones } from "react-icons/fa6";
import { IoCart, IoCartOutline, IoShareSocialSharp } from "react-icons/io5";
import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
  VKShareButton,
  VKIcon,
  TwitterShareButton,
  XIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { useNavigate, useParams } from "react-router-dom";
import { BiCopy } from "react-icons/bi";

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
      navigate(`/audiobook/${slug}`);
    } else {
      navigate("/login", { replace: true });
    }
  };
  const copyUrl = `https://booky.uz/book/${data.slug}`;

  const [modalNavigator, setModalNavigator] = useState(false);

  function changeCart(data: IBookSlug) {
    dispatch(addCart(data));
  }

  function changeRemoveCart(data: IBookSlug) {
    dispatch(removeCart(data));
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
      navigate("/payment");
    } else {
      navigate("/login", { replace: true });
      message.info(
        "Kitap satıp alıw ushın, dáslep, akkauntıńızǵa kiriwińiz kerek boladı"
      );
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${data?.title}`,
      text: `${data?.description}`,
      url: `https://booky.uz/book/${data?.slug}`,
    };
    if (navigator.share) {
      navigator.share(shareData);
    } else {
      setModalNavigator(true);
    }
  };

  return (
    <div className="flex items-center flex-wrap gap-[16px]">
      {token ? (
        <>
          <UiButtonAction
            onClick={handleClickListen}
            size="large"
            className="flex items-center gap-2 font-semibold leading-[130%] duration-200 hover:opacity-80"
            icon={<FaHeadphones size={18} />}
          >
            Tıńlap kóriw
          </UiButtonAction>
          <UiButtonAction
            onClick={buyBook}
            size="large"
            icon={<FaCreditCard size={18} />}
            className="flex items-center gap-2 font-semibold leading-[130%] duration-200 hover:opacity-80"
          >
            Satip aliw
          </UiButtonAction>
          {!isCart ? (
            <UiButtonCart
              onClick={() => changeCart(data)}
              size="large"
              icon={<IoCartOutline size={18} />}
              className="flex items-center gap-2 font-semibold leading-[130%] duration-200 hover:opacity-80"
            >
              Sebetke saliw
            </UiButtonCart>
          ) : (
            <UiButtonCart
              onClick={() => changeRemoveCart(data)}
              size="large"
              icon={<IoCart size={18} />}
              className="flex items-center gap-2 font-semibold leading-[130%] duration-200 opacity-80 hover:text-white"
            >
              Sebetten oshiriw
            </UiButtonCart>
          )}

          <button className="text-primaryOrange hover:opacity-80 duration-200">
            {isFav ? (
              <img
                className="duration-200 ease-in-out w-[34px] cursor-pointer hover:scale-110"
                src={BkHeartFilled}
                onClick={() => changeFavoriteRemove(data)}
                alt="favorite"
              />
            ) : (
              <img
                className="duration-200 ease-in-out w-[34px] cursor-pointer hover:scale-110"
                src={BkHeartOutline}
                onClick={() => changeFavorite(data)}
                alt="favorite"
              />
            )}
          </button>
          <UiButtonAction
            onClick={handleShare}
            size="large"
            icon={<IoShareSocialSharp size="18px" />}
            className="flex items-center gap-2 font-semibold leading-[130%] duration-200 hover:opacity-80"
          >
            Úlesiw
          </UiButtonAction>
        </>
      ) : (
        <>
          <UiButtonAction
            onClick={buyBook}
            size="large"
            icon={<FaCreditCard size="18px" />}
            className="flex items-center gap-2 font-semibold leading-[130%] duration-200 hover:opacity-80 hover:text-white"
          >
            Satip aliw
          </UiButtonAction>
          <button className="flex items-center text-primaryOrange duration-200 hover:opacity-80 font-light leading-[130%]">
            <i className="bx bx-heart text-[34px]"></i>
          </button>
          <UiButtonAction
            onClick={handleShare}
            size="large"
            icon={<IoShareSocialSharp size="18px" />}
            className="flex items-center gap-2 font-semibold leading-[130%] duration-200 hover:opacity-80"
          >
            Úlesiw
          </UiButtonAction>
        </>
      )}
      <Modal
        centered={true}
        open={true}
        onCancel={() => setModalNavigator(false)}
        title={"Úlesiw"}
      >
        <Flex
          gap={4}
          justify="space-between"
          wrap
          className="my-4 max-[470px]:justify-start max-[470px]:gap-6 max-[330px]:justify-between"
        >
          <TelegramShareButton url={copyUrl}>
            <TelegramIcon round={true} />
          </TelegramShareButton>
          <WhatsappShareButton url={copyUrl}>
            <WhatsappIcon round={true} />
          </WhatsappShareButton>
          <FacebookShareButton url={copyUrl}>
            <FacebookIcon round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={copyUrl}>
            <XIcon round={true} />
          </TwitterShareButton>
          <VKShareButton url={copyUrl}>
            <VKIcon round={true} />
          </VKShareButton>
          <EmailShareButton url={copyUrl}>
            <EmailIcon round={true} />
          </EmailShareButton>
        </Flex>
        <div className="flex items-stretch gap-2">
          <input
            type="text"
            value={copyUrl}
            readOnly
            className="w-full px-4 py-[5px] border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-80"
            onClick={() => {
              navigator.clipboard.writeText(copyUrl);
              message.success("Silteme nusqalandi!");
            }}
          >
            <BiCopy size={16} />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export { BookActions };
