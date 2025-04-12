import ButtonGray from '@/app/(components)/Buttons/ButtonGray';

interface Chat {
  id: string;
  imagem_url: string;
  nome: string;
  mensagem: string;
  time: string;
  read: boolean;
  status: 'online' | 'offline';
  last_seen: string | null;
}

interface ChatProps {
  selectedChat: Chat | null;
}

const formatLastSeen = (lastSeen: string | null): string => {
  if (!lastSeen) return 'Online';

  const last = new Date(lastSeen);
  const now = new Date();
  const diffMs = now.getTime() - last.getTime();

  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 60) return `Activo há ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `Activo há ${hours}h`;
  const days = Math.floor(hours / 24);
  return `Activo há ${days}d`;
};

const Chat = ({ selectedChat }: ChatProps) => {
  return (
    <section className={`fixed left-[580px] right-[25px] bottom-[25px] top-[126px] 
      bg-white rounded-[25px] shadow-lg p-6 overflow-y-auto 
      ${!selectedChat ? 'flex items-center justify-center' : ''}`}>
      {selectedChat ? (
        <div className="space-y-4 w-full">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <img
                src={selectedChat.imagem_url}
                alt={selectedChat.nome}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {selectedChat.nome}
                  </h2>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      selectedChat.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                    title={selectedChat.status === 'online' ? 'Online' : 'Offline'}
                  ></span>
                </div>
                <p className="text-sm text-gray-500">
                  {formatLastSeen(selectedChat.last_seen)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ButtonGray text="Arquivar" />
              <ButtonGray text="Marcar como resolvido" />
            </div>
          </div>

          <div className="mt-6 text-gray-700">
            <p>{selectedChat.mensagem}</p>
          </div>
        </div>
      ) : (
        <div className="text-gray-500 text-center text-lg">
          Selecione uma conversa para começar
        </div>
      )}
    </section>
  );
};

export default Chat;
