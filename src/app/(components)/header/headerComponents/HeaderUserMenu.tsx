"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { KeyRound, UserRound } from "lucide-react";
import ToggleButton from "./HeaderToggleButton";
import SideMenu from "./HeaderSideMenu";
import Overlay from "./HeaderOverlay";
import LoginForm from "@/app/login/LoginForm";
import "./style.css";

interface HeaderProps {
  disabledMenu?: boolean;
  buttonLogin?:boolean;
}

export default function UserMenu({ disabledMenu, buttonLogin }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const [showLogin, setShowLogin] = useState(false);

  function toggleMenu() {
    if (menuOpen) {
      setMenuVisible(false);
      setTimeout(() => setMenuOpen(false), 300);
    } else {
      setMenuOpen(true);
      setTimeout(() => setMenuVisible(true), 10);
    }
  }

  useEffect(() => {
    const checkScreenSize = () => {
      const large = window.innerWidth >= 1024;
      setIsLargeScreen(large);
      if (large) {
        setMenuOpen(true);
        setMenuVisible(true);
      }
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleClick = (href: string): void => {
    setActiveLink(href);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="relative">
      {!disabledMenu ? (
        <div className="menu-area flex items-center gap-1 md:gap-4 p-[0.1em] md:p-[0.8em] shadow-md shadow-black/10 rounded-[30px] z-50">
          <ToggleButton onClick={toggleMenu} />
          <Link href="/profile" className="user-icon flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition hidden lg:block" aria-label="Área do Usuário">
            <UserRound className="text-red-500 w-6 h-6" />
          </Link>
        </div>
      ) : (
        <div className="menu-area flex items-center gap-1 md:gap-4 p-[0.1em] md:p-[0.8em] shadow-md shadow-black/10 rounded-[30px] z-50">
          <ToggleButton onClick={toggleMenu} />
          <button
            className="user-icon flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition hidden lg:block"
            aria-label="Área do Usuário"
            onClick={handleLoginClick}
          >
            <>
              <KeyRound className="text-red-500 w-6 h-6" />
              {showLogin && (
                <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-[9999]">
                  {showLogin && <LoginForm />}
                </div>
              )}
            </>
          </button>
          {/* {showLogin && <LoginForm />} */}

        </div>
      )}    

      {!disabledMenu && (menuOpen || isLargeScreen) && (
        <SideMenu
          visible={menuVisible}
          isLargeScreen={isLargeScreen}
          toggleMenu={toggleMenu}
          activeLink={activeLink}
          handleClick={handleClick}
        />
      )}


      {menuOpen && !isLargeScreen && (
        <Overlay visible={menuVisible} onClick={toggleMenu} />
      )}
    </div>
  );
}
