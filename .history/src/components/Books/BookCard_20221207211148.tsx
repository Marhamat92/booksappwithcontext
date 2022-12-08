import React from "react";

type Props = {
  book: any;
};

function BookCard({ book }: Props) {
  return (
    <div className=''>
      <img className='w-40 h-40' src={book.image} alt={book.title} />
      <h1>{book.title}</h1>
    </div>
  );
}

export default BookCard;
