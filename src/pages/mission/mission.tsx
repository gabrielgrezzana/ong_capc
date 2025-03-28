import theme from "../../theme/theme";
import Text from "../../atoms/text/text";

const Mission = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: theme.colors.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "80px 20px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Elemento decorativo */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(247,124,44,0.1) 0%, transparent 70%)",
          zIndex: 0,
        }}
      ></div>

      {/* Container principal */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          zIndex: 1,
        }}
      >
        {/* Card Missão */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            padding: "40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "6px",
              height: "100%",
              backgroundColor: "#F77C2C",
            }}
          ></div>

          <h2
            style={{
              color: "#F77C2C",
              fontSize: "2rem",
              fontWeight: 700,
              margin: "0 0 20px 0",
              position: "relative",
              paddingLeft: "20px",
            }}
          >
            Missão
          </h2>

          <Text
            variant="history"
            label="Nossa Missão é prestar auxílio às pessoas com câncer e seus familiares, proporcionando uma melhor qualidade de vida, resgatando sua autoestima, fortalecendo os vínculos familiares e sociais."
          />
        </div>

        {/* Card Visão */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            padding: "40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "6px",
              height: "100%",
              backgroundColor: "#F77C2C",
            }}
          ></div>

          <h2
            style={{
              color: "#F77C2C",
              fontSize: "2rem",
              fontWeight: 700,
              margin: "0 0 20px 0",
              position: "relative",
              paddingLeft: "20px",
            }}
          >
            Visão
          </h2>

          <Text
            variant="history"
            label="Nossa Visão é estimular a participação na vida pública, contribuir para a inserção, reinserção e permanência na sociedade."
          />
        </div>

        {/* Card Objetivo */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            padding: "40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "6px",
              height: "100%",
              backgroundColor: "#F77C2C",
            }}
          ></div>

          <h2
            style={{
              color: "#F77C2C",
              fontSize: "2rem",
              fontWeight: 700,
              margin: "0 0 20px 0",
              position: "relative",
              paddingLeft: "20px",
            }}
          >
            Objetivo
          </h2>

          <Text
            variant="history"
            label="Acolher e orientar os beneficiários, auxiliando-os em suas necessidades biológicas, psicológicas e sociais, promovendo sua cidadania, integralidade, autonomia, qualidade de vida e bem estar, através de ações, eventos e atividades, resgatando o seu amor pela vida, possibilitando maior autonomia e superação das fragilidades vivenciadas, através de campanhas preventivas e de conscientização com ações socioassistencial que serão desenvolvidas por meio de oficinas e atividades que englobem a participação de multiprofissionais, assim como da sociedade civil, do setor público, privado e voluntários engajados em ações de responsabilidade social."
          />
        </div>
      </div>

      {/* Elemento decorativo inferior */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(44,124,247,0.05) 0%, transparent 70%)",
          zIndex: 0,
        }}
      ></div>
    </div>
  );
};

export default Mission;
