import { FC, ReactNode } from "react";

interface BookListProps {
	children?: ReactNode;
}

const BookList: FC<BookListProps> = ({ children }) => {
	return (
		<div className="flex gap-x-5 gap-y-[30px] flex-start flex-wrap">
			{children}
		</div>
	);
};

export { BookList };
