import React, { useState, useEffect } from 'react';
import { getAllMessages, deleteMessage, saveMessage, MessageWithId } from '../../database/firebaseConfig';

// Componente para gerenciar as mensagens/avisos
const AdminNotices = () => {
  const [messages, setMessages] = useState<MessageWithId[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [newMessage, setNewMessage] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean | null>(null);

  
  

  
  // Buscar todas as mensagens ao montar o componente
  useEffect(() => {
    fetchMessages();
  }, []);


  // Função para buscar mensagens do Firestore
  const fetchMessages = async () => {
    setLoading(true);
    try {
      const allMessages = await getAllMessages();
      setMessages(allMessages);
    } catch (error) {
      console.error("Erro ao buscar mensagens:", error);
    } finally {
      setLoading(false);
    }
  };

  // Função para excluir uma mensagem
  const handleDeleteMessage = async (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir esta mensagem?")) {
      setIsDeleting(true);
      try {
        const success = await deleteMessage(id);
        if (success) {
          // Remover a mensagem excluída do estado
          setMessages(prevMessages => prevMessages.filter(msg => msg.id !== id));
        }
      } catch (error) {
        console.error("Erro ao excluir mensagem:", error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  // Função para adicionar uma nova mensagem
  const handleAddMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    try {
      const success = await saveMessage(newMessage);
      setSaveSuccess(success);
      if (success) {
        setNewMessage('');
        // Atualiza a lista de mensagens
        fetchMessages();
      }

      // Limpa a notificação após 3 segundos
      setTimeout(() => {
        setSaveSuccess(null);
      }, 3000);
    } catch (error) {
      console.error("Erro ao salvar mensagem:", error);
      setSaveSuccess(false);
    }
  };

  // Formatar a data para exibição
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#F77C2C', marginBottom: '30px' }}>Gerenciar Avisos e Notícias</h1>
      
      {/* Formulário para adicionar nova mensagem */}
      <div 
        style={{ 
          backgroundColor: '#f8f8f8', 
          padding: '20px', 
          borderRadius: '8px',
          marginBottom: '30px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <h2 style={{ color: '#333', marginBottom: '15px', fontSize: '1.5rem' }}>Adicionar Nova Mensagem</h2>
        
        <form onSubmit={handleAddMessage}>
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Digite a nova mensagem aqui..."
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              minHeight: '120px',
              marginBottom: '15px',
              fontSize: '1rem'
            }}
          />
          
          <button
            type="submit"
            disabled={newMessage.trim() === ''}
            style={{
              backgroundColor: '#F77C2C',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              opacity: newMessage.trim() === '' ? 0.7 : 1
            }}
          >
            Adicionar Mensagem
          </button>

          {saveSuccess === true && (
            <span style={{ color: 'green', marginLeft: '15px' }}>Mensagem salva com sucesso!</span>
          )}
          
          {saveSuccess === false && (
            <span style={{ color: 'red', marginLeft: '15px' }}>Erro ao salvar mensagem.</span>
          )}
        </form>
      </div>
      
      {/* Lista de mensagens */}
      <div>
        <h2 style={{ color: '#333', marginBottom: '15px', fontSize: '1.5rem' }}>Mensagens Existentes</h2>
        
        {loading ? (
          <p>Carregando mensagens...</p>
        ) : messages.length === 0 ? (
          <p>Nenhuma mensagem encontrada.</p>
        ) : (
          <div>
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  backgroundColor: 'white',
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  position: 'relative',
                  borderLeft: '4px solid #F77C2C'
                }}
              >
                <div style={{ marginBottom: '10px', color: '#777', fontSize: '0.9rem' }}>
                  Data: {formatDate(message.updatedAt)}
                </div>
                
                <div style={{ marginBottom: '15px', fontSize: '1.1rem' }}>
                  {message.notice}
                </div>
                
                <button
                  onClick={() => handleDeleteMessage(message.id)}
                  disabled={isDeleting}
                  style={{
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    opacity: isDeleting ? 0.7 : 1
                  }}
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNotices;