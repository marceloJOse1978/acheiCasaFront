import React from "react";

interface LoginInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon: React.ElementType;
}

const LoginInput: React.FC<LoginInputProps> = ({ type, placeholder, value, onChange, Icon }) => {
  return (
    <div className="mt-3 flex items-center border rounded-md px-3 py-2">
      <Icon className="text-gray-500" size={25} />
      <input
        type={type}
        placeholder={placeholder}
        className="ml-2 bg-transparent text-gray-400 w-full outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default LoginInput;
