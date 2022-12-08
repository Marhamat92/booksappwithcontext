import React from "react";

type Props = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function ImageInput({ label, value, onChange }: Props) {
  return (
    <div className='flex flex-col px-4 py-4'>
      <label className='text-white font-bold mb-2' htmlFor='image'>
        {label}
      </label>
      <input
        className='pl-2 py-1 border border-transparent rounded-md focus-within:ring-2 focus-within:ring-green-400 focus-within:border-transparent focus:outline-none'
        type='file'
        onChange={onChange}
      />
    </div>
  );
}

export default ImageInput;
