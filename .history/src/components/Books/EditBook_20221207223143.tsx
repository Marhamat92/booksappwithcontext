import React from "react";

type Props = {};

function EditBook({}: Props) {
  return (
    <div>
      <form>
        <label htmlFor=''>Edit Title</label>
        <input type='text' placeholder='Book Title' />
      </form>
    </div>
  );
}

export default EditBook;
