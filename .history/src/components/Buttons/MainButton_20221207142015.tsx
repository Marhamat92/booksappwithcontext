import React from "react";

type Props = {
  buttonText: string;
  type: "submit" | "reset" | "button";
};

function MainButton({ buttonText, type }: Props) {
  return (
    <div>
      <button
        type={type}
        className='bg-green-400 text-white font-bold py-2 px-4 rounded'
      >
        {buttonText}
      </button>
    </div>
  );
}

export default MainButton;
