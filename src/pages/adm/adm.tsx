// Arquivo: AdminPanel.tsx
import React, { useState, useEffect } from 'react';
import { auth, loginAdmin, logoutAdmin, saveMessage, getMessage } from '../../database/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

// Definindo o tipo para as props do componente (se necessário)
interface AdminPanelProps {
  className?: string; // Propriedade opcional para classes CSS adicionais
}

const AdminPanel: React.FC<AdminPanelProps> = ({ className = '' }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [notification, setNotification] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // Verificar estado de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      setLoading(false);
      
      // Se estiver logado, carrega a mensagem atual
      if (user) {
        loadCurrentMessage();
      }
    });
    
    // Limpeza ao desmontar o componente
    return () => unsubscribe();
  }, []);

  // Carrega a mensagem atual do Firebase
  const loadCurrentMessage = async (): Promise<void> => {
    try {
      const currentMessage = await getMessage();
      setMessage(currentMessage);
    } catch (error) {
      setNotification(`Erro ao carregar mensagem: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  };

  // Função de login
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setNotification('');
    
    try {
      await loginAdmin(email, password);
      setNotification('Login realizado com sucesso!');
      setEmail('');
      setPassword('');
    } catch (error) {
      setNotification(`Erro no login: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  };

  // Função de logout
  const handleLogout = async (): Promise<void> => {
    try {
      await logoutAdmin();
      setNotification('Logout realizado com sucesso!');
    } catch (error) {
      setNotification(`Erro ao fazer logout: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  };

  // Função para salvar a mensagem
  const handleSaveMessage = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!message.trim()) {
      setNotification('A mensagem não pode estar vazia!');
      return;
    }
    
    try {
      await saveMessage(message);
      setNotification('Mensagem salva com sucesso!');
    } catch (error) {
      setNotification(`Erro ao salvar mensagem: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  };

  // Exibe tela de carregamento
  if (loading) {
    return <div className={`admin-panel ${className}`}>Carregando...</div>;
  }

  // Renderiza o formulário de login se não estiver logado
  if (!isLoggedIn) {
    return (
      <div className={`admin-panel ${className}`}>
        <h2>Painel Administrativo - CAPC</h2>
        <p>Faça login para editar as mensagens do site</p>
        
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              id="email"
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input 
              id="password"
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
        
        {notification && <p className="notification">{notification}</p>}
      </div>
    );
  }

  // Renderiza o editor de mensagens se estiver logado
  return (
    <div className={`admin-panel ${className}`}>
      <h2>Painel Administrativo - CAPC</h2>
      <p>Editar Mensagem de Páscoa</p>
      
      <form onSubmit={handleSaveMessage}>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea 
            id="message"
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            rows={8}
            cols={50}
            required
          />
        </div>
        <button type="submit">Salvar Mensagem</button>
        <button type="button" onClick={handleLogout}>Sair</button>
      </form>
      
      {notification && <p className="notification">{notification}</p>}
    </div>
  );
};

export default AdminPanel;