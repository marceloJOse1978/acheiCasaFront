export interface Notification {
    id: string
    titulo: string
    data: string
    tipo: 'sucesso' | 'erro' | 'alerta' | 'info'
    lida: boolean
    mensagem?: string
  }
  
  const notificacoes: Notification[] = [
    {
      id: '1',
      titulo: 'Novo usuário registrado',
      mensagem: 'Um novo usuário se cadastrou no sistema.',
      tipo: 'sucesso',
      data: '2025-04-10T10:23:00Z',
      lida: false,
    },
    {
      id: '2',
      titulo: 'Erro no pagamento',
      mensagem: 'Falha ao processar o pagamento do pedido #98213.',
      tipo: 'erro',
      data: '2025-04-09T16:45:00Z',
      lida: true,
    },
    {
      id: '3',
      titulo: 'Atualização disponível',
      mensagem: 'Uma nova versão da aplicação está disponível.',
      tipo: 'info',
      data: '2025-04-08T09:00:00Z',
      lida: false,
    },
    {
      id: '4',
      titulo: 'Sessão expirada',
      mensagem: 'Sua sessão foi encerrada por inatividade.',
      tipo: 'alerta',
      data: '2025-04-07T19:30:00Z',
      lida: true,
    },
    {
      id: '5',
      titulo: 'Backup realizado',
      mensagem: 'O backup automático foi concluído com sucesso.',
      tipo: 'sucesso',
      data: '2025-04-06T02:12:00Z',
      lida: true,
    },
    {
      id: '6',
      titulo: 'Tentativa de login suspeita',
      mensagem: 'Uma tentativa de login suspeita foi detectada.',
      tipo: 'alerta',
      data: '2025-04-05T22:10:00Z',
      lida: false,
    },
    {
      id: '7',
      titulo: 'Servidor reiniciado',
      mensagem: 'O servidor principal foi reiniciado às 03:00.',
      tipo: 'info',
      data: '2025-04-05T03:00:00Z',
      lida: true,
    },
    {
      id: '8',
      titulo: 'Erro de autenticação',
      mensagem: 'Usuário tentou acessar área restrita sem permissão.',
      tipo: 'erro',
      data: '2025-04-04T15:40:00Z',
      lida: false,
    },
    {
      id: '9',
      titulo: 'Nova funcionalidade disponível',
      mensagem: 'A funcionalidade de exportação de relatórios foi adicionada.',
      tipo: 'sucesso',
      data: '2025-04-03T08:25:00Z',
      lida: true,
    },
    {
      id: '10',
      titulo: 'Agendamento de manutenção',
      mensagem: 'O sistema estará fora do ar no dia 15/04 às 02:00.',
      tipo: 'info',
      data: '2025-04-02T18:10:00Z',
      lida: true,
    },
    {
      id: '11',
      titulo: 'Alteração de senha obrigatória',
      mensagem: 'Sua senha expirou, por favor, crie uma nova.',
      tipo: 'alerta',
      data: '2025-04-01T12:00:00Z',
      lida: false,
    },
    {
      id: '12',
      titulo: 'Erro na sincronização',
      mensagem: 'Falha ao sincronizar dados com o servidor externo.',
      tipo: 'erro',
      data: '2025-03-31T22:45:00Z',
      lida: true,
    },
    {
      id: '13',
      titulo: 'Relatório diário gerado',
      mensagem: 'O relatório do dia foi gerado com sucesso.',
      tipo: 'sucesso',
      data: '2025-03-30T00:00:00Z',
      lida: true,
    },
    {
      id: '14',
      titulo: 'Nova mensagem da equipe de suporte',
      mensagem: 'Verifique sua caixa de entrada para uma nova mensagem.',
      tipo: 'info',
      data: '2025-03-29T14:10:00Z',
      lida: false,
    },
    {
      id: '15',
      titulo: 'Uso elevado de memória',
      mensagem: 'O servidor está utilizando mais de 90% da memória.',
      tipo: 'alerta',
      data: '2025-03-28T10:50:00Z',
      lida: false,
    },
    {
      id: '16',
      titulo: 'Erro 500 detectado',
      mensagem: 'Erro interno detectado em múltiplas requisições.',
      tipo: 'erro',
      data: '2025-03-27T11:11:00Z',
      lida: true,
    },
    {
      id: '17',
      titulo: 'Novo administrador adicionado',
      mensagem: 'Um novo administrador foi adicionado ao sistema.',
      tipo: 'sucesso',
      data: '2025-03-26T17:30:00Z',
      lida: true,
    },
    {
      id: '18',
      titulo: 'Conexão perdida com banco de dados',
      mensagem: 'A conexão com o banco foi interrompida por 2 minutos.',
      tipo: 'erro',
      data: '2025-03-25T06:40:00Z',
      lida: true,
    },
    {
      id: '19',
      titulo: 'Atualização nos termos de uso',
      mensagem: 'Os termos de uso foram atualizados recentemente.',
      tipo: 'info',
      data: '2025-03-24T09:09:00Z',
      lida: false,
    },
    {
      id: '20',
      titulo: 'Limite de armazenamento atingido',
      mensagem: 'O uso de armazenamento atingiu 100% da cota.',
      tipo: 'alerta',
      data: '2025-03-23T04:44:00Z',
      lida: false,
    },
  ]

  export default notificacoes
  