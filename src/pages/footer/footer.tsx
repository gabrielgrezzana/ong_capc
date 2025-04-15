import theme from "../../theme/theme";
import images from "../../assets";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import Text from "../../atoms/text/text";

const Footer = () => {
  const handleOpenWhatsApp = (): void => {
    // Formato internacional: código do país + número
    const phoneNumber = "5554981264699";
    
    // Mensagem pré-definida - deve ser codificada para URL
    const message = encodeURIComponent("Olá! Boa Tarde! Estou entrando em contato através do seu site.");
    
    // URL com número e mensagem
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    
    if (typeof window !== "undefined") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };
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
            <Text variant="iknow" label="facebook/capc" />
            
          </a>
          <a 
          target="_blank"
          href="https://www.facebook.com/CapcCxs"
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
          onClick={() => handleOpenWhatsApp()}
          target="_blank"
          href="https://www.instagram.com/capc.cxs/"
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
            <Text variant="iknow" label="(54) 8126-4699" />
          </a>
          <div         
          style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            gap:20,            
          }}>
            <FaPix size={60} />
            <Text variant="iknow" label="15 381 705 0001 73" />
          </div>                    
          <Text variant="iknow" label="2025 CAPC. Todos os direitos reservados" />
        </div>                
    </div>
  )
}

export default Footer;