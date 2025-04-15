import { LucideIcon } from 'lucide-react'; // importante tipar corretamente o ícone

interface EditButtonProps {
  text: string;
  onClick?: () => void;
  icon: LucideIcon;
  disabled?: boolean;
  bgColor?: string; 
  visible?: boolean; 
}

export default function EditButton({
  text,
  onClick,
  icon: Icon,
  disabled,
  bgColor = '#FF453A',
  visible = true, 
}: EditButtonProps) {
  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-[150px] flex items-center justify-center gap-2 text-white rounded-[30px] py-2 px-4 mt-4 cursor-pointer transition border`}
      style={{
        backgroundColor: bgColor,
        borderColor: bgColor,
        display: visible ? 'flex' : 'none',
      }}
>
  <span className="font-semibold text-base leading-none tracking-normal text-center">
    {text}
  </span>
  <Icon />
</button>

  );
}
