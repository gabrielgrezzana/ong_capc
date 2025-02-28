import theme from "../../theme/theme";
import Text from "../../atoms/text/text";

const Mission = () => {
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
      <div style={{ width: "70%", height: "25%" }}>
        <p
          style={{
            color: "#F77C2C",
            marginLeft: 40,
            marginBottom: 25,
            fontSize: 32,
          }}
        >
          Missão
        </p>
        <Text
          variant="history"
          label="Nossa Missão é prestar auxílio às pessoas com câncer e seus familiares, proporcionando uma melhor qualidade de vida, resgatando sua autoestima, fortalecendo os vínculos familiares e sociais."
        />
      </div>
      <div style={{ width: "70%", height: "25%" }}>
        <p
          style={{
            color: "#F77C2C",
            marginLeft: 40,
            marginBottom: 25,
            fontSize: 32,
          }}
        >
          Visão
        </p>
        <Text
          variant="history"
          label="Nossa Visão é Estimular a participação na vida pública, contribuir para a inserção, reinserção e permanência na sociedade."
        />
      </div>
      <div style={{ width: "70%", height: "50%" }}>
        <p
          style={{
            color: "#F77C2C",
            marginLeft: 40,
            marginBottom: 25,
            fontSize: 32,
          }}
        >
          Objetivo
        </p>
        <Text
          variant="history"
          label="Acolher e orientar os beneficiários, auxiliando-os em suas necessidades biológicas,
 psicológicas e sociais, promovendo sua cidadania, integralidade, autonomia, 
qualidade de vida e bem estar, através de ações, eventos e atividades, resgatando
 o seu amor pela vida, possibilitando maior autonomia e superação das fragilidades
 vivenciadas, através de campanhas preventivas e de conscientização com ações
 socioassistencial que serão desenvolvidas por meio de oficinas e atividades que 
englobem a participação de multiprofissionais, assim como da sociedade civil, do setor público, privado e voluntários engajados em ações de responsabilidade social. "
        />
      </div>
    </div>
  );
};

export default Mission;
