import theme from "../../theme/theme";
import Text from "../../atoms/text/text";

const History = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
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
            fontSize: 42,
            fontWeight:"bold",
            padding:10,
            borderRadius:15
          }}
      >
        História CAPC
      </h1>
      <div style={{ width: "70%", height: "60%" }}>
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
    </div>
  );
};

export default History;
