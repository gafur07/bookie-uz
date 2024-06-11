import { Link } from "react-router-dom";
import google from "../../images/google.svg";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer className="footer px-[5%] flex justify-center items-center flex-col">
        <div className="footer_con flex justify-center items-start sm:items-center gap-x-[80px] gap-y-[40px] flex-wrap mb-[40px]">
          <Link className="text-[#fff] text-[28px] font-[700]" to={"/"}>
            Booky.uz
          </Link>
          <Link
            to={
              "https://play.google.com/store/apps/details?id=com.karsoft.bookienew"
            }
            target="_blank"
          >
            <img src={google} alt="" />
          </Link>
          <div className="flex flex-col text-white">
            <Link className="text-[16px] font-[500]" to={"tel:+998933625744"}>
              +998 93 362 57 44
            </Link>
            <Link
              className="text-[14px] font-[400]"
              to={"mailto:bookie@gmail.com"}
            >
              bookie@gmail.com
            </Link>
          </div>
          <div className="flex flex-col text-white">
            <h1 className="text-[16px] font-[500]">Sociallıq tarmaqlar</h1>
            <span className="flex items-center gap-2">
              <Link
                className="text-[20px] font-[400]"
                to={"https://www.instagram.com/booky_karakalpak/"}
                target="_blank"
              >
                <i className="bx bxl-instagram"></i>
              </Link>
              <Link
                className="text-[20px] font-[400]"
                to={"https://t.me/booky_nks"}
                target="_blank"
              >
                <i className="bx bxl-telegram"></i>
              </Link>
              <Link
                className="text-[20px] font-[400]"
                to={"https://www.youtube.com/bookyqaraqalpaq"}
                target="_blank"
              >
                <i className="bx bxl-youtube"></i>
              </Link>
            </span>
          </div>
          <div className="footer_book flex flex-col text-white">
            <h1 className="text-[16px] font-[500]">Joybardı qollap-quwatlaw</h1>
            <p className="text-[14px] font-[400]">© 2023 Booky | Karsoft</p>
          </div>
        </div>
        <hr className="w-full"/>
        <div className="flex flex-col mt-[40px] text-white lg:hidden md:hidden sm:hidden max-sm:block">
            <h1 className="text-[16px] font-[500]">Joybardı qollap-quwatlaw</h1>
            <p className="text-[14px] font-[400]">© 2023 Booky| Karsoft</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
