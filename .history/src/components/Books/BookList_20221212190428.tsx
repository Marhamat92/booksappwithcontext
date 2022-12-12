import React from "react";
import BookCard from "./BookCard";

type Props = {
  books: Array<any>;
  EditClick: (id: number, newTitle: string) => void;
  DeleteClick: (id: number) => void;
};

function BookList({ books, EditClick, DeleteClick }: Props) {
  const renderedBooks = books.map((book) => {
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
