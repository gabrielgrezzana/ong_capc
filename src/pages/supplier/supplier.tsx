import theme from "../../theme/theme";
import images from "../../assets";

const Supplier = () => {
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
        O Que Fornecemos
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

      {/* Conteúdo principal */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap-reverse",
          gap: "40px",
          zIndex: 1,
        }}
      >
        {/* Lista de serviços */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            padding: "40px",
            position: "relative",
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

          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {[
              "Auxílio Transporte Municipal (para atendimentos médicos, quimioterapia, participação em eventos, atividades e oficinas)",
              "Atendimento Social e Psicológico",
              "Suplementos Alimentares (em caráter emergencial). Leite, Cestas Básicas, Fraldas Geriátricas e infantis",
              "Equipamentos para a utilização de Sondas (em caráter emergencial). Medicações (Com prescrição médica e que não sejam fornecidas pelo S.U.S.)",
              "Repasse de roupas, calçados, móveis e utensílios doados pela sociedade",
              "Empréstimo de cadeiras de rodas, muletas, andadores entre outros equipamentos hospitalares e domésticos para cuidados com a saúde",
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "20px",
                  paddingLeft: "20px",
                  position: "relative",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  color: "#555",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "8px",
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#F77C2C",
                    borderRadius: "50%",
                  }}
                ></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Imagem */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <img
            src={images.mulhergif}
            alt="Serviços CAPC"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
              borderRadius: "12px",
            }}
          />
        </div>
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

export default Supplier;
