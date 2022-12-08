import React from "react";

type Props = {};

function EditBook({}: Props) {
  return (
    <div className=''>
      <form>
        <label htmlFor=''>Edit Title</label>
        <input
          className='border border-green-400 rounded-md w-40'
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
