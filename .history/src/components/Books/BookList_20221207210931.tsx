import React from "react";
import BookCard from "./BookCard";

type Props = {
  books: Array<any>;
};

function BookList({ books }: Props) {
  const renderedBooks = books.map((book) => {
    return (
      <div key={book.id}>
        <BookCard book={book} />
      </div>
    );
  });

  return <div className='grid grid-cols-4 gap-3 mt-3'>{renderedBooks}</div>;
}

export default BookList;
