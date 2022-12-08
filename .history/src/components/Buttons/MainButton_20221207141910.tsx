import React from "react";

type Props = {};

function MainButton({}: Props) {
  return (
    <div>
      <button className='bg-green-400 text-white font-bold py-2 px-4 rounded'>
        Submit
      </button>
    </div>
  );
}

export default MainButton;
