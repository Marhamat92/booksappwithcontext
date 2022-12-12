import React from "react";
import BookCard from "./BookCard";
import { useBooksContext } from "../../hooks/use-books-context";

type Props = {};

function BookList({}: Props) {
  const { books } = useBooksContext();

  console.log(books, "Hello from BookList.tsx");

  const renderedBooks = books.map((book: any) => {
    return (
      <div key={book.id}>
        <BookCard book={book} />
      </div>
    );
  });

  return (
    <div className='grid grid-cols-4 gap-3 mt-5 mb-5'>{renderedBooks}</div>
  );
}

export default BookList;
