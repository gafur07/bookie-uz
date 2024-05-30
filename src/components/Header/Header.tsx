import useAppSelector from "@/hooks/useAppSelector"
import { GuestHead } from "./GuestHead"
import "./Header.scss"
import { Navbar } from "./NavMenu"
import { UserHead } from "./UserHead"

function Header() {
  const { token } = useAppSelector((store) => store.auth)

    return (
      <>    
        <div className="header">
            {token ? <UserHead /> : <GuestHead />}
            <Navbar />
        </div>
      </>   
    )
  }
  
  export default Header