import { FC } from "react";
import { BookComment } from "./BookComment";
import { BookReport } from "./BookReport";
import { BookSlug } from "./BookSlug";

const Book: FC = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <BookSlug />
      <BookComment />
      <BookReport />
    </section>
  );
};

export { Book };
