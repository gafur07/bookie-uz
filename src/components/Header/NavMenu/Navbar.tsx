import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosClassic } from "@/api/axios.interceptors";
import { INavCategories } from "./nav.menu.interface";
import { NavSearchMenu } from "./NavSearchMenu";
import "./navbar.scss"

const Navbar = () => {
  const { data } = useQuery<INavCategories[]>({
    queryFn: getNavCategories,
    queryKey: ["categories"],
  });
  async function getNavCategories() {
    const res = await axiosClassic.get("/category");
    return res.data.data;
  }

  return (
    <div className="navbar">
      <ul className="nav-menu">
        {data?.map((item: INavCategories) => (
          <Link
            className="first-letter:uppercase"
            key={item.id}
            to={`/category/${item.slug}`}
          >
            {item.name}
          </Link>
        ))}
        <NavSearchMenu />
      </ul>
    </div>
  );
};

export { Navbar };
