import { Link } from "react-router-dom";

const GuestHead = () => {
  return (
    <div className="flex items-center gap-[24px] max-[820px]:hidden">
      <Link to={"/login"}>
        <button className="rounded-[16px] px-[24px] py-[10px] text-[14px] font-semibold cursor-pointer duration-200 leading-[130%] bg-[#fff] text-[#2d71ae] hover:opacity-80">
          Kiriw
        </button>
      </Link>
      <Link to={"/register"}>
        <button className="rounded-[16px] px-[24px] py-[10px] text-[14px] font-semibold cursor-pointer duration-200 leading-[130%] border border-[#fff] text-[#fff] hover:opacity-80">
          Dizimnen ótiw
        </button>
      </Link>
    </div>
  );
};

export { GuestHead };
