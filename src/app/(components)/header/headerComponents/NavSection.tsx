import { LayoutDashboard, House, MessageSquareMore, GitCompareArrows, Bell, Settings, Power } from 'lucide-react';
import ListButtonLink from '../../Buttons/ListButtonLink';

interface NavSectionProps {
  activeLink: string;
  handleClick: (href: string) => void;
}

export default function NavSection({ activeLink, handleClick }: NavSectionProps) {
  return (
    <>
      <div className='mt-2'>
        <ListButtonLink
          text='Dashboard'
          hrefLink='/dashboard'
          total=""
          active={activeLink === '/dashboard'}
          icon={LayoutDashboard}
          onClick={() => handleClick('/dashboard')}
        />
      </div>
      <nav className="mt-3">
        <ul className="space-y-2">
          {[
            { text: 'Início', href: '/home', icon: House },
            { text: 'Mensagem', href: '/message', icon: MessageSquareMore },
            { text: 'Comparar', href: '/compare', icon: GitCompareArrows },
            { text: 'Notificações', href: '/notification', icon: Bell, total: '+9' },
            { text: 'Definições', href: '/settings', icon: Settings },
            { text: 'Sair', href: '#', icon: Power },
          ].map(({ text, href, icon, total }) => (
            <li key={href}>
              <ListButtonLink
                text={text}
                hrefLink={href}
                total={total ?? ""}
                active={activeLink === href}
                icon={icon}
                onClick={() => handleClick(href)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
