"use client";
import { useState } from "react";
import "./style.css";

export default function NavTabs() {
  const [activeTab, setActiveTab] = useState("hospedagem");

  return (
    <div className="flex items-center justify-center gap-4">
      <a 
        href="#" 
        id="btn-hospedagem"
        className={`relative text-[#999999] text-[11px] transition-all duration-300 ease-in-out w-max 
          ${activeTab === "hospedagem" ? "text-red-500 font-medium after:content-[''] after:bg-gradient-to-r after:from-red-500 after:to-[#FFC371] after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-[-2px]" : ""}`}        
        onClick={() => setActiveTab("hospedagem")}
      >
        Hospedagem
      </a>
      <a 
        href="#" 
        className={`relative text-[#999999] text-[11px] transition-all duration-300 ease-in-out w-max btn-vendas 
          ${activeTab === "vendas" ? "text-red-500 font-medium after:content-[''] after:bg-gradient-to-r after:from-red-500 after:to-[#FFC371] after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-[-2px]" : ""}`}        
        onClick={() => setActiveTab("vendas")}
      >
        Vendas
      </a>
    </div>
  );
}
