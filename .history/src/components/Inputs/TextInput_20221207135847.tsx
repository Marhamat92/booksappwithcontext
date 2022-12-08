import React from "react";

type Props = {
  label: string;
  placeholder: string;
};

function TextInput({ label, placeholder }: Props) {
  return (
    <div className='flex flex-col px-4 py-4'>
      <label className='text-white font-bold' htmlFor='text'>
        {label}
      </label>
      <input type='text' placeholder={placeholder} />
    </div>
  );
}

export default TextInput;
