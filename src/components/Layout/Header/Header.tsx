import { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { useAppSelector } from "@/hooks";
import { GuestHead } from "./GuestHead";
import { UserHead } from "./UserHead";
import { HeaderHamburger } from "./HeaderHamburger";
import { Container } from "@/components/shared";

function Header() {
  const { token } = useAppSelector((store) => store.auth);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-[#2d71ae] py-[25px] max-[820px]:py-[10px]">
      <Container>
        <div className="flex justify-between items-center">
          <Link
            to={"/"}
            className="text-[28px] text-[#fff] font-[700] max-[820px]:text-[20px]"
          >
            Booky.uz
          </Link>
          {token ? <UserHead /> : <GuestHead />}

          <div className="hidden text-white z-[99999] cursor-pointer max-[820px]:block">
            <Hamburger size={27} toggled={isOpen} toggle={toggleOpen} />
          </div>
        </div>
      </Container>
      <HeaderHamburger isOpen={isOpen} toggleOpen={toggleOpen} />
    </header>
  );
}

export { Header };
