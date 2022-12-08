import React from "react";

type Props = {
  book: any;
  onsubmit: (id: number, title: string) => void;
};

function EditBook({ book, onsubmit }: Props) {
  const [title, setTitle] = React.useState(book.title);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onsubmit(book.id, title);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center'
      >
        <label className='' htmlFor=''>
          Edit Title
        </label>
        <input
          className='border border-green-400 rounded-md w-48 ring-0 focus:ring-0 focus:outline-none '
          type='text'
          placeholder='Book Title'
          value={title}
          onChange={handleChange}
        />
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 mt-1 rounded'>
          Save
        </button>
      </form>
    </div>
  );
}

export default EditBook;
