import theme from "../../theme/theme";
import Text from "../../atoms/text/text";
import images from "../../assets";

const WhoIAm = () => {
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
          left: "-100px",
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
        Quem Somos
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
          flexWrap: "wrap",
          gap: "40px",
          zIndex: 1,
        }}
      >
        {/* Texto */}
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

          <Text
            variant="history"
            label="O C.A.P.C. não é uma entidade médica, investe, acredita no diagnóstico precoce, no resgate da autoestima, na orientação sobre os benefícios de atividades físicas, boa alimentação, exames periódicos, acompanhamento médico, fortalecimento de vínculos familiares e o retorno ao convívio com a sociedade, por ter plena convicção que a superação do câncer dá-se 50% com tratamento oncológico acompanhamento médico e os outros 50% é através de sua autoestima e sede insaciável de viver."
          />
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
            src={images.LOGO_LARANJA}
            alt="Logo CAPC"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
            }}
          />
        </div>
      </div>

      {/* Elemento decorativo inferior */}
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "-150px",
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

export default WhoIAm;
