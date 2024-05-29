import { Head } from "./Head/Head"
import "./Header.scss"
import Navbar from "./NavMenu/Navbar"

function Header() {

    return (
      <>    
        <div className="header">
            <Head />
            <Navbar />
        </div>
      </>   
    )
  }
  
  export default Header