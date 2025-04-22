import { useState } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const closeForm = () => {
    setShowModal(true); // Mostra o modal
  };

  const handleConfirm = () => {
    setShowModal(false);
    router.push("/"); // Redireciona
  };

  const handleCancel = () => {
    setShowModal(false); // Fecha o modal
  };

  return (
    <div>
      <button onClick={closeForm}>Fechar Formulário</button>  
        <div className="modal-overlay">
          <div className="modal">
            <p>Deseja fechar isso?</p>
            <div className="modal-buttons">
              <button onClick={handleConfirm}>Sim</button>
              <button onClick={handleCancel}>Não</button>
            </div>
          </div>
        </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex; justify-content: center; align-items: center;
        }
        .modal {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.2s ease, opacity 0.2s ease;
            transform: scale(1);
            opacity: 1;
        }
        .modal-buttons {
          margin-top: 1rem;
        }
        .modal-buttons button {
          margin: 0 0.5rem;
        }
      `}</style>
    </div>
  );
}
