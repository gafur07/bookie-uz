import { FC, useEffect, useRef } from "react";
import { BookComment } from "./BookComment";
import { BookReport } from "./BookReport";
import { BookSlug } from "./BookSlug";

const Book: FC = () => {
	const bookRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (bookRef.current) {
			bookRef.current.scrollIntoView();
		}
	}, []);
	return (
		<section ref={bookRef} className="min-h-screen flex flex-col">
			<BookSlug />
			<BookComment />
			<BookReport />
		</section>
	);
};

export { Book };
