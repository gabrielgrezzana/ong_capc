import theme from "../../theme/theme";
import Text from "../../atoms/text/text";

const History = () => {
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
        padding: "60px 20px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Elemento decorativo */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(247,124,44,0.1) 0%, transparent 70%)",
          zIndex: 0,
        }}
      ></div>

      {/* Título estilizado */}
      <h1
        style={{
          color: "#F77C2C",
          fontSize: "2.8rem",
          fontWeight: 700,
          margin: "0 0 40px 0",
          position: "relative",
          textAlign: "center",
          paddingBottom: "15px",
        }}
      >
        História CAPC
        <span
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100px",
            height: "4px",
            backgroundColor: "#F77C2C",
            borderRadius: "2px",
          }}
        ></span>
      </h1>

      {/* Container do texto com sombra */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          padding: "40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Text
          variant="history"
          label="O Centro de Auxílio às Pessoas com Câncer é uma entidade civil, sem
          fins lucrativos, foi fundado em 15 de março de 2012, na cidade de
          Caxias do Sul-RS, por um grupo de pessoas sensibilizadas com o
          problema da patologia câncer, devido a grande demanda na cidade que
          por vezes as instituições já existentes na cidade tinham fila de
          espera, por esse motivo nasceu o C.A.P.C. a fim de proporcionar uma
          melhor qualidade de vida aos acometidos, com ênfase no resgate de sua
          dignidade, autoestima e amor pela vida. C.A.P.C. é uma organização não
          governamental (ONG), apartidária, sem cunho religioso e sobrevive com
          o apoio, empatia e solidariedade da comunidade através do
          telemarketing, doações espontâneas e ações desenvolvidas para
          arrecadação de fundos para sua sustentabilidade e auxílio aos
          assistidos, sendo este regido pelas Normas do 3º Setor, Estatuto
          Próprio e normativas internas. As pessoas que são beneficiadas com os
          projetos sociais do C.A.P.C. são acolhidas na instituição pelo setor
          social. Onde é realizada uma triagem, com base à comprovação da
          patologia através de laudos médicos, e sua vulnerabilidade através de
          documentações, prescrições médicas e visitas domiciliares. Após
          análise e identificação de demandas e o contexto social as mesmas são
          atendidas, acompanhadas e orientadas conforme as suas necessidades,
          possibilidades financeiras do CAPC e encaminhadas para as redes do
          município."
        />
      </div>

      {/* Elemento decorativo inferior */}
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(44,124,247,0.05) 0%, transparent 70%)",
          zIndex: 0,
        }}
      ></div>
    </div>
  );
};

export default History;
