// Arquivo: firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, signOut, User, Auth } from "firebase/auth";

// Interface para o tipo de configuração do Firebase
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Substitua com suas configurações do Firebase
const firebaseConfig: FirebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  databaseURL: "https://seu-projeto-default-rtdb.firebaseio.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "SEU_MESSAGING_ID",
  appId: "SEU_APP_ID"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth: Auth = getAuth(app);

// Interface para o objeto de mensagem
interface MessageData {
  text: string;
  updatedAt: string;
}

// Função para salvar a mensagem
export const saveMessage = async (message: string): Promise<boolean> => {
  try {
    const messageData: MessageData = {
      text: message,
      updatedAt: new Date().toISOString()
    };
    
    await set(ref(database, "notices/easter"), messageData);
    return true;
  } catch (error) {
    console.error("Erro ao salvar mensagem:", error);
    return false;
  }
};

// Função para buscar a mensagem
export const getMessage = async (): Promise<string> => {
  try {
    const snapshot = await get(ref(database, "notices/easter"));
    if (snapshot.exists()) {
      const data = snapshot.val() as MessageData;
      return data.text;
    } else {
      // Mensagem padrão caso não exista no banco
      return `Nesta Páscoa, a CAPC celebra junto com você o renascer da esperança e o florescer da vida. 
          Que este período de renovação traga força, fé e novos caminhos para todos que fazem parte 
          da nossa comunidade. Continuamos juntos nesta jornada, compartilhando amor e cuidado.`;
    }
  } catch (error) {
    console.error("Erro ao buscar mensagem:", error);
    // Retorna a mensagem padrão em caso de erro
    return `Nesta Páscoa, a CAPC celebra junto com você o renascer da esperança e o florescer da vida. 
          Que este período de renovação traga força, fé e novos caminhos para todos que fazem parte 
          da nossa comunidade. Continuamos juntos nesta jornada, compartilhando amor e cuidado.`;
  }
};

// Funções para autenticação
export const loginAdmin = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Erro no login:", error);
    throw error;
  }
};

export const logoutAdmin = async (): Promise<boolean> => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error("Erro ao sair:", error);
    return false;
  }
};

// Verificar se o usuário está autenticado
export const isAuthenticated = (): boolean => {
  return auth.currentUser !== null;
};

// Exporta o objeto auth para ouvir mudanças de estado
export { auth };