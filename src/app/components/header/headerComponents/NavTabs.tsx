"use client";
import { useState } from "react";
import "./style.css";

export default function NavTabs() {
  const [activeTab, setActiveTab] = useState("hospedagem");

  return (
    <div className="btn-area flex items-center justify-center gap-4">
      <a 
        href="#" 
        className={`
          text-[#999999] 
          text-[11px] 
          transition-all 
          duration-300 
          ease-in-out 
          relative 
          w-max 
          btn-hospedagem 
          ${activeTab === "hospedagem" ? "text-red-500 font-medium active" : ""}
        `}
        onClick={() => setActiveTab("hospedagem")}
      >
        Hospedagem
      </a>
      <a 
        href="#" 
        className={`
          text-[#999999] 
          text-[11px] 
          transition-all 
          duration-300 
          ease-in-out 
          relative 
          w-max 
          btn-vendas 
          ${activeTab === "vendas" ? "text-red-500 font-medium active" : ""}
        `}
        onClick={() => setActiveTab("vendas")}
      >
        Vendas
      </a>
    </div>
  );
}
