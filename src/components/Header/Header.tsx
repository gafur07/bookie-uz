import { useAppSelector } from "@/hooks";
import { GuestHead } from "./GuestHead";
import { UserHead } from "./UserHead";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { HeaderHamburger } from "./HeaderHamburger";
import { useState } from "react";
import styles from "./Header.module.scss";

function Header() {
  const { token } = useAppSelector((store) => store.auth);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={styles.header}>
        <Link to={"/"} className="logo">
          <h1 className="text-[28px] text-[#fff] font-[700]">Bookie.uz</h1>
        </Link>
        {token ? <UserHead /> : <GuestHead />}

        <div className={styles.hamburger}>
          <Hamburger 
            size={27}
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
        <HeaderHamburger isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    </>
  );
}

export default Header;
