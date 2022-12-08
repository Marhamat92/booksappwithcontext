import React from "react";

type Props = {
  book: any;
};

function BookCard({ book }: Props) {
  return (
    <div>
      {" "}
      <h1>{book.title}</h1>
      <img src={book.image} alt={book.title} />
    </div>
  );
}

export default BookCard;
