import React from "react";
import BookCard from "./BookCard";

type Props = {
  books: Array<any>;
  editClick: () => void;
};

function BookList({ books, editClick, DeleteClick }: Props) {
  const renderedBooks = books.map((book) => {
    return (
      <div key={book.id}>
        <BookCard deleteClick={DeleteClick} editClick={editClick} book={book} />
      </div>
    );
  });

  return <div className='grid grid-cols-4 gap-3 mt-5'>{renderedBooks}</div>;
}

export default BookList;
