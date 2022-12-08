import React from "react";

type Props = {
  book: any;
};

function BookCard({ book }: Props) {
  return (
    <div className=''>
      <img src={book.image} alt={book.title} />
      <h1>{book.title}</h1>
    </div>
  );
}

export default BookCard;
