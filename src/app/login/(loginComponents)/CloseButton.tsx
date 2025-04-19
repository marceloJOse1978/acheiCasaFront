import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={onClose}
        className="text-red-500 cursor-pointer hover:bg-red-200 rounded-full"
      >
        <IoMdCloseCircleOutline size={25} />
      </button>
    </div>
  );
};

export default CloseButton;
