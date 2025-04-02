"use client";

import Logo from "./headerComponents/Logo";
import NavTabs from "./headerComponents/NavTabs";
import SearchBar from "./headerComponents/SearchBar";
import UserMenu from "./headerComponents/UserMenu";
import "./style.css"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 p-2 md:p-4 flex items-center justify-between rounded-b-[25px] shadow-md z-50 bg-white">
      <Logo />
      <div className="option-area">
        <NavTabs />
        <SearchBar />
      </div>
      <UserMenu />
    </header>
  );
}