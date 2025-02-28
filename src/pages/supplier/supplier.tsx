import theme from "../../theme/theme";
import Text from "../../atoms/text/text";

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
          marginBottom: 25,
        }}
      >
        Oque Fornecemos
      </h1>
      <div style={{ width: "70%", height: "60%" }}>
        <Text
          variant="history"
          label="
Auxílio Transporte Municipal (para atendimentos médicos, quimioterapia, participação em eventos, atividades e oficinas); 
Atendimento Social e Psicológico; 
Suplementos Alimentares (em caráter emergencial); 
Leite; Cestas Básicas; Fraldas Geriátricas e infantis; Equipamentos para a utilização de Sondas (em caráter emergencial); 
Medicações; (Com prescrição médica e que não sejam fornecidas pelo S.U.S. e/ou até a disponibilização do mesmos através do Cess);
 Repasse de roupas, calçados, móveis e utensílios doados pela sociedade;
 Empréstimo de cadeiras de rodas, muletas, andadores entre outros equipamentos hospitalares e domésticos para cuidados com a saúde; 
"
        />
      </div>
    </div>
  );
};

export default Supplier;
