import Image from "next/image";
import { Menu, UserRound, MapPin, Search } from "lucide-react";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-area">
        <a href="#">
        <Image src="/logo.png" alt="Logo" width={120} height={23} priority />
        </a>
      </div>

      <div className="option-area">
        <div className="btn-area">
          <a href="#" className="btn-hospedagem active">Hospedagem</a>
          <a href="#" className="btn-vendas">Vendas</a>
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
              placeholder="Buscar..."
              className="search-input"
            />
            <button type="submit" aria-label="Buscar" className="search-button">
              <Search />
            </button>
          </form>
        </div>
      </div>

      <div className="menu-area">
        <a href="#" className="menu-icon" aria-label="Abrir Menu">
          <Menu />
        </a>
        <a href="#" className="user-icon" aria-label="Área do Usuário">
        <UserRound />
        </a>
      </div>
    </header>
  );
}
