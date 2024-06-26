import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import { BkSearch } from "@/assets/images";
import { useDebounce } from "@/hooks/useDebounce";
import { useGetSearchQuery } from "@/services/searchResult/search.api";

const NavSearchMenu = () => {
	const [value, setValue] = useState("");
	const navigate = useNavigate();
	const debounceSearch = useDebounce(value);
	console.log(debounceSearch);
	const { data } = useGetSearchQuery(debounceSearch);

	const clickItemSlug = (slug: string) => {
		setValue("");
		navigate(`/book/${slug}`, { replace: true });
	};

	return (
		<div className="flex flex-col relative">
			<Input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="ml-[20px] p-[9px] gap-4 max-[1300px]:mt-[5px]"
				prefix={<img src={BkSearch} alt="search" />}
				placeholder="Kitaptı izleń"
			/>
			{(data && debounceSearch && data.length !== 0) && (
				<ul
					className="flex flex-col z-[101] h-fit w-full absolute 
					top-[50px] left-[20px] rounded-[16px] bg-white border overflow-hidden
					border-[#d9d9d9]"
				>
					{data.map((item) => (
						<li
							className="p-[10px] overflow-hidden 
							whitespace-nowrap cursor-pointer 
							hover:bg-gray-100"
							onClick={() => clickItemSlug(item.slug)}
							key={item.slug}
						>
							{item.title}
						</li>
					))}
				</ul>
			) }
		</div>
	);
};

export { NavSearchMenu };
