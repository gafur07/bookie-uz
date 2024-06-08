import { useParams } from "react-router-dom";
import { BookComment } from "./BookComment";
import { BookReport } from "./BookReport";
import { BookSlug } from "./BookSlug";
import { useGetBookBySlug } from "@/services";
const Book = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetBookBySlug({ slug: `${slug}` });
  console.log(data);

  return (
    <div className="flex flex-col">
      <BookSlug category={data?.category} author={data?.author} data={data} isLoading={isLoading} />
      <BookComment isLoading={isLoading} reviews={data?.reviews} />
      <BookReport />
    </div>
  );
};

export { Book };
