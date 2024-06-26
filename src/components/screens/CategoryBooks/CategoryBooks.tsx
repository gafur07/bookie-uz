import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetCategoryQuery } from "@/services/category/category.api";
import { BookCard, BookSkeleton, Container } from "@/components/shared";
import { UiTitle } from "@/components/ui/UiTitle/UiTitle";

const CategoryBooks: FC = () => {
	const { name } = useParams();
	const { data: book, isLoading } = useGetCategoryQuery(name);
	return (
		<section className="min-h-screen py-[30px]">
			<Container>
				<div>
					<UiTitle>{book?.data.name}</UiTitle>
					<div className="my-[30px] gap-[30px] justify-center items-center grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
						{isLoading ? (
							[...Array(4)].map((_, i) => <BookSkeleton key={i} />)
						) : book && book.data && book.data.books.length ? (
							book.data.books.map((item) => <BookCard key={item.slug} {...item} />)
						) : (
							<h1>Hazirshe bos</h1>
						)}
					</div>
				</div>
			</Container>
		</section>
	);
};

export { CategoryBooks };
