"use client";
import { Menu, UserRound } from "lucide-react";

export default function UserMenu() {
  return (
    <div className="menu-area flex items-center gap-4 p-[0.8em] shadow-md shadow-black/10 rounded-[30px]">
      <a href="#" className="menu-icon" aria-label="Abrir Menu">
        <Menu className="text-red-500" />
      </a>
      <a href="#" className="user-icon" aria-label="Área do Usuário">
        <UserRound className="text-red-500" />
      </a>
    </div>
  );
}
