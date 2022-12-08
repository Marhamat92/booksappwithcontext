import React from "react";

type Props = {
  buttonText: string;
  type: "submit" | "reset" | "button";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function MainButton({ buttonText, type, onClick }: Props) {
  return (
    <div>
      <button
        type={type}
        className='bg-white text-orange-800 font-bold py-2 px-4 rounded-md border border-orange-800 my-2'
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default MainButton;
