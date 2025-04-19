import ProfileSection from './HeaderProfileSection';
import NavSection from './HeaderNavSection';

interface SideMenuProps {
  visible: boolean;
  isLargeScreen: boolean;
  toggleMenu: () => void;
  activeLink: string;
  handleClick: (href: string) => void;
}

export default function SideMenu({ visible, isLargeScreen, toggleMenu, activeLink, handleClick }: SideMenuProps) {
  return (
    <div 
      id="sideMenu" 
      className={`
        fixed z-50 bg-white shadow-[2px_0_10px_rgba(0,0,0,0.1)] 
        left-[0px] top-[79px] md:top-[114px] lg:top-[126px] bottom-0 
        p-4 w-[244px] text-[#999999] lg:rounded-[0px_20px_20px_0px] 
        border border-[#D9D9D9] lg:fixed lg:left-0 lg:bottom-[26px] 
        transition-all duration-300 ease-in-out
        ${visible || isLargeScreen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
      `}
    >
      {!isLargeScreen && (
        <button 
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 text-gray-500"
          onClick={toggleMenu}
          aria-label="Fechar menu"
        >
          ×
        </button>
      )}
      
      <ProfileSection />
      <NavSection activeLink={activeLink} handleClick={handleClick} />
    </div>
  );
}
