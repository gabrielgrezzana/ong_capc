import theme from "../../theme/theme";
import { useState, useEffect } from "react";

 const styles = {
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '8px',
      width: '80%',
      maxWidth: '800px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
      borderBottom: '1px solid #eee'
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer'
    },
    modalBody: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'row'
    },
    qrcodeContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: '20px'
    },
    qrcodeImg: {
      maxWidth: '100%',
      height: 'auto'
    },
    textContainer: {
      flex: 1,
      paddingLeft: '20px',
      borderLeft: '1px solid #eee'
    }
  };
const Donation = () => {

  const [animationStarted, setAnimationStarted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);  

     useEffect(() => {
    // Wait 200ms before starting the animation
    const animationTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 300);

    // Show content after animation completes
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1000); // Adjust this timing based on your animation duration

    
    // Clean up timers
    return () => {
      clearTimeout(animationTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  

   const handleModalDonate = () => {
    setIsModalOpen(!isModalOpen);
  };

  

  return (
    <section
      style={{
        width: "100%",
        minHeight: "140vh",
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
          textAlign: "center",          
          position: "absolute",
          top: animationStarted ? "40px" : "50%", // Move from center (50%) to top (40px)
          left: "50%",
          transform: animationStarted 
            ? "translate(-50%, 0)" 
            : "translate(-50%, -50%)", // Center in page initially, then just center horizontally
          transition: "all 0.8s ease-out",
          zIndex: 10,
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
          Ajude nos!
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
        <img 
            src="https://i.imgur.com/l59PiHX.jpg" 
            style={{
              width:"100%", 
              height:"40vh",
              borderRadius:10,
              opacity: showContent ? 1 : 0,
              transition: "opacity 1s ease-out",
              marginTop: "20px"
            }} 
            alt="img de exemplo" 
          />
        {/* <img src="https://i.imgur.com/l59PiHX.jpg" style={{width:"100%", height:"40vh",borderRadius:10}} alt="img de exemplo" /> */}
      </div>


{isModalOpen && (
  <div style={styles.modalOverlay} onClick={handleModalDonate}>
    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <div style={styles.modalHeader}>
        <h2 style={{color: '#333', margin: 0}}>Faça sua doação</h2>
        <button style={styles.closeButton} onClick={handleModalDonate}>×</button>
      </div>
      <div style={styles.modalBody}>
        <div style={styles.qrcodeContainer}>
          {/* Substitua pelo caminho do seu QR code */}
          <img 
            src="https://i.imgur.com/example-qrcode.png" 
            alt="QR Code para doação" 
            style={styles.qrcodeImg} 
          />
        </div>
        <div style={styles.textContainer}>
          <h3 style={{color: '#333', marginTop: 0}}>Como fazer sua doação</h3>
          <p style={{color: '#333'}}>Escaneie o QR code ao lado para fazer sua doação. Sua contribuição é muito importante para nós.</p>
          <p style={{color: '#333'}}>Você também pode fazer uma transferência bancária usando os dados abaixo:</p>
          <ul style={{color: '#333'}}>
            <li>Banco: Exemplo</li>
            <li>Agência: 0000</li>
            <li>Conta: 00000-0</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)}  

      {/* Container dos cards */}
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
          marginTop: "calc(20px + 30vh + 100px)", // Espaço para título + altura da imagem + espaço extra
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.5s ease-out",
          pointerEvents: showContent ? "auto" : "none",
        }}
      >
        {/* Card Principal (70%) */}
        <div
          style={{
            flex: "0 0 70%",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "300px",
            transition: "transform 0.3s ease",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {e.currentTarget.style.transform = "translateY(-5px)"}}
          onMouseOut={(e) => {e.currentTarget.style.transform = "translateY(0)"}}
        >
          <h2 style={{ color: "#F77C2C", fontSize: "1.8rem", marginBottom: "15px" }}>
            Faça sua parte
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "20px" }}>
            Ajude-nos a continuar nosso trabalho fazendo uma doação financeira.
          </p>
          <button
            style={{
              backgroundColor: "#F77C2C",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "12px 30px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => {e.currentTarget.style.backgroundColor = "#e66a1e"}}
            onMouseOut={(e) => {e.currentTarget.style.backgroundColor = "#F77C2C"}}
            onClick={() => handleModalDonate()}
          >
            Fazer Doação
          </button>
        </div>
        
        {/* Card Secundário (30%) */}
        <div
          style={{
            flex: "0 0 calc(30% - 20px)",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            minHeight: "300px",
            transition: "transform 0.3s ease",
            cursor: "pointer",
            overflow: "auto",
          }}
          onMouseOver={(e) => {e.currentTarget.style.transform = "translateY(-5px)"}}
          onMouseOut={(e) => {e.currentTarget.style.transform = "translateY(0)"}}
        >
          <h2 style={{ color: "#F77C2C", fontSize: "1.8rem", marginBottom: "15px", alignSelf: "center" }}>
            Nossa Missão
          </h2>
          <div style={{ color: "#555", textAlign: "left", marginBottom: "20px", fontSize: "1.25rem", lineHeight: "1.5" }}>
            <p style={{ marginBottom: "10px" }}>
              Não sei se você sabe, mas <strong>enfrentar um câncer é sempre muito difícil e dolorido.</strong>
            </p>
            <p style={{ marginBottom: "10px" }}>
              Para <strong>minimizar</strong> o <strong>desafio</strong> desse momento <strong>oferecemos muito apoio e informação de qualidade.</strong>
            </p>
            <p style={{ marginBottom: "10px" }}>
              São muitas <strong>dúvidas, mudanças, problemas, medos e preocupações</strong> que surgem da noite para o dia. Para <strong>apoiar</strong>, <strong>orientar</strong> e <strong>aconselhar</strong> de <strong>maneira personalizada contamos com um time de especialistas no nosso programa de suporte gratuito</strong> e também promovemos <strong>rodas de conversa</strong>, espaço especialmente criado para <strong>troca</strong> de <strong>apoio entre pacientes</strong>.
            </p>
            <p style={{ marginBottom: "10px" }}>
              Tudo isso, para que <strong>nenhum paciente com câncer passe por esse momento com medo, com dúvidas e sozinho</strong>. <strong>Que tal nos ajudar a seguir fazendo tudo isso?</strong> <strong>Podemos contar com você?</strong>
            </p>
          </div>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#F77C2C",
              border: "2px solid #F77C2C",
              borderRadius: "8px",
              padding: "12px 30px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
              alignSelf: "center",
              marginTop: "auto",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#F77C2C";
              e.currentTarget.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#F77C2C";
            }}
          >
            Doar
          </button>
        </div>
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
      {/* Modal que aparece condicionalmente */}
      
    </section>
  );
};

export default Donation;
