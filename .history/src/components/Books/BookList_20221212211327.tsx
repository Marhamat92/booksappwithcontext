import React from "react";
import BookCard from "./BookCard";
import { useContext } from "react";
import { BooksContext } from "../../context/books";

type Props = {};

function BookList({}: Props) {
  const [books] = useContext(BooksContext);

  console.log(books, "Hello from BookList.tsx");

  const renderedBooks = books.map((book) => {
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
