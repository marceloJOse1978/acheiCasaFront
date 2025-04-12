import { Pencil } from 'lucide-react';
import { LucideIcon } from 'lucide-react'; // importante tipar corretamente o ícone

interface EditButtonProps {
  text: string;
  onClick?: () => void;
  icon: LucideIcon;
}

export default function EditButton({ text, onClick, icon: Icon }: EditButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center gap-2 bg-[#FF453A] text-white rounded-[30px] py-2 px-4 mt-4 cursor-pointer hover:bg-[#fff] hover:text-[#FF453A] transition border border-[#FF453A]"
    >
      <span className="font-semibold text-base leading-none tracking-normal text-center">{text}</span>
      <Icon />
    </button>
  );
}
