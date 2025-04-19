"use client"
import React, { useEffect } from 'react';
import HomePage from './(pages)/home/page';
import Footer from './(components)/Footer/footer';
import Header from './(components)/Header/header';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); // ← define aqui antes de usar

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/home");
    }
  }, [router]);

  return (
    <>
      <Header disabledMenu={true} />
      <HomePage />
      <Footer />
    </>
  );
}
