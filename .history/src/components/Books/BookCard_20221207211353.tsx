import React from "react";

type Props = {
  book: any;
};

function BookCard({ book }: Props) {
  return (
    <div className='border border-green-400'>
      <div>
        <img
          className='w-40 h-40 border border-green-400'
          src={book.image}
          alt={book.title}
        />
        <h1>{book.title}</h1>
      </div>
    </div>
  );
}

export default BookCard;
