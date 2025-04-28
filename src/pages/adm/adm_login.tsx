import React, { useState, useEffect } from 'react';
import { loginAdmin } from '../../database/firebaseConfig';

const AdminLogin = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Limpar erro quando o usuário começa a digitar
  useEffect(() => {
    setError(null);
  }, [email, password]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await loginAdmin(email, password);
      onLoginSuccess();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Erro no login:', error);
      
      // Tratando diferentes erros de autenticação do Firebase
      if (error.code === 'auth/invalid-credential') {
        setError('Email ou senha incorretos.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Email inválido.');
      } else if (error.code === 'auth/user-disabled') {
        setError('Este usuário foi desativado.');
      } else if (error.code === 'auth/user-not-found') {
        setError('Usuário não encontrado.');
      } else if (error.code === 'auth/wrong-password') {
        setError('Senha incorreta.');
      } else if (error.code === 'auth/too-many-requests') {
        setError('Muitas tentativas de login. Tente novamente mais tarde.');
      } else {
        setError('Erro ao fazer login. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '100px auto',
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    }}>
      <h1 style={{ 
        color: '#F77C2C', 
        textAlign: 'center', 
        marginBottom: '30px',
        fontSize: '1.8rem'
      }}>
        Acesso Administrativo
      </h1>
      
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '20px' }}>
          <label 
            htmlFor="email" 
            style={{ 
              display: 'block', 
              marginBottom: '8px',
              color: '#333',
              fontSize: '1rem'
            }}
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '25px' }}>
          <label 
            htmlFor="password" 
            style={{ 
              display: 'block', 
              marginBottom: '8px',
              color: '#333',
              fontSize: '1rem'
            }}
          >
            Senha:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '1rem'
            }}
          />
        </div>
        
        {error && (
          <div style={{ 
            backgroundColor: '#ffebee', 
            color: '#c62828', 
            padding: '10px 15px',
            borderRadius: '4px',
            marginBottom: '20px',
            fontSize: '0.9rem'
          }}>
            {error}
          </div>
        )}
        
        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            backgroundColor: '#F77C2C',
            color: 'white',
            border: 'none',
            padding: '12px',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;