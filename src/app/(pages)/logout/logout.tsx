import LogoutButton from "./(logoutComponents)/LogoutButton";

interface LogoutProps {
  active: boolean;
  handleLogout?: () => void;
  ShowLogoutModal?: () => void;
}

export default function Anuncio({ active, handleLogout, ShowLogoutModal }: LogoutProps) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center transition-opacity duration-300">
      <div className="flex items-center justify-center gap-3 h-[150px] w-[300px] bg-white border border-[#999] rounded-lg">
        <LogoutButton
          text="Voltar"
          bgColor="bg-green-500"
          onclick={ShowLogoutModal}
        />
        <LogoutButton
          text="Sair"
          bgColor="bg-red-500"
          onclick={handleLogout}
        />
      </div>
    </div>
  );
}



{/* <div className={`flex items-center justify-center fixed top-[79px] md:top-[114px] left-0 right-0 bottom-0 bg-black/50 transition-opacity duration-300 z-1000`}>
    <div className="flex items-center justify-center gap-3 h-[150px] w-[300px] bg-[#fff] border border-[#999] rounded-lg">
        <LogoutButton text="Voltar" bgColor="bg-green-500" />
        <LogoutButton text="Sair" bgColor="bg-red-500" />
    </div>
</div> */}