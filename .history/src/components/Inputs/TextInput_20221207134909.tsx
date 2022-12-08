import React from "react";

type Props = {
  label: string;
  placeholder: string;
};

function TextInput({ label, placeholder }: Props) {
  return (
    <div>
      <label htmlFor='text'></label>
      <input type='text' />
    </div>
  );
}

export default TextInput;
