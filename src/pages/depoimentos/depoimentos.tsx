import theme from "../../theme/theme";
import Testimonials from "../../components/cards/card_testimonials/testimonials";

const Depoimentos = () => {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: theme.colors.background,
        padding: "80px 20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Título com destaque */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "60px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#F77C2C",
            fontSize: "2.5rem",
            fontWeight: 700,
            margin: 0,
            position: "relative",
            display: "inline-block",
          }}
        >
          Depoimentos
          <span
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              backgroundColor: "#F77C2C",
              borderRadius: "2px",
            }}
          ></span>
        </h1>
        {/* <p
          style={{
            color: "#666",
            fontSize: "1.1rem",
            marginTop: "20px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          Veja o que as pessoas estão falando sobre nosso trabalho
        </p> */}
      </div>

      {/* Container dos cards */}
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: "wrap",
          gap: "40px",
          padding: "20px",
        }}
      >
        <Testimonials
          textToShow="A equipe do CAPC transformou completamente nossa abordagem de inclusão. O trabalho desenvolvido foi fundamental para melhorar a qualidade de vida dos nossos alunos. A dedicação e profissionalismo são incomparáveis."                              
        />

        <Testimonials
          textToShow="Como mãe de uma criança com necessidades especiais, posso dizer que o CAPC fez toda a diferença no desenvolvimento do meu filho. A evolução que observamos em poucos meses foi surpreendente. Recomendo a todos!"                              
        />

        <Testimonials
          textToShow="O trabalho do CAPC é essencial para nossa comunidade. Eles trazem não apenas conhecimento técnico, mas também um olhar humano e sensível para cada caso. Parceria fundamental para nossa instituição."                              
        />
      </div>

      {/* Elementos decorativos */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 20% 30%, rgba(247,124,44,0.1) 0%, transparent 40%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      ></div>
    </section>
  );
};

export default Depoimentos;
