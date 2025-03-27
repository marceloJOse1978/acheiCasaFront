"use client";
import { useState } from "react";
import { Menu, UserRound } from "lucide-react";
import Link from "next/link";

export default function UserMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Área dos ícones */}
      <div className="menu-area flex items-center gap-4 p-[0.8em] shadow-md shadow-black/10 rounded-[30px]">
        <button 
          className="menu-icon flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Abrir Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="text-red-500 w-6 h-6" />
        </button>
        <Link href="/profile" className="user-icon flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition" aria-label="Área do Usuário">
          <UserRound className="text-red-500 w-6 h-6" />
        </Link>
      </div>

      {/* Menu dropdown */}
{/*       {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 border border-gray-200 z-50">
          <Link href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Configurações</Link>
          <Link href="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Sair</Link>
        </div>
      )} */}
    </div>
  );
}
