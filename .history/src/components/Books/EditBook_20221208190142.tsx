import React from "react";

type Props = {};

function EditBook({}: Props) {
  return (
    <div>
      <form className='flex flex-col justify-center items-center'>
        <label className='flex items-left' htmlFor=''>
          Edit Title
        </label>
        <input
          className='border border-green-400 rounded-md w-48'
          type='text'
          placeholder='Book Title'
        />
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
          Save
        </button>
      </form>
    </div>
  );
}

export default EditBook;
