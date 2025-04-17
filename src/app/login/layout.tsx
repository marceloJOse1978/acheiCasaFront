import { toast } from "react-toastify";

// app/layout.jsx ou app/layout.tsx
export const metadata = {
    title: "Minha aplicação",
    description: "Descrição da aplicação",
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="pt">
        <body>
          <div className="">
            {children}
          </div>
        </body>
      </html>
    );
  }
  