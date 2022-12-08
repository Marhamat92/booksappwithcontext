import React from "react";

type Props = {
  books: Array<any>;
};

function BookList({ books }: Props) {
  const renderedBooks = books.map((book) => {
    return (
      <div key={book.id}>
        <h1>{book.title}</h1>
        <img src={book.image} alt={book.title} />
      </div>
    );
  });

  return <div>BookList</div>;
}

export default BookList;
