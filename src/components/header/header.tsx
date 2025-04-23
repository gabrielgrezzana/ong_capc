const Header = () => {
  const styles = {
    header: {
      width: "100%",
      height: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 20px",
      position: "fixed" as const, // Agora está fixo!
      top: 0,
      left: 0,
      zIndex: 1000,
      backgroundColor: "rgba(255, 255, 255, 0.98)",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(5px)",
      borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    },
    nav: {
      display: "flex",
      gap: "12px",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "1200px",
      width: "100%",
      flexWrap: "wrap" as const,
    },
    button: {
      padding: "12px 24px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "transparent",
      color: "#555",
      fontSize: "16px",
      fontWeight: 600 as const,
      cursor: "pointer" as const,
      transition: "all 0.3s ease-in-out",
    },
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <button style={styles.button} onClick={() => scrollToSection("home")}>
          Início
        </button>
        <button style={styles.button} onClick={() => scrollToSection("atividades")}>
          Atividades
        </button>
        <button style={styles.button} onClick={() => scrollToSection("depoimentos")}>
          Depoimentos
        </button>
        <button style={styles.button} onClick={() => scrollToSection("historia")}>
          História
        </button>
        <button style={styles.button} onClick={() => scrollToSection("missao")}>
          Missão
        </button>
        <button style={styles.button} onClick={() => scrollToSection("momentos")}>
          Momentos
        </button>
        <button style={styles.button} onClick={() => scrollToSection("quem-somos")}>
          Quem Somos
        </button>
        <button style={styles.button} onClick={() => scrollToSection("fornecedores")}>
          Oque Fornecemos
        </button>
        <button style={styles.button} onClick={() => scrollToSection("cancer")}>
          Cancêr
        </button>
       
      </nav>
    </header>
  );
};

export default Header;
