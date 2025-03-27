
import React from 'react';

const Footer = () => {
  return (
    <footer 
    className="text-white bg-[#FF453A] items-center h-[220px] w-full relative"
    >
        <img 
        src="/footer-image.png" 
        alt="Footer Image" 
        className="absolute left-0 h-full object-contain"
        />
        
        <div className='flex justify-between  w-full' >
            <div className=''>
                <ul>
                    <li>
                        <a href="#" className='text-[14px]'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='text-[14px]'>Serviços</a>
                    </li>
                    <li>
                        <a href="#" className='text-[14px]'>Blog</a>
                    </li>
                    <li>
                        <a href="#" className='text-[14px]'>Notícia</a>
                    </li>
                </ul>
            </div>
            <div className=''>
                <ul>
                    <li>
                        <a href="#" className='text-[14px]'>Sobre</a>
                    </li>
                    <li>
                        <a href="#" className='text-[14px]'>Quem Somos</a>
                    </li>
                    <li>
                        <a href="#" className='text-[14px]'>Missão e Visão</a>
                    </li>
                    <li>
                        <a href="#" className='text-[14px]'>Equipe</a>
                    </li>
                    <li>
                        <a href="#" className='text-[14px]'>Carreira</a>
                    </li>
                </ul>
            </div>
            <div className=''>
                <ul>
                    <li>
                        <a href="#" className='text-[14px]'>Contactos</a>
                    </li>
                    <li>
                        <a href="#" className='text-[14px]'>Telefone</a>
                    </li>
                    <li>
                        <a href="#" className='text-[14px]'>E-Mail</a>
                    </li>
                    <li>
                        <a href="#" className='text-[14px]'>Enderenço</a>
                    </li>
                    <li>
                        <a href="#" className='text-[14px]'>Rua</a>
                    </li>
                </ul>
            </div>
            <div className=''>
                <ul>
                    <li>
                        <a href="#" className='text-[14px]'>Apoio Técnico</a>
                    </li>
                    <li>
                        <a href="#" className='text-[14px]'>FAQs</a>
                    </li>
                    <li>
                        <a href="#" className='text-[14px]'>Documentação</a>
                    </li>
                    <li>
                        <a href="#" className='text-[14px]'>Live Chat</a>
                    </li>
                </ul>
            </div>

        </div>
        <div>
            <ul>
                <li><a href="#"><img src="whatsapp.png" alt="" /></a></li>
                <li><a href="#"><img src="instagram.png" alt="" /></a></li>
                <li><a href="#"><img src="facebook.png" alt="" /></a></li>
            </ul>
        </div>
    </footer>

  );
};

export default Footer;
