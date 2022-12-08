import React from "react";

type Props = {
  label: string;
  placeholder: string;
};

function TextInput({ label, placeholder }: Props) {
  return (
    <div>
      <label htmlFor='text'>{label}</label>
      <input type='text' placeholder={placeholder} />
    </div>
  );
}

export default TextInput;
