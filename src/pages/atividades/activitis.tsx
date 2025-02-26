import Card from "../../components/cards/card_activit/cards";
import theme from "../../theme/theme";
const Activit = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <h1 style={{ color: "#F77C2C", marginLeft: 40 }}>Atividades CAPC</h1>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: theme.colors.background,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "80%",
            height: "80%",
            flexWrap: "wrap",
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Activit;
