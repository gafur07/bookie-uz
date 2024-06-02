import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "@/hooks";
import { getBookSlug } from "@/store/index.actions";

import { BookComment } from "./BookComment"
import { BookReport } from "./BookReport"
import { BookSlug } from "./BookSlug"

const Book = () => {
  const dispatch = useAppDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(getBookSlug({ slug: `${slug}` }));
  }, [slug]);
  return (
    <div className="flex flex-col">
        <BookSlug />
        <BookComment />
        <BookReport />
    </div>
  )
}

export { Book }