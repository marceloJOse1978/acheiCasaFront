import React from 'react';

interface RegisterSignupProps {
  text: string;
  onClick?: () => void;
  icon?: React.ElementType; 
}

const RegisterSignup: React.FC<RegisterSignupProps> = ({ text, onClick, icon: Icon }) => {
  const IconComponent = Icon || null;

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center mt-2 cursor-pointer 
                justify-start border pl-20 py-2 rounded-lg mb-2 
                bg-white hover:bg-gray-100 transition"
    >
      {IconComponent && <IconComponent size={20} className="text-gray-400 mr-12" />}
      <span className="text-gray-700 mr-16">{text}</span>
    </button>
  );
};

export default RegisterSignup;
