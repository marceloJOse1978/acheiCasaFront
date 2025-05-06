'use client'

import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ResetPassword() {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      e.target.value = '';
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-black">
        <h2 className="text-xl font-semibold mb-4 text-center">Digite o código de verificação</h2>
        <div className="flex justify-between gap-2">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              inputMode="numeric"
              className="w-10 h-12 text-center border border-gray-300 rounded text-black text-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={(e) => handleChange(i, e)}
              ref={(el) => { inputRefs.current[i] = el }}
              aria-label={`Dígito ${i + 1} do código`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
