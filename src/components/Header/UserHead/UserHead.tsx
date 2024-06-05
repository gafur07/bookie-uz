import { Link } from "react-router-dom";
import exitIcon from "../../../images/exit.svg"
import { Badge } from "antd";
import { useAppDispatch, useAppSelector } from "@/hooks" 
import { signOut } from "@/store/index.actions";
import styles from "../Header.module.scss"

const UserHead = () => {
  const { basket } = useAppSelector((store) => store.cart)
  const dispatch = useAppDispatch()

  return (
    <>
            <div className={styles.head_links}>
                <Link to={"/favorites"}>
                    Saylanǵanlar
                </Link>
                <Link to={"/cart"}>
                    Sebet
                  <Badge className="mt-[-20px] right-0" size="small" count={basket.length}></Badge>
                </Link>
                <Link to={"/my-books"}>
                    Kitaplarim
                </Link>
                <button onClick={() => dispatch(signOut())} className="flex items-center gap-[10px] text-[#fff] text-[16px] font-[600]">Shigiw <img src={exitIcon} alt="" /> </button>
            </div>
    </>
  );
};

export { UserHead };
