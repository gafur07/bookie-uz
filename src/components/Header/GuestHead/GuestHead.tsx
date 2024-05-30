import { Link } from "react-router-dom";

const GuestHead = () => {
  return (
    <div className="head">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="logo">
            <h1 className="text-[28px] text-[#fff] font-[700]">Bookie.uz</h1>
          </Link>

          <div className="buttons">
            <Link to={"/login"}>
              <button className="bg-[#fff] text-[#2d71ae] hover:opacity-80">
                Kiriw
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="border border-[#fff] text-[#fff] hover:opacity-80">
                Dizimnen ótiw
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export {GuestHead};
