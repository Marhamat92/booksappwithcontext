import React from "react";

type Props = {
  label: string;
  placeholder: string;
};

function TextInput({ label, placeholder }: Props) {
  return (
    <div className='flex flex-col px-4'>
      <label htmlFor='text'>{label}</label>
      <input type='text' placeholder={placeholder} />
    </div>
  );
}

export default TextInput;
