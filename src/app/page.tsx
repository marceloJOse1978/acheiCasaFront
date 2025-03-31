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
      <Filter />
      <div>
        <SideMenu />
        <Highlights />
      </div>
      <Footer />
    </>
  );
}
