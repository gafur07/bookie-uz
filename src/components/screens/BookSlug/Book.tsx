import { FC } from "react";
import { BookComment } from "./BookComment";
import { BookReport } from "./BookReport";
import { BookSlug } from "./BookSlug";

const Book: FC = () => {
  return (
    <div className="flex flex-col">
      <BookSlug />
      <BookComment />
      <BookReport />
    </div>
  );
};

export { Book };
