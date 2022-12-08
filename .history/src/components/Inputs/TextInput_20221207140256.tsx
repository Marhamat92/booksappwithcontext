import React from "react";

type Props = {
  label: string;
  placeholder: string;
};

function TextInput({ label, placeholder }: Props) {
  return (
    <div className='flex flex-col px-4 py-4'>
      <label className='text-white font-bold mb-2' htmlFor='text'>
        {label}
      </label>
      <input
        className='pl-2 border border-transparent rounded-md focus-within:ring-2 focus-within:ring-green-400 focus-within:border-transparent focus:outline-none'
        type='text'
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
