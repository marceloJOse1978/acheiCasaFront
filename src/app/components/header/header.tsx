import Image from 'next/image';
import { Menu, User, MapPin, <Search />} from "lucide-react";

export default function Header() {
    return (
      <header className="header">
        <div className="header-content">
          <div id="logo-area">
            <img src="/logo.png" alt="Logo" />
          </div>
          <div id="option-area">
            <div>
                <button>Hospedagem</button>
                <button>Vendas</button>
            </div>
            <div id='search-area'>
            <MapPin />
            <input type="text" placeholder="Buscar..." />
            </div>
          </div>
          <div id="menu-area">
            <div id="menu-icon">
                <Menu />
            </div>
            <div id="user-area">
                <User />
            </div>
          </div>
        </div>
      </header>
    );
  }
  