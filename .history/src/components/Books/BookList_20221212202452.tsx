import React from "react";
import BookCard from "./BookCard";
import { useContext } from "react";
import { BooksContext } from "../../context/books";

type Props = {};

function BookList({}: Props) {
  const [books] = useContext(BooksContext);

  const renderedBooks = books.map((book: any) => {
    return (
      <div key={book.id}>
        <BookCard DeleteClick={DeleteClick} EditClick={EditClick} book={book} />
      </div>
    );
  });

  return (
    <div className='grid grid-cols-4 gap-3 mt-5 mb-5'>{renderedBooks}</div>
  );
}

export default BookList;
