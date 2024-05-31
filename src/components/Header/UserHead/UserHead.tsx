import { Link } from "react-router-dom";
import exitIcon from "../../../images/exit.svg"
import { Badge } from "antd";
import useAppSelector from "@/hooks/useAppSelector";
import useAppDispatch from "@/hooks/useAppDispatch";
import { logout } from "@/store/auth/auth.action";

const UserHead = () => {
  const { basket } = useAppSelector((store) => store.cart)
  const dispatch = useAppDispatch()
  return (
    <>
      <div className="head">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link to={"/"} className="logo">
              <h1 className="text-[28px] text-[#fff] font-[700]">Bookie.uz</h1>
            </Link>

            <div className="head-links">
                <Link to={"/favorites"} className="text-[#fff] text-[16px] font-[600]">
                    Saylanǵanlar
                </Link>
                <Link to={"/cart"} className="text-[#fff] text-[16px] font-[600]">
                    Sebet
                  <Badge className="mt-[-20px] right-0" size="small" count={basket.length}></Badge>
                </Link>
                <Link to={"/my-books"} className="text-[#fff] text-[16px] font-[600]">
                    Kitaplarim
                </Link>
                <button onClick={() => dispatch(logout())} className="flex items-center gap-[10px] ml-[20px] text-[#fff] text-[16px] font-[600]">Shigiw <img src={exitIcon} alt="" /> </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { UserHead };
