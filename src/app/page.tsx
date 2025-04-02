import React from 'react';
import Header from '../app/components/header/header';
import Footer from '../app/components/footer/footer';
import Filter from './components/filter/filter';
import Highlights from './components/highlights/highlights';
import SideMenu from './components/sideMenu/sideMenu';

export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-35 lg:mt-45">
        <Filter />
      </div>
      <div className="lg:w-[100%] lg:pl-[260px] lg:pr-[30px] lg:pb-[30px]">
        <Highlights />
      </div>
    </>
  );
}
