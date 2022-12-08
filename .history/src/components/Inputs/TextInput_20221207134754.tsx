import React from "react";

type Props = {};

function TextInput({}: Props) {
  return (
    <div>
      <label htmlFor='text'>Text</label>
      <input type='text' />
    </div>
  );
}

export default TextInput;
