"use client";

import Logo from "./HeaderComponents/HeaderLogo";
import NavTabs from "./HeaderComponents/HeaderNavTabs";
import SearchBar from "./HeaderComponents/HeaderSearchBar";
import UserMenu from "./HeaderComponents/HeaderUserMenu";
import { useState, useEffect } from 'react'
import {USERDATA} from '@/app/Req/ApiUser'

interface HeaderProps {
  disabledMenu?:boolean;
}

export default function Header({disabledMenu}:HeaderProps) {
  const [user, setUser] = useState([]);
  useEffect(()=> {
    async function fechUsers(){
      try {
        const object = await USERDATA();
        setUser(object);
        console.log("Dados do user", Object)
      } catch(error) {
        console.log("erro ao pergar: ", error)
      }
    }
    fechUsers()
  }, [])

  console.log("testando o user: ", user)
  return (
    <header className="fixed top-0 left-0 right-0 p-2 md:p-4 lg:rounded-b-[25px] shadow-md bg-white transition duration-100" style={{ zIndex: 200 }} >
      <NavTabs />
      <div className=" flex items-center justify-evenly md:justify-between  gap-3"> 
        <Logo />
        <SearchBar />
        <UserMenu disabledMenu={disabledMenu}  />
      </div>
    </header>
  );
}