import { Link, useNavigate } from "react-router-dom";
import { Badge } from "antd";
import { useAppDispatch, useAppSelector } from "@/hooks" 
import { signOut } from "@/store/index.actions";
import { BkExit } from "@/assets/images";

const UserHead = () => {
  const { basket } = useAppSelector((store) => store.cart)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const logOut = () => {
    dispatch(signOut())
    navigate('/', {replace: true})
  }

  return (
    <>
            <div className='flex items-center gap-[24px] max-[820px]:hidden'>
              <Link className="text-[#fff] text-[14px] font-[600]" to={"/donates"}>
                    Donatlar
                </Link>
                <Link className="text-[#fff] text-[14px] font-[600]" to={"/favorites"}>
                    Saylanǵanlar
                </Link>
                <Link className="text-[#fff] text-[14px] font-[600]" to={"/cart"}>
                    Sebet
                  <Badge className="mt-[-20px] right-0" size="small" count={basket.length}></Badge>
                </Link>
                <Link className="text-[#fff] text-[14px] font-[600]" to={"/my-books"}>
                    Kitaplarim
                </Link>
                <button onClick={logOut} className="flex items-center gap-[10px] text-[#fff] text-[14px] font-[600]">Shigiw <img src={BkExit} alt="" /> </button>
            </div>
    </>
  );
};

export { UserHead };
