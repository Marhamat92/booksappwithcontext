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
        className='bg-white text-orange-800 font-bold py-2 px-4 rounded-md border border-orange-800'
      >
        {buttonText}
      </button>
    </div>
  );
}

export default MainButton;
