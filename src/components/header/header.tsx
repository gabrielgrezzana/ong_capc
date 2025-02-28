const Header = () => {
  const style = {
    button: {
      margin: 15,
      borderWidth: 0,
      padding: 5,
      borderRadius: 5,
      backgroundColor: "#f36f21",
    },
  };
  return (
    <header
      className="header"
      style={{
        width: "100%",
        height: 50,
        alignItems: "center",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <nav className="nav">
        <button style={style.button}>
          <text
            style={{
              color: "#fff",
              fontSize: 20,
              marginLeft: 5,
              marginRight: 5,
              fontWeight: "bold",
            }}
          >
            Atividades
          </text>
        </button>
        <button style={style.button}>
          <text
            style={{
              color: "#fff",
              fontSize: 20,
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            Fornecedores
          </text>
        </button>
        <button style={style.button}>
          <text
            style={{
              color: "#fff",
              fontSize: 20,
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            Missão
          </text>
        </button>
        <button style={style.button}>
          <text
            style={{
              color: "#fff",
              fontSize: 20,
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            Fotos
          </text>
        </button>
        <button style={style.button}>
          <text
            style={{
              color: "#fff",
              fontSize: 20,
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            História
          </text>
        </button>
        <button style={style.button}>
          <text
            style={{
              color: "#fff",
              fontSize: 20,
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            Quem somos
          </text>
        </button>
        <button style={style.button}>
          <text
            style={{
              color: "#fff",
              fontSize: 20,
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            Redes
          </text>
        </button>
        <button style={style.button}>
          <text
            style={{
              color: "#fff",
              fontSize: 20,
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            Depoimentos
          </text>
        </button>
        <button style={style.button}>
          <text
            style={{
              color: "#fff",
              fontSize: 20,
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            Oque é câncer
          </text>
        </button>
      </nav>
    </header>
  );
};

export default Header;
