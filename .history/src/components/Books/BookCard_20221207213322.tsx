import React from "react";

type Props = {
  book: any;
};

function BookCard({ book }: Props) {
  return (
    <div>
      <div className='border border-green-400  flex flex-col items-center h-72 w-52 '>
        <div className='bg-yellow-400 w-full flex justify-end py-1 pr-1'>
          <i className='ri-pencil-fill text-teal-800 text-xl'></i>
          <i className='ri-close-circle-fill text-red-800 text-xl '></i>
        </div>
        <img
          className='w-40 h-40 border border-green-400'
          src={book.image}
          alt={book.title}
        />
        <h1 className='mt-6'>{book.title}</h1>
      </div>
    </div>
  );
}

export default BookCard;
