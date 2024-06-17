import { BkSearch } from "@/assets/images";
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
    <div className='flex flex-col relative'>
			<Input
				value={value}
				onChange={e => setValue(e.target.value)}
				className='ml-[20px] p-[9px] rounded-[16px] gap-4 max-[1300px]:mt-[5px]'
				prefix={<img src={BkSearch} alt='search' />}
				placeholder='Kitaptı izleń'
			/>
			{debounceSearch !== '' && (
				<ul 
					className="flex flex-col z-[101] h-fit w-full absolute 
					top-[50px] left-[20px] bg-white border 
					border-[#000]">
					{data?.map(item => (
						<li 
							className="p-[10px] overflow-hidden 
							whitespace-nowrap cursor-pointer 
							hover:bg-gray-100" 
							onClick={() => clickItemSlug(item.slug)} key={item.slug}>
							{item.title}
						</li>
					))}
				</ul>
			)}
		</div>
  );
};

export { NavSearchMenu };
