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

  return <div>{renderedBooks}</div>;
}

export default BookList;
