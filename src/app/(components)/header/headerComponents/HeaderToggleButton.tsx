import { Menu } from 'lucide-react';

interface ToggleButtonProps {
  onClick: () => void;
}

export default function ToggleButton({ onClick }: ToggleButtonProps) {
  return (
    <button 
      className="menu-icon flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition cursor-pointer lg:hidden"
      onClick={onClick}
    >
      <Menu className="text-red-500 w-6 h-6" />
    </button>
  );
}
