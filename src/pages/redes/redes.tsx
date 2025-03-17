import {FaFacebook, FaInstagram} from "react-icons/fa";

import theme from "../../theme/theme";
const Redes = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.colors.background,        
      }}
    >
      <h1 style={{ color: "#F77C2C", marginLeft: 40 }}>Redes</h1>
      <div style={{
        width:"100%",
        height:"80%",
        display:"flex", 
        alignItems:"center",
        justifyContent:"flex-start",        
        marginLeft:25 ,        
        flexDirection:"column"
        }}>
        
        <a href="https://www.facebook.com/CAPC-Associacao-Comunit-ria-de-Apoio-Psicol-gico-105374951545401" target="_blank" rel="noopener noreferrer">
          <FaFacebook color="#fff" size={80} style={{marginLeft:15}} />
        </a>
        <a href="https://www.facebook.com/CAPC-Associacao-Comunit-ria-de-Apoio-Psicol-gico-105374951545401" target="_blank" rel="noopener noreferrer">
          <FaInstagram color="#fff" size={80} style={{marginLeft:15}} />
        </a>
        <a href="https://www.facebook.com/CAPC-Associacao-Comunit-ria-de-Apoio-Psicol-gico-105374951545401" target="_blank" rel="noopener noreferrer">
          <FaFacebook color="#fff" size={80} style={{marginLeft:15}} />
        </a>
      </div>
    </div>
  );
};

export default Redes;
