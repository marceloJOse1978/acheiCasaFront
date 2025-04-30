import ProfileSection from './HeaderProfileSection';
import NavSection from './HeaderNavSection';
import {USERDATA} from '@/app/Req/ApiUser'
import { useState, useEffect } from 'react'


interface SideMenuProps {
  visible: boolean;
  isLargeScreen: boolean;
  toggleMenu: () => void;
  activeLink: string;
  handleClick: (href: string) => void;
}

export default function SideMenu({ visible, isLargeScreen, toggleMenu, activeLink, handleClick }: SideMenuProps) {
  const [user, setUser] = useState<any>(null);
  useEffect(()=> {
    async function fechUsers(){
      try {
        const object = await USERDATA();
        setUser(object);
        console.log("Dados do user", object)
      } catch(error) {
        console.log("erro ao pergar: ", error)
      }
    }
    fechUsers()
  }, [])
  const userDataObject = user?.data || null;
  console.log("objecto data", userDataObject)
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
      
      <ProfileSection user={userDataObject} />
      <NavSection activeLink={activeLink} handleClick={handleClick} />
    </div>
  );
}
