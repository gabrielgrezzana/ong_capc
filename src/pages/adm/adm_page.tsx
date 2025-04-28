import React, { useState, useEffect } from 'react';
import { auth, logoutAdmin } from '../../database/firebaseConfig';
// import AdminLogin from './AdminLogin';
// import AdminNotices from './AdminNotices';
import AdminNotices from './adm_notices';
//import AdminPanel from './adm_panel';
import AdminLogin from './adm_login';

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Verificar estado de autenticação ao montar o componente
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthenticated(!!user);
      setLoading(false);
    });

    // Limpar o listener quando o componente for desmontado
    return () => unsubscribe();
  }, []);

  // Função para lidar com o logout
  const handleLogout = async () => {
    try {
      await logoutAdmin();
      setAuthenticated(false);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  // Mostrar indicador de carregamento enquanto verifica a autenticação
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <p>Carregando...</p>
      </div>
    );
  }

  // Se não estiver autenticado, mostrar a tela de login
  if (!authenticated) {
    return <AdminLogin onLoginSuccess={() => setAuthenticated(true)} />;
  }

  // Se estiver autenticado, mostrar a tela de administração com botão de logout
  return (
    <div>
      <div style={{
        backgroundColor: '#F77C2C',
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Painel Administrativo</h1>
        
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: 'white',
            color: '#F77C2C',
            border: 'none',
            padding: '8px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Sair
        </button>
      </div>
      
      <AdminNotices />
    </div>
  );
};

export default AdminPage;