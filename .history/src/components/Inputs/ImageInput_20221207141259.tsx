import React from "react";

type Props = {};

function ImageInput({}: Props) {
  return (
    <div>
      <label className='text-white font-bold mb-2' htmlFor='image'>
        Add Book Image
      </label>
      <input
        className='pl-2 py-1 border border-transparent rounded-md focus-within:ring-2 focus-within:ring-green-400 focus-within:border-transparent focus:outline-none'
        type='file'
        name='image'
        id='image'
      />
    </div>
  );
}

export default ImageInput;
