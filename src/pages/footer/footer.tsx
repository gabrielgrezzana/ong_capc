import theme from "../../theme/theme";
import images from "../../assets";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import Text from "../../atoms/text/text";

const Footer = () => {
  return (
    <div style={{
      width:"100%",
      height:"35vh",
      minHeight:"500px",
      maxHeight:"500px",
      backgroundColor: theme.colors.orangemain,
      display:"flex",
      alignItems:"center",
      justifyContent:"center",      
    }}>
        <img
          src={images.homemgif}
          alt="homem"
          style={{ width: "15%"  , height: "80%", margin:100 }}
        />
        <div style={{
          display:"flex",
          flexDirection:"column",
          gap:15
        }}>
          <a 
          target="_blank"
          href="https://www.facebook.com/capc.com.br"
          style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            gap:20,
            textDecoration: "none", // Remove o sublinhado
            color: "inherit", // Herda a cor do texto do elemento pai
            cursor: "pointer" // Mantém o comportamento de clique sem parecer um link
          }} >
            
            <FaFacebook size={60} />
            <Text variant="iknow" label="capc.facebook.com" />
            
          </a>
          <a 
          target="_blank"
          href="https://www.facebook.com/capc.com.br"
          style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            gap:20,
            textDecoration: "none", // Remove o sublinhado
            color: "inherit", // Herda a cor do texto do elemento pai
            cursor: "pointer" // Mantém o comportamento de clique sem parecer um link
          }}>
            <FaInstagram size={60} />
            <Text variant="iknow" label="insta.capc.com" />
          </a>
          <a 
          target="_blank"
          href="https://www.facebook.com/capc.com.br"
          style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            gap:20,
            textDecoration: "none", // Remove o sublinhado
            color: "inherit", // Herda a cor do texto do elemento pai
            cursor: "pointer" // Mantém o comportamento de clique sem parecer um link
          }}>
            <FaWhatsapp size={60} />
            <Text variant="iknow" label="(54) 9 9915-7599" />
          </a>
          <div         
          style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            gap:20,            
          }}>
            <FaPix size={60} />
            <Text variant="iknow" label="TALTALTALTALTAL" />
          </div>                    
          <Text variant="iknow" label="2025 CAPC. Todos os direitos reservados" />
        </div>                
    </div>
  )
}

export default Footer;