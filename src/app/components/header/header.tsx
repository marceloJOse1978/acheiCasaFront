"use client";

import Logo from "./headerComponents/Logo";
import NavTabs from "./headerComponents/NavTabs";
import SearchBar from "./headerComponents/SearchBar";
import UserMenu from "./headerComponents/UserMenu";

export default function Header() {
  return (
    <header className="w-full h-auto p-2 md:p-4 flex items-center justify-between rounded-b-[25px] shadow-md">
      <Logo />
      <div className="option-area">
        <NavTabs />
        <SearchBar />
      </div>
      <UserMenu />
    </header>
  );
}
