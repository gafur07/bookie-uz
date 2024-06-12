import logo from "@/images/Logo.svg";
import playmarket from "@/images/google.svg";
import instagram from "@/images/Instagram.svg";
import telegram from "@/images/Telegram.svg";
import youtube from "@/images/youtube.svg";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import click from "@/images/Click.svg";
import payme from "@/images/Payme.svg";
import uzum from "@/images/Uzum.svg";
import styles from "./Footer.module.scss";
import { GOOGLE_URL, INSTAGRAM_URL, TELEGRAM_URL, YOUTUBE_URL } from "@/config";

const Footer: React.FC = () => {
  const handleClickTelegram = () => {
    window.open(TELEGRAM_URL, "_blank");
  };
  const handleClickInstagram = () => {
    window.open(INSTAGRAM_URL, "_blank");
  };
  const handleClickYoutube = () => {
    window.open(YOUTUBE_URL,"_blank");
  };
  const handleClickPlayMarket = () => {
    window.open(GOOGLE_URL, '_blank')
  }

  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.first}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
            <img className="cursor-pointer" onClick={handleClickPlayMarket} src={playmarket} alt="google playmarket" />
        </div>
        <div className={styles.contacts}>
          <span>Biz benen baylanısıw</span>
          <a className={styles.tel} href="tel:+998933625744">
            <FaPhone />
            +998 93 362 57 44
          </a>
          <a className={styles.mail} href="mailto:bookyaudiokitaplar@gmail.com">
            <MdMailOutline />
            bookyaudiokitaplar@gmail.com
          </a>
        </div>
        <div className={styles.social}>
          <h2>Sociallıq tarmaqlar</h2>
          <div className={styles.logos}>
            <img onClick={handleClickInstagram} src={instagram} alt="instagram"/>
            <img onClick={handleClickTelegram} src={telegram} alt="telegram" />
            <img onClick={handleClickYoutube} src={youtube} alt="youtube" />
          </div>
        </div>
        <div className={styles.support}>
          <Link to="/donates">Joybardı qollap-quwatlaw</Link>
          <Link to="/faq">Kóp beriletuǵın sorawlar</Link>
          <div>© 2024 Booky | Karsoft</div>
        </div>
        <div className={styles.payments}>
          <span>Tólem túrleri</span>
          <img src={uzum} alt="image" />
          <img src={click} alt="image" />
          <img src={payme} alt="image" />
        </div>
      </div>
      <div className={styles.line} />
      <p style={{ textAlign: "center", fontSize: 14 }}>
        © 2023-2024 "
        <a style={{ color: "Yellow" }} href="https://booky.uz">
          Booky.uz
        </a>
        " qaraqalpaq tilindegi audiokitaplar platforması. Barlıq huqıqlar
        qorǵalǵan, nusqa alıp kóshiriw qadaǵan etiledi.
      </p>
    </div>
  );
};
export default Footer;
