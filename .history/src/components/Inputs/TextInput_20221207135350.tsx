import React from "react";

type Props = {
  label: string;
  placeholder: string;
};

function TextInput({ label, placeholder }: Props) {
  return (
    <form>
      <label htmlFor='text'>{label}</label>
      <input type='text' placeholder={placeholder} />
    </form>
  );
}

export default TextInput;
