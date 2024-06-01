import { useAppSelector } from "@/hooks";

const BookActions = () => {
  const { token } = useAppSelector((store) => store.auth);
  return (
      <div className="flex gap-[16px] flex-wrap items-center">
        {token ? (
          <>
            <button className="flex items-center text-[#2d71ae] duration-200 py-[6px] px-[14px] hover:opacity-80 gap-[10px] rounded-[16px] text-[14px] font-semibold leading-[130%] bg-[#d7e7f8]">
              <i className="bx bx-headphone text-[24px]"></i>
                Tıńlap kóriw
            </button>
            <button className="flex items-center text-[#2d71ae] duration-200 py-[6px] px-[14px] hover:opacity-80 gap-[10px] rounded-[16px] text-[14px] font-semibold leading-[130%] bg-[#d7e7f8]">
              <i className="bx bx-credit-card text-[24px]"></i>
                Satip aliw
            </button>
            <button className="flex items-center text-[#fff] duration-200 py-[6px] px-[14px] hover:opacity-80 gap-[10px] rounded-[16px] text-[14px] font-semibold leading-[130%] bg-[#ff9e30]">
              <i className="bx bxs-cart-alt text-[24px]"></i>
                Sebetke saliw
            </button>
            <button className="flex items-center text-[#ff9e30] duration-200 hover:opacity-80 font-light leading-[130%]">
              <i className="bx bx-heart text-[34px]"></i>
            </button>
            <button className="flex items-center text-[#2d71ae] duration-200 py-[6px] px-[14px] hover:opacity-80 gap-[10px] rounded-[16px] text-[14px] font-semibold leading-[130%] bg-[#d7e7f8]">
              <i className="bx bxs-share-alt text-[24px]"></i>
                Úlesiw
            </button>
          </>
        ) : (
          <>
            <button className="flex items-center text-[#2d71ae] duration-200 py-[6px] px-[14px] hover:opacity-80 gap-[10px] rounded-[16px] text-[14px] font-semibold leading-[130%] bg-[#d7e7f8]">
              <i className="bx bx-credit-card text-[24px]"></i>
                Satip aliw
            </button>
            <button className="flex items-center text-[#ff9e30] duration-200 hover:opacity-80 font-light leading-[130%]">
              <i className="bx bx-heart text-[34px]"></i>
            </button>
            <button className="flex items-center text-[#2d71ae] duration-200 py-[6px] px-[14px] hover:opacity-80 gap-[10px] rounded-[16px] text-[14px] font-semibold leading-[130%] bg-[#d7e7f8]">
              <i className="bx bxs-share-alt text-[24px]"></i>
                Úlesiw
            </button>
          </>
        )}
      </div>
  );
};

export { BookActions };
