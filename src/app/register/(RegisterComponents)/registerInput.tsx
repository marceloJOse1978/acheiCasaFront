import React from 'react';

interface RegisterInputProps {
  type: string;
  inputName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ElementType;
  placeholder?: string;
  error?: string;
}

const RegisterInput: React.FC<RegisterInputProps> = ({
  type,
  inputName,
  icon: Icon,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <div>
      <div className="flex items-center border rounded p-2 mt-3">
        {Icon && <Icon size={20} className="text-gray-400 mr-2" />}
        <input
          type={type}
          name={inputName}
          placeholder={placeholder}
          className="w-full outline-none text-gray-600 no-spinner"
          onChange={onChange}
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default RegisterInput;
