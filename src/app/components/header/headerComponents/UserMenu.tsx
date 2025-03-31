"use client";
import { useState } from "react";
import { Menu, UserRound } from "lucide-react";
import Link from "next/link";

export default function UserMenu() {

  return (
    <div className="relative">
      {/* Área dos ícones */}
      <div className="menu-area flex items-center gap-4 p-[0.8em] shadow-md shadow-black/10 rounded-[30px]">
        <button 
          className="menu-icon flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
        >
          <Menu className="text-red-500 w-6 h-6" />
        </button>
        <Link href="/profile" className="user-icon flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition" aria-label="Área do Usuário">
          <UserRound className="text-red-500 w-6 h-6" />
        </Link>
      </div>

    </div>
  );
}
