import iconSearch from "@/assets/iconSearch.svg";
import { useDebounce } from "@/hooks/useDebounce";
import { useGetSearch } from "@/services/searchResult/search.api";
import { Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavSearchMenu = () => {
  const [value, setValue] = useState("")
  const navigate = useNavigate();
  const debounceSearch = useDebounce(`${value}`, 500);
  const {data} = useGetSearch(`${value}`)

  const clickItemSlug = (slug: string) => {
    setValue("");
    navigate(`/book/${slug}`, { replace: true });
  };

  return (
    <div className='search_wrapper'>
			<Input
				value={value}
				onChange={e => setValue(e.target.value)}
				className='search'
				prefix={<img src={iconSearch} alt='search' />}
				placeholder='Kitaptı izleń'
			/>
			{debounceSearch !== '' && (
				<ul>
					{data?.map(item => (
						<li onClick={() => clickItemSlug(item.slug)} key={item.slug}>
							{item.title}
						</li>
					))}
				</ul>
			)}
		</div>
  );
};

export { NavSearchMenu };
