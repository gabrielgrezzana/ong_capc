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
          <div style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            gap:20
          }}>
          <FaFacebook size={60} />
          <Text variant="iknow" label="capc.facebook.com" />
          </div>
          <div style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            gap:20
          }}>
          <FaInstagram size={60} />
          <Text variant="iknow" label="insta.capc.com" />
          </div>
          <div style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            gap:20
          }}>
          <FaWhatsapp size={60} />
          <Text variant="iknow" label="(54) 9 9915-7599" />
          </div>
          <div style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            gap:20
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