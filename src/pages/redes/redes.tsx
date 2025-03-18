import {FaFacebook} from "react-icons/fa";
import Text from "../../atoms/text/text";

import theme from "../../theme/theme";
const Redes = () => {
  const redes = ["TALTALTALTALTAL", "(54) 9 9915-7599", "insta.capc.com", "capc.facebook.com", "capc.org.com"];
  return (
    <div
  style={{
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.colors.background,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 40,
    paddingTop: 20,
  }}
>
  <h1 style={{ color: "#F77C2C", marginBottom: 20, alignSelf: "flex-start" }}>Redes / Como ajudar o CAPC</h1>
  <h1 style={{ color: "#F77C2C", marginBottom: 40, alignSelf: "center" }}>Você pode ajudar da seguinte maneira</h1>
  <Text 
    variant="iknow" 
    label="Ajudando o próximo, seu dinheiro vai para tal lugar, não sei muito o que escrever aqui, preciso falar com a Adri para saber mais sobre esse tipo de informação ou se é possível apenas um exemplo tal tal"     
  />
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      paddingLeft: 40,
    }}
  >
    {redes.map((label, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 15,
          padding: 10,
          borderRadius: 8,
          backgroundColor: "#2C3E50",
          width: "fit-content",
        }}
      >
        <a
          href="https://www.facebook.com/CAPC-Associacao-Comunit-ria-de-Apoio-Psicol-gico-105374951545401"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook color="#fff" size={40} />
        </a>
        <Text variant="history" label={label} />
      </div>
    ))}
  </div>
</div>


  );
};

export default Redes;
