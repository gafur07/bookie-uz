import { FC } from "react";
import { useAppSelector } from "@/hooks";
import { useGetMyBooksQuery } from "@/services";
import { BookCard, BookSkeleton, Container } from "@/components/shared";
import { UiTitle } from "@/components/ui/UiTitle/UiTitle";

const MyBooks: FC = () => {
	const { token } = useAppSelector((store) => store.auth);
	const { data: myBooks, isLoading } = useGetMyBooksQuery();

	return (
		<section className="my-book min-h-screen py-[30px]">
			<Container>
				<div>
					{token ? (
						<>
							<UiTitle>Meniń kitaplarım</UiTitle>
							{myBooks && myBooks.data.length === 0 && (
								<h1 className="text-[1.5rem] font-bold">Sizde kitaplar joq</h1>
							)}
							<div className="my-[30px] flex gap-x-[20px] gap-y-[30px] flex-start flex-wrap">
								{(isLoading) ? (
									[...Array(4)].map((_, i) => <BookSkeleton key={i} />)
								) : myBooks && (
									<>
										{myBooks.data.map((item) => (
											<BookCard key={item.slug} {...item} />
										))}
									</>
								)}
							</div>
						</>
					) : (
						<h1 className="flex items-center justify-center text-[2em] font-semibold h-[55vh]">
							Error 404. Page not found
						</h1>
					)}
				</div>
			</Container>
		</section>
	);
};

export { MyBooks };
