"use client"

import Image from "next/image";
import { useState } from "react";
import { Menu, UserRound, MapPin, Search } from "lucide-react";
import "./style.css";

export default function Header() {
  const [activeTab, setActiveTab] = useState("hospedagem");
  return (
    <header className="header">
      <div className="logo-area">
        <a href="#">
        <Image src="/logo.png" alt="Logo" width={120} height={23} priority />
        </a>
      </div>

      <div className="option-area">
        <div className="btn-area">
          <a href="#"  className={`btn-hospedagem ${activeTab === "hospedagem" ? "active" : ""}`}
            onClick={() => setActiveTab("hospedagem")}>Hospedagem</a>
          <a href="#"  className={`btn-vendas ${activeTab === "vendas" ? "active" : ""}`}
            onClick={() => setActiveTab("vendas")}>Vendas</a>
        </div>

        <div className="search-area">
            <div className="search-location-area">
                <MapPin className="icon-pin" />
                <div className="search-location-info">
                    <a href="#" className="search-location">Luanda</a>
                    <p className="search-destination">Escolha o seu destino</p>
                </div>
            </div>
          <form className="search-form">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="search-input"
              id="search-input"
            />
            <label htmlFor="search-input">
              <button type="button" aria-label="Buscar" className="search-button">
              <Search className="w-[14px] h-[14px] text-[#fff]" />
              </button>
            </label>
          </form>
        </div>
      </div>

      <div className="menu-area">
        <a href="#" className="menu-icon" aria-label="Abrir Menu">
          <Menu className="text-[#F69A59] " />
        </a>
        <a href="#" className="user-icon" aria-label="Área do Usuário">
        <UserRound className="text-[#F69A59]  " />
        </a>
      </div>
    </header>
  );
}
