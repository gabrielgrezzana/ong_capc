// Função para buscar todas as mensagens do banco (sem limite)
export const getAllMessages = async (): Promise<MessageWithId[]> => {
  try {
    // Criamos uma consulta ordenada por data (mais recentes primeiro)
    const noticesCollection = collection(db, "notices");
    const q = query(
      noticesCollection, 
      orderBy("updatedAt", "desc")
    );
    
    // Executamos a consulta para obter todos os documentos
    const querySnapshot = await getDocs(q);
    
    // Array para armazenar as mensagens com seus IDs
    const messages: MessageWithId[] = [];
    
    // Se encontrou algum documento
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        const data = doc.data() as MessageData;
        // Adiciona ao array com o ID do documento
        messages.push({
          id: doc.id,
          notice: data.notice,
          updatedAt: data.updatedAt
        });
      });
      
      return messages;
    }
    
    // Se não encontrou nada, retorna um array vazio
    return [];
  } catch (error) {
    console.error("Erro ao buscar todas as mensagens:", error);
    return [];
  }
};

// Função para excluir uma mensagem pelo ID
export const deleteMessage = async (messageId: string): Promise<boolean> => {
  try {
    // Referência ao documento que será excluído
    const messageRef = doc(db, "notices", messageId);
    
    // Executa a exclusão
    await deleteDoc(messageRef);
    
    console.log("Mensagem excluída com sucesso:", messageId);
    return true;
  } catch (error) {
    console.error("Erro ao excluir mensagem:", error);
    return false;
  }
};// Arquivo: firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, Firestore, query, orderBy, limit, getDocs, deleteDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, signOut, User, Auth } from "firebase/auth";

// Interface para o tipo de configuração do Firebase
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Substitua com suas configurações do Firebase
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyCue-HnXDJ3flN_1RnXwQ6TGmacSMwnOJ8",
  authDomain: "capc-7ac3e.firebaseapp.com",
  projectId: "capc-7ac3e",
  storageBucket: "capc-7ac3e.firebasestorage.app",
  messagingSenderId: "502287254305",
  appId: "1:502287254305:web:0a8429ed181abdbc6df460",
  //measurementId: "G-CY6RCFEZZC"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
const auth: Auth = getAuth(app);

// Interface para o objeto de mensagem (expandida com id)
interface MessageData {
  notice: string;
  updatedAt: string;
}

// Interface para mensagem com id para exibição
export interface MessageWithId extends MessageData {
  id: string;
}

// Função para salvar a mensagem (agora usando Firestore)
export const saveMessage = async (message: string): Promise<boolean> => {
  try {
    const messageData: MessageData = {
      notice: message,
      updatedAt: new Date().toISOString()
    };
    
    // Usando Firestore com ID automático
    // addDoc retorna uma referência ao documento com o ID gerado
    const noticesCollection = collection(db, "notices");
    const docRef = await addDoc(noticesCollection, messageData);
    console.log("Documento criado com ID:", docRef.id);
    return true;
  } catch (error) {
    console.error("Erro ao salvar mensagem:", error);
    return false;
  }
};

// Mensagem padrão para casos de erro ou banco vazio
const DEFAULT_MESSAGE = `Nesta Páscoa, a CAPC celebra junto com você o renascer da esperança e o florescer da vida. 
Que este período de renovação traga força, fé e novos caminhos para todos que fazem parte 
da nossa comunidade. Continuamos juntos nesta jornada, compartilhando amor e cuidado.`;

// Função para buscar as últimas 3 mensagens de forma otimizada
export const getMessages = async (): Promise<string[]> => {
  try {
    // Criamos uma consulta otimizada, pegando os 3 documentos mais recentes
    const noticesCollection = collection(db, "notices");
    const q = query(
      noticesCollection, 
      orderBy("updatedAt", "desc"), 
      limit(3)
    );
    
    // Usamos getDocs com limit(3) para obter os três documentos mais recentes
    const querySnapshot = await getDocs(q);
    
    // Array para armazenar as mensagens
    const messages: string[] = [];
    
    // Se encontrou algum documento
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        const data = doc.data() as MessageData;
        messages.push(data.notice);
      });
      
      return messages;
    }
    
    // Se não encontrou nada, retorna um array com a mensagem padrão
    return [DEFAULT_MESSAGE];
  } catch (error) {
    console.error("Erro ao buscar mensagens:", error);
    return [DEFAULT_MESSAGE];
  }
};

// Mantendo a função original para compatibilidade, agora usando a nova função
export const getMessage = async (): Promise<string> => {
  const messages = await getMessages();
  return messages[0]; // Retorna a primeira mensagem (a mais recente)
};

// Funções para autenticação (permanecem iguais)
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

// Exporta o objeto auth para ouvir mudanças de estado e o db do Firestore
export { auth, db };