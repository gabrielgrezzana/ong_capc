const CancerPage = () => {
  // Dados dos cards
    const cards = [
    {
      title: "Será que é Câncer?",
      color: "#F77C2C", // Laranja
      phrases: [
        "Sinais de alerta que não devem ser ignorados",
        "Quando procurar um médico especialista",
        "Diferenças entre tumores benignos e malignos",
        "Importância do diagnóstico precoce"
      ],
      url: "https://www.oncoguia.org.br/sera-que-e/"
    },
    {
      title: "É Câncer",
      color: "#e74c3c", // Vermelho
      phrases: [
        "Compreendendo seu diagnóstico",
        "Como contar para família e amigos",
        "Preparando-se emocionalmente",
        "Buscando uma segunda opinião médica"
      ],
      url: "https://www.oncoguia.org.br/e-cancer/"
    },
    {
      title: "Tratamentos",
      color: "#3498db", // Azul
      phrases: [
        "Opções de tratamento disponíveis",
        "Equipe multidisciplinar de cuidados",
        "Lidando com os efeitos colaterais",
        "Terapias complementares"
      ],
      url: "https://www.oncoguia.org.br/tratamentos/"
    },
    {
      title: "Vivendo com Câncer",
      color: "#2ecc71", // Verde
      phrases: [
        "Adaptações na rotina diária",
        "Alimentação e exercícios recomendados",
        "Cuidados com a saúde mental",
        "Grupos de apoio e terapia"
      ],
      url: "https://www.oncoguia.org.br/vivendo-com-cancer/"
    },
    {
      title: "Vida após o Câncer",
      color: "#9b59b6", // Roxo
      phrases: [
        "Acompanhamento médico pós-tratamento",
        "Redescobrir o bem-estar físico e emocional",
        "Retorno às atividades cotidianas",
        "Celebrando cada conquista"
      ],
      url: "https://www.oncoguia.org.br/vida-apos-o-cancer/"
    }
  ];

  // Componente Card

  interface Props {
    title: string;
    color: string;
    phrases: string[];
    url: string;
  }

  const Card = ({ title, color, phrases, url }: Props) => (
    <div
      style={{
        width: "280px",
        minHeight: "380px",
        backgroundColor: color,
        borderRadius: "12px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "25px 20px",
        margin: "0 15px",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s ease",
        flex: "0 0 auto",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Título do card */}
      <h2
        style={{
          color: "white",
          fontSize: "1.8rem",
          fontWeight: "700",
          margin: "10px 0 30px 0",
          textAlign: "center"
        }}
      >
        {title}
      </h2>
      
      {/* Lista de frases */}
      <ul
        style={{
          listStyle: "none",
          padding: "0",
          margin: "0 0 auto 0",
          width: "100%"
        }}
      >
        {phrases.map((phrase, index) => (
          <li
            key={index}
            style={{
              padding: "10px 5px",
              borderBottom: index < phrases.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
              fontSize: "0.95rem",
              color: "white",
              display: "flex",
              alignItems: "flex-start"
            }}
          >
            <span
              style={{
                color: "white",
                marginRight: "10px",
                fontWeight: "bold"
              }}
            >
              •
            </span>
            {phrase}
          </li>
        ))}
      </ul>
      
      {/* Botão Saiba Mais */}
      <button
        style={{
          marginTop: "25px",
          padding: "10px 20px",
          backgroundColor: "white",
          color: color,
          border: "none",
          borderRadius: "25px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease"
        }}
        onClick={() => window.open(url, "_blank")}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        Saiba Mais
      </button>
    </div>
  );

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#323232",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "80px 20px",
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
          margin: "0 0 60px 0",
          position: "relative",
          textAlign: "center",
          paddingBottom: "15px",
        }}
      >
        Câncer
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

      {/* Container para o carrossel horizontal */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          padding: "0 20px"
        }}
      >
        {/* Área de rolagem horizontal */}
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            padding: "20px 0",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "-ms-autohiding-scrollbar",
            scrollbarWidth: "thin",
            scrollbarColor: "#F77C2C transparent",
          }}
        >
          {cards.map((card, index) => (
            <Card 
              key={index} 
              title={card.title} 
              color={card.color} 
              phrases={card.phrases} 
              url={card.url}
            />
          ))}
        </div>
        
        {/* Indicação de rolagem */}
        <div
          style={{
            textAlign: "center",
            color: "#666",
            marginTop: "20px",
            fontSize: "0.9rem"
          }}
        >
          ← Deslize para o lado para ver mais →
        </div>
      </div>
    </div>
  );
};

export default CancerPage;