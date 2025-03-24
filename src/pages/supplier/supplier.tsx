import theme from "../../theme/theme";
import Text from "../../atoms/text/text";
import images from "../../assets";

const Supplier = () => {
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
          marginBottom: 250,
          fontSize:45
        }}
      >
        Oque Fornecemos
      </h1>
      <div style={{display:"flex", flexDirection:"row", height:"80%", maxHeight:"80%"}}>
        <div style={{ width: "70%", height: "60%", textAlign:"center", alignItems:"center", display:"flex",justifyContent:"center", flexDirection:"column" }}>
          <Text variant="history" label="- Auxílio Transporte Municipal (para atendimentos médicos, quimioterapia, participação em eventos, atividades e oficinas)."/>
          <Text variant="history" label="- Atendimento Social e Psicológico."/>
          <Text variant="history" label="- Suplementos Alimentares (em caráter emergencial). Leite, Cestas Básicas, Fraldas Geriátricas e infantis."/>
          <Text variant="history" label="- Equipamentos para a utilização de Sondas (em caráter emergencial). Medicações. (Com prescrição médica e que não sejam fornecidas pelo S.U.S. e/ou até a disponibilização do mesmos através do Cess)."/>
          <Text variant="history" label="- Repasse de roupas, calçados, móveis e utensílios doados pela sociedade."/>
          <Text variant="history" label="- Empréstimo de cadeiras de rodas, muletas, andadores entre outros equipamentos hospitalares e domésticos para cuidados com a saúde."/>        
        </div>
        <div style={{ width: "30%", height: "60%", textAlign:"center", alignItems:"center", display:"flex",justifyContent:"center", flexDirection:"column" }}>
          <img
          src={images.mulhergif}
          alt="mulher"
          style={{ width: "50%"  , height: "80%", maxWidth:"350px", minWidth:"350px",maxHeight:"450px", minHeight:"450px" }}
        />
        </div>
      </div>
    </div>
  );
};

export default Supplier;
