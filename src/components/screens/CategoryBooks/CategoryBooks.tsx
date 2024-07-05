import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCategoryQuery } from "@/services/category/category.api";
import {
	BookCard,
	BookList,
	BookSkeleton,
	Container,
} from "@/components/shared";
import { UiTitle } from "@/components/ui/title/UiTitle/UiTitle";
import { Spin } from "antd";

const CategoryBooks: FC = () => {
	const { name } = useParams();
	const { data: book, isLoading } = useGetCategoryQuery(name);
	const navigate = useNavigate()
	return (
		<section className="min-h-screen pb-[30px]">
			<Container>
					<UiTitle>{book?.data.name}</UiTitle>
					<BookList>
						{isLoading ? (
							[...Array(4)].map((_, i) => <BookSkeleton key={i} />)
						) : book && book.data && book.data.books.length ? (
							book.data.books.map((item) => (
								<BookCard key={item.slug} data={item} showButton />
							))
						) : (
							<div className="flex flex-col items-center justify-center w-full min-h-[50vh] gap-4">
								<h1 className="text-2xl font-semibold">Hazirshe bos</h1>
								<button
									onClick={() => navigate("/")}
									className="bg-primary rounded-[16px] hover:opacity-80 text-white px-[24px] py-[6px]"
								>
									Bas betge qaytiw
								</button>
							</div>
						)}
					</BookList>
			</Container>
		</section>
	);
};

export { CategoryBooks };
