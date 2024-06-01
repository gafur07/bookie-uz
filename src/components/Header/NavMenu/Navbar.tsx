import { Link } from "react-router-dom"
import iconSearh from "../../../assets/iconSearch.svg"
import { navMenuData } from "@/shared/nav-menu-data"

const Navbar = () => {
  return (
    <>
        <div className="navbar">
          <div className="container">
          <ul className="nav-menu">
              {
                navMenuData.map((item: any) => (
                  <Link key={item.path} to={`/category/${item.path}`}>{item.label}</Link>
                ))
              }
            <div className="search ml-[20px] rounded-[16px] bg-[#fff] flex items-center p-[9px] pl-[20px] gap-[16px]">
              <img src={iconSearh}/>
              <input
                className="bg-transparent border-none outline-none"
                placeholder="Kitaptı izleń"
              />
            </div>
          </ul>
          </div>
        </div>
    </>
  )
}

export {Navbar}