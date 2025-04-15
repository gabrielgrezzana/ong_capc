import Card from "../../components/cards/card_activit/cards";
import theme from "../../theme/theme";

const Activit = () => {
  // Dados simulados das atividades (substitua pelos dados reais)
 const atividades = [
  {
    image: "https://i.imgur.com/z4GpgRh.jpg",
    title: "Doação de cestas básicas",
    description:
      "Fornecimento de alimentos essenciais para pacientes oncológicos e suas famílias em situação de vulnerabilidade social.",
    backgroundColor: "#F77C2C",
  },
  {
    image: "https://i.imgur.com/3PFQjW5.jpg",
    title: "Fornecimento de leite e suplementos alimentares",
    description: "Apoio nutricional emergencial para complementar a dieta de pacientes em tratamento contra o câncer.",
    backgroundColor: "#2C8BF7",
  },
  {
    image: "https://i.imgur.com/jDwLUJ4.jpg",
    title: "Doação de fraldas geriátricas e infantis",
    description:
      "Distribuição gratuita de fraldas para pacientes com necessidades especiais, contribuindo para o conforto e dignidade.",
    backgroundColor: "#2CF7A0",
  },
  {
    image: "https://i.imgur.com/OSkPR8m.jpg",
    title: "Fornecimento de medicações (não disponíveis pelo SUS)",
    description: "Auxílio na obtenção de medicamentos prescritos que não são fornecidos pelo sistema público de saúde.",
    backgroundColor: "#F7C42C",
  },
  {
    image: "https://i.imgur.com/MDkqwCi.jpg",
    title: "Auxílio transporte para tratamentos médicos",
    description: "Suporte logístico para deslocamento de pacientes para consultas, exames e sessões de quimioterapia.",
    backgroundColor: "#A02CF7",
  },
  {
    image: "https://i.imgur.com/z4GpgRh.jpg",
    title: "Empréstimo de equipamentos hospitalares",
    description: "Disponibilização de cadeiras de rodas, muletas, andadores e outros equipamentos necessários para cuidados domiciliares.",
    backgroundColor: "#F72C8B",
  },
  {
    image: "https://i.imgur.com/ohGFHcQ.jpg",
    title: "Atendimento social e psicológico",
    description: "Suporte emocional e orientação profissional para pacientes e familiares durante o tratamento oncológico.",
    backgroundColor: "#2CF7E0",
  },
];

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: theme.colors.background,
        padding: "80px 20px 60px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cabeçalho com título estilizado */}
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
          Atividades CAPC
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
        <p
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
          Conheça nossas atividades e programas desenvolvidos para promover
          inclusão e desenvolvimento
        </p>
      </div>

      {/* Grid de cards */}
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "30px",
          justifyContent: "center",
          padding: "0 20px",
        }}
      >
        {atividades.map((atividade, index) => (
          <Card
            key={index}
            image={atividade.image}
            title={atividade.title}
            description={atividade.description}
            backgroundColor={atividade.backgroundColor}
          />
        ))}
      </div>

      {/* Elementos decorativos */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(247,124,44,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(44,124,247,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      ></div>
    </section>
  );
};

export default Activit;
