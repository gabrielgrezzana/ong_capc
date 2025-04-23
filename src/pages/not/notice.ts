// // Arquivo: Notice.tsx
// import { useState, useEffect } from 'react';
// import React from 'react';
// import { getMessage } from '../../database/firebaseConfig';

// // Definindo o tipo para as props (vazio neste caso)


// const Notice = () => {
//   const [text, setText] = useState<string>('Carregando mensagem...');

//   useEffect(() => {
//     // Função para buscar a mensagem
//     const fetchMessage = async () => {
//       try {
//         const message = await getMessage();
//         setText(message);
//       } catch (error) {
//         console.error('Erro ao buscar mensagem:', error);
//         // Mensagem padrão em caso de erro
//         setText(`Nesta Páscoa, a CAPC celebra junto com você o renascer da esperança e o florescer da vida. 
//           Que este período de renovação traga força, fé e novos caminhos para todos que fazem parte 
//           da nossa comunidade. Continuamos juntos nesta jornada, compartilhando amor e cuidado.`);
//       }
//     };

//     fetchMessage();
//   }, []);

//   return <div>{text}</div>;
// };

// export default Notice;