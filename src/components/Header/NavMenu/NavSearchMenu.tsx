import { axiosClassic } from "@/api/axios.interceptors";
import iconSearch from "@/assets/iconSearch.svg";
import { useDebounce } from "@/hooks/useDebounce";
import { IBookSlug } from "@/services/index.interface";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavSearchMenu = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();
  const debounceSearch = useDebounce<string>(`${setValue}`, 500);
  const { data } = useQuery<IBookSlug[]>({
    queryKey: [debounceSearch],
    queryFn: getSearch,
  });

  async function getSearch() {
    const res = await axiosClassic.get(`/all-books?search=${debounceSearch}`)
    return res.data.data
  }

  const clickItemSlug = (slug: string) => {
    setValue("");
    navigate(`/book/${slug}`, { replace: true });
  };

  return (
    <div>
      <div className="search ml-[20px] mb-[5px] rounded-[16px] bg-[#fff] flex items-center p-[9px] pl-[20px] gap-[16px]">
        <img src={iconSearch} />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-transparent border-none outline-none"
          placeholder="Kitaptı izleń"
        />
      </div>
      {
        debounceSearch !== '' && (
          <ul>
            {
              data?.map(item => (
                <li onClick={() => clickItemSlug(item.slug)} key={item.slug}>{item.title}</li>
              ))
            }
          </ul> 
        )
      }
    </div>
  );
};

export { NavSearchMenu };
