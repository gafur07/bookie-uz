import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetCategoryQuery } from "@/services/category/category.api";
import {
	BookCard,
	BookList,
	BookSkeleton,
	Container,
} from "@/components/shared";
import { UiTitle } from "@/components/ui/title/UiTitle/UiTitle";

const CategoryBooks: FC = () => {
	const { name } = useParams();
	const { data: book, isLoading } = useGetCategoryQuery(name);
	return (
		<section className="min-h-screen pb-[30px]">
			<Container>
				<div>
					<UiTitle>{book?.data.name}</UiTitle>
					<BookList>
						{isLoading ? (
							[...Array(4)].map((_, i) => <BookSkeleton key={i} />)
						) : book && book.data && book.data.books.length ? (
							book.data.books.map((item) => (
								<BookCard key={item.slug} data={item} showButton />
							))
						) : (
							<h1>Hazirshe bos</h1>
						)}
					</BookList>
				</div>
			</Container>
		</section>
	);
};

export { CategoryBooks };
