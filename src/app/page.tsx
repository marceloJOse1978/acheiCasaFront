import React from 'react';
import HomePage from './(pages)/home/page';
import Footer from './(components)/Footer/footer'
import Header from './(components)/Header/header'

export default function Home() {
  return (
    <>
    <Header disabledMenu={true} />
    <HomePage />
    <Footer />
    </>
  );
}
