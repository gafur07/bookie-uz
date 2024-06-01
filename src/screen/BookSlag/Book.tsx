import { BookComment } from "./BookComment"
import { BookReport } from "./BookReport"
import { BookSlug } from "./BookSlug"

const Book = () => {
  return (
    <div className="flex flex-col">
        <BookSlug />
        <BookComment />
        <BookReport />
    </div>
  )
}

export { Book }