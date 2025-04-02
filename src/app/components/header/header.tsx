"use client";

import Logo from "./headerComponents/Logo";
import NavTabs from "./headerComponents/NavTabs";
import SearchBar from "./headerComponents/SearchBar";
import UserMenu from "./headerComponents/UserMenu";
import "./style.css"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 p-2 md:p-4 lg:rounded-b-[25px] shadow-md bg-white transition duration-100" style={{ zIndex: 200 }} >
      <NavTabs />
      <div className=" flex items-center justify-evenly md:justify-between  gap-3"> 
        <Logo />
        <div className="option-area  md:block">
          <SearchBar />
        </div>
        <UserMenu />
      </div>
    </header>
  );
}