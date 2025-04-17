"use client";

import Logo from "./HeaderComponents/Logo";
import NavTabs from "./HeaderComponents/NavTabs";
import SearchBar from "./HeaderComponents/SearchBar";
import UserMenu from "./HeaderComponents/UserMenu";

interface HeaderProps {
  disabledMenu:boolean;
}

export default function Header({disabledMenu}:HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 p-2 md:p-4 lg:rounded-b-[25px] shadow-md bg-white transition duration-100" style={{ zIndex: 200 }} >
      <NavTabs />
      <div className=" flex items-center justify-evenly md:justify-between  gap-3"> 
        <Logo />
        <SearchBar />
        <UserMenu disabledMenu={disabledMenu}  />
      </div>
    </header>
  );
}