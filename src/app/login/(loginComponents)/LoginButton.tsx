import React from 'react';

interface LoginButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.ElementType;
}

const LoginButton: React.FC<LoginButtonProps> = ({ text, onClick, icon: Icon }) => {
  return (
    <>
        <button
            onClick={onClick}
            className="w-full flex items-center cursor-pointer justify-start border py-2 pl-2 rounded-lg mb-2 bg-white hover:bg-gray-100 transition">
            {Icon && <Icon size={20} className="text-gray-400 mr-12 " />}
            <span className="text-gray-700 mr-16 text-center">{text}</span>
        </button>
    </>
  );
};

export default LoginButton;
