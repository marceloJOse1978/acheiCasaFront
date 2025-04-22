import React from 'react';

interface ButtonCompProps {
  text: string;
  onClick?: () => void;
}

const ButtonComponent = ({ text, onClick }: ButtonCompProps) => {
  return (
    <button onClick={onClick} className="w-full bg-red-500 text-white py-2 rounded-lg mt-4 font-semibold cursor-pointer hover:bg-red-600">
      {text}
    </button>
  );
};

export default ButtonComponent;
