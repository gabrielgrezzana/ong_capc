import theme from "../../theme/theme";
import Text from "../../atoms/text/text";

const WhoIAm = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "70vh",
        backgroundColor: theme.colors.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          color: "#F77C2C",
          marginLeft: 40,
          marginBottom: 25,
        }}
      >
        Quem Somos
      </h1>
      <div style={{ width: "70%", height: "60%" }}>
        <Text
          variant="history"
          label="O C.A.P.C. não é uma entidade médica, investe, acredita no diagnóstico precoce,
 no resgate da autoestima, na orientação sobre os benefícios de atividades físicas, 
boa alimentação, exames periódicos, acompanhamento médico, fortalecimento
 de vínculos familiares e o retorno ao convívio com a sociedade, por ter plena
 convicção que a superação do câncer dá-se 50% com tratamento oncológico
acompanhemento médico  e os outros 50% é através de sua autoestima e sede
 insaciável de viver."
        />
      </div>
    </div>
  );
};

export default WhoIAm;
