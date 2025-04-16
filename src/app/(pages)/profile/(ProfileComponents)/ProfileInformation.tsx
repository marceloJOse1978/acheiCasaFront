import { useState, useEffect } from "react";

export default function ShowInformation({
  keyText,
  keyValue,
  isEditable = false,
}: {
  keyText: string;
  keyValue: string;
  isEditable?: boolean;
}) {
  const [inputValue, setInputValue] = useState(keyValue);

  useEffect(() => {
    setInputValue(keyValue);
  }, [keyValue]);

  return (
    <div className="select-none">
      <p className="font-semibold text-sm leading-none tracking-normal text-gray-500">{keyText}</p>
      <input
        type="text"
        className={`w-full h-[40px] rounded-[5px] px-4 py-2 text-sm leading-none tracking-normal mt-[3px] 
          ${isEditable ? 'bg-white text- border border-[#FF453A] outline-none' : 'bg-[#F5F5F5] text-[#999999] border border-transparent'}
        `}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        readOnly={!isEditable}
      />
    </div>
  );
}
