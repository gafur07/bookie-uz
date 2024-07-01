import { FC } from "react";
import { useAppSelector } from "@/hooks";
import { BookCard, Container } from "@/components/shared";
import { UiTitle } from "@/components/ui";
import { BookList } from "@/components/shared/BookList/BookList";

const Favorites: FC = () => {
	const { favorites } = useAppSelector((store) => store.favorite);

	return (
		<section className="min-h-screen py-[30px]">
			<Container>
				<UiTitle>Saylandılar</UiTitle>
				<BookList>
					{favorites.map((item) => (
						<BookCard 
							key={item.slug} 
							data={item} 
							showPrice
						/>
					))}
				</BookList>
			</Container>
		</section>
	);
};

export { Favorites };
