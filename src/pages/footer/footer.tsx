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
    <div
      style={{
        width: "100%",
        height: "20vh",
        minHeight: "350px",
        maxHeight: "350px",
        backgroundColor: theme.colors.orangemain,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          maxWidth: "1200px",
          gap: 40,
        }}
      >
        <img
          src={images.homemgif}
          alt="homem"
          style={{
            width: "10%",
            height: "60%",
            minWidth: "120px",
            objectFit: "contain",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "center",            
            
          }}
        >
          <Text variant="iknow" label="Acompanhe nosso trabalho:" />
          <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <a
                target="_blank"
                href="https://www.facebook.com/CapcCxs"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 15,
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <FaFacebook size={45} />
                <Text variant="iknow" label="facebook/capc" />
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/capc.cxs/"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 15,
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <FaInstagram size={45} />
                <Text variant="iknow" label="insta.capc.com" />
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <a
                onClick={() => handleOpenWhatsApp()}
                target="_blank"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 15,
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <FaWhatsapp size={45} />
                <Text variant="iknow" label="(54) 8126-4699" />
              </a>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 15,
                }}
              >
                <FaPix size={45} />
                <Text variant="iknow" label="15 381 705 0001 73" />
              </div>
            </div>
          </div>
          <div style={{}}>
            <Text 
            variant="labelCard" 
            label="© 2025 Todos os direitos reservados a CAPC - Centro de Auxílio as Pessoas com Câncer."            
            />
            <div style={{width:"100%", display:"flex", justifyContent:"center", marginTop:10}}>
              <img src={images.LOGO_LARANJA} style={{width:"80px", height:"80px"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Footer;