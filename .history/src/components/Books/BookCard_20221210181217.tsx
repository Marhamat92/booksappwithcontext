import React from "react";
import EditBook from "./EditBook";

type Props = {
  book: any;
  EditClick: (id: number, newTitle: string, imageLink: string) => void;
  DeleteClick: (id: number) => void;
};

function BookCard({ book, EditClick, DeleteClick }: Props) {
  const [showEdit, setShowEdit] = React.useState(false);

  const handleDeleteClick = (id: number) => {
    DeleteClick(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id: number, newTitle: string) => {
    EditClick(id, newTitle, imageLink);
    setShowEdit(false);
  };

  return (
    <div>
      <div className='border border-green-400  flex flex-col items-center h-72 w-52 rounded-md'>
        <div className=' w-full flex justify-end py-1 pr-1'>
          <i
            onClick={handleEditClick}
            className='ri-pencil-fill text-teal-800 text-xl cursor-pointer'
          ></i>
          <i
            onClick={handleDeleteClick}
            className='ri-close-circle-fill text-red-800 text-xl cursor-pointer'
          ></i>
        </div>
        <img
          className='w-40 h-40 border border-green-400'
          src={book.imageLink}
          alt={book.title}
        />

        {showEdit ? (
          <EditBook onsubmit={handleSubmit} book={book} />
        ) : (
          <h1 className='mt-6'>{book.title}</h1>
        )}
      </div>
    </div>
  );
}

export default BookCard;
