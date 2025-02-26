import images from "../../assets";
import Header from "../../components/header/header";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#323232",
        height: "90%",
        flex: 1,
        width: "100vw",
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundColor: "#F77C2C",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "30%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
            Centro de Auxilio as pessoas com câncer CAPC
          </text>
          <img
            src={images.LOGO_LARANJA}
            alt="Logo laranja capc"
            width={300}
            height={250}
          />
          <text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
            A esperança é a estrela que nos guia em busca de um novo amanhã
          </text>
        </div>
        <Header />
      </div>
      <div
        style={{
          height: "40vh",
          width: "100%",
          backgroundColor: "#323232",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "60%",
            height: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "orange",
            borderRadius: 10,
          }}
        >
          <text>
            Avisos que o capc quer colocar no seu site, (pensar numm jeito disso
            ser dinamico)
          </text>
        </div>
      </div>
    </div>
  );
};

export default Home;
