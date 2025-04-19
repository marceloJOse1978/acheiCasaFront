interface OverlayProps {
    visible: boolean;
    onClick: () => void;
  }
  
  export default function Overlay({ visible, onClick }: OverlayProps) {
    return (
      <div 
        className={`fixed top-[79px] md:top-[114px] left-0 right-0 bottom-0 bg-black/20 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClick}
        aria-hidden="true"
      />
    );
  }
  