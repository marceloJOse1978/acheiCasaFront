import Image from "next/image";
import { Menu, User, MapPin, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-area">
        <Image src="/logo.png" alt="Logo" width={100} height={50} priority />
      </div>

      <div className="option-area">
        <div>
          <button className="btn-hospedagem">Hospedagem</button>
          <button className="btn-vendas">Vendas</button>
        </div>

        <div className="search-area">
          <MapPin className="icon" />
          <div>
            <p className="search-location">Luanda</p>
            <p className="search-destination">Escolha o seu destino</p>
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
        <button className="menu-icon" aria-label="Abrir Menu">
          <Menu />
        </button>
        <button className="user-icon" aria-label="Área do Usuário">
          <User />
        </button>
      </div>
    </header>
  );
}
