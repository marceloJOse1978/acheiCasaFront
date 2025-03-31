
import React from 'react';
import "./styleFooter.css"

const Footer = () => {
  return (
    <footer 
    className="footer"
    >
        <div className="container-element">
            <div className='lists' >
                <div className=''>
                    <ul>
                        <li>
                            <a href="#" className='text-[14px] font-bold'>Home</a>
                        </li>
                        <li>
                            <a href="#" className='text-[14px] font-bold'>Serviços</a>
                        </li>
                        <li>
                            <a href="#" className='text-[14px] font-bold'>Blog</a>
                        </li>
                        <li>
                            <a href="#" className='text-[14px] font-bold'>Notícia</a>
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
            <div className='social-media'>
            <ul>
                <li><a href="#"><img src="whatsapp.png" alt="" /></a></li>
                <li><a href="#"><img src="instagram.png" alt="" /></a></li>
                <li><a href="#"><img src="facebook.png" alt="" /></a></li>
            </ul>
        </div>
        </div>
        
    </footer>

  );
};

export default Footer;
